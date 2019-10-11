import React from "react";

import { render, fireEvent } from "@testing-library/react-native";

import Input from "../Input";

jest.mock("../Icon", () => icon => {
  const { Text } = require("react-native");
  return <Text>{icon.name}</Text>;
});

describe("Input", () => {
  it("renders a placeholder", () => {
    const { getByPlaceholderText } = render(<Input placeholder="Buscar!" />);
    const content = getByPlaceholderText("Buscar!");
    expect(content).toBeTruthy();
  });

  it("accepts a text value", () => {
    const { getByDisplayValue } = render(<Input value="Quijote" />);
    const content = getByDisplayValue("Quijote");
    expect(content).toBeTruthy();
  });

  it("triggers the correct event", () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={onChange} placeholder="Buscar" />
    );
    const input = getByPlaceholderText("Buscar");

    fireEvent.change(input, { target: { value: "Quijote" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("renders an icon", () => {
    const { getByText } = render(<Input icon="search-icon" />);
    const content = getByText("search-icon");
    expect(content).toBeTruthy();
  });
});
