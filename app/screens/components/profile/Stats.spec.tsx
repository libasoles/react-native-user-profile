import React from "react";
import { render } from "@testing-library/react-native";

import Stats from "./Stats";

const data = {
  followers: 5,
  following: 15,
  reviews: 7,
  libraryBooks: 19,
  lists: 2
};

test("labels are rendering", () => {
  const { getByText } = render(<Stats data={data} />);
  const labels = ["Libros", "Reseñas", "Seguidores", "Seguidos", "Listas"];
  for (const label of labels) {
    expect(getByText(label)).toBeTruthy();
  }
});

test("data is being rendered", () => {
  const { getByTestId } = render(<Stats data={data} />);
  const pairs = Object.entries(data);
  for (const [keyName] of pairs) {
    expect(getByTestId(keyName)).toBeTruthy();
  }
});
