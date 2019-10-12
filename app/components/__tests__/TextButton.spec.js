import React from "react";
import {fireEvent, render} from "@testing-library/react-native";

import TextButton from "../TextButton";

it('displays the correct text', () => {
  const { getByText } = render(<TextButton>Save</TextButton>);
  const result = getByText('Save');
  expect(result).toBeTruthy();
});

it("triggers the correct event", () => {
  const onPress = jest.fn();
  const { getByText } = render(
    <TextButton onPress={onPress}>Save</TextButton>
  );
  const button = getByText("Save");

  fireEvent.press(button);
  expect(onPress).toHaveBeenCalledTimes(1);
});
