import React from "react";
import {fireEvent, render} from "@testing-library/react-native";

import Button from "../Button";

it('displays the correct text', () => {
  const { getByText } = render(<Button>Save</Button>);
  const result = getByText('Save');
  expect(result).toBeTruthy();
});

it("triggers the correct event", () => {
  const onPress = jest.fn();
  const { getByText } = render(
    <Button onPress={onPress}>Save</Button>
  );
  const button = getByText("Save");

  fireEvent.press(button);
  expect(onPress).toHaveBeenCalledTimes(1);
});
