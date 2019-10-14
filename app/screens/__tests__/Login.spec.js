import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import Login from "../Login";

jest.mock("../../components/Icon", () => icon => {
  const { Text } = require("react-native");
  return <Text>{icon.name}</Text>;
});

test("all texts appears on screen", () => {
  const { getByText, getAllByText, getByTestId, getByPlaceholderText } = render(
    <Login onSubmit={() => {}} />
  );

  expect(getAllByText(/Iniciar sesión/i)[0]).toBeTruthy(); // title
  expect(getByText(/Ingresar con facebook/i)).toBeTruthy();
  expect(getByTestId("submit")).toBeTruthy(); // button

  expect(getByPlaceholderText(/Ingresa usuario o e-mail/i)).toBeTruthy();
  expect(getByPlaceholderText(/Ingresa tu contraseña/i)).toBeTruthy();

  expect(getByText(/¿Olvidaste tu contraseña?/i)).toBeTruthy();
  expect(getByText(/¿No tienes una cuenta?/i)).toBeTruthy();
  expect(getByText(/Regístrate ahora/i)).toBeTruthy();
});

describe("form", () => {
  let data = {};

  beforeEach(() => {
    data = {};
  });

  test("form submits correct data", () => {
    const utils = renderForm();
    const { onSubmit, getByPlaceholderText, getByTestId } = utils;

    assertFormIsEditable(getByPlaceholderText);
    assertSubmitsCorrectData({ onSubmit, getByTestId });
  });

  function renderForm() {
    const onSubmit = jest.fn(formData => {
      data = formData;
    });
    const utils = render(<Login onSubmit={onSubmit} />);

    return {
      onSubmit,
      ...utils
    };
  }

  function assertFormIsEditable(getByPlaceholderText) {
    const user = getByPlaceholderText(/Ingresa usuario o e-mail/i);
    const pass = getByPlaceholderText(/Ingresa tu contraseña/i);

    expect(user.props.value).toBe("");
    expect(pass.props.value).toBe("");

    fireEvent.change(user, { target: { value: "Sancho" } });
    fireEvent.change(pass, { target: { value: "LaM4nch4" } });
    expect(user.props.value).toBe("Sancho");
    expect(pass.props.value).toBe("LaM4nch4");
  }

  function assertSubmitsCorrectData({ onSubmit, getByTestId }) {
    const submitButton = getByTestId("submit");
    fireEvent.press(submitButton);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(data).toEqual({
      username: "Sancho",
      password: "LaM4nch4"
    });
  }
});
