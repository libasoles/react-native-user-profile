import React from "react";
import { render } from "@testing-library/react-native";

import TextFragment from "../TextFragment";

test("content rendering", () => {
  const expectedContent = "Content renders";
  const { getByText } = render(<TextFragment>{expectedContent}</TextFragment>);

  const actualContent = getByText(expectedContent);
  expect(actualContent).toBeTruthy();
});
