import React from "react";
import { render } from "@testing-library/react-native";

import AlibrateText from "../app/components/AlibrateText";

test("content rendering", () => {
  const expectedContent = "Content renders";
  const { getByText } = render(<AlibrateText>{expectedContent}</AlibrateText>);

  const actualContent = getByText(expectedContent);
  expect(actualContent).toBeTruthy();
});
