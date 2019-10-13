import React from "react";
import { render } from "@testing-library/react-native";

import Login from "./Login";

jest.mock("../components/Icon", () => icon => {
  const { Text } = require("react-native");
  return <Text>{icon.name}</Text>;
});

test("Login", () => {
  const {
    getByText,
    getAllByText,
    getByPlaceholderText,
  } = render(<Login />);

  expect(getAllByText(/Iniciar sesión/i)[0]).toBeTruthy(); // title
  expect(getByText(/Ingresar con facebook/i)).toBeTruthy();
  expect(getAllByText(/Iniciar sesión/i)[1]).toBeTruthy(); // button

  expect(getByPlaceholderText(/Ingresa usuario o e-mail/i)).toBeTruthy();
  expect(getByPlaceholderText(/Ingresa tu contraseña/i)).toBeTruthy();

  expect(getAllByText(/¿Olvidaste tu contraseña?/i)[1]).toBeTruthy();
  expect(getAllByText(/¿No tienes una cuenta?/i)[1]).toBeTruthy();
  expect(getAllByText(/Regístrate ahora/i)[1]).toBeTruthy();
});
