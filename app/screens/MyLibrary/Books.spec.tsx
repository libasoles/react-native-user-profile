import React from "react";
import { render } from "@testing-library/react-native";

import Books from "./Books";

jest.mock("../../components/Icon", () => icon => {
  const { Text } = require("react-native");
  return <Text>{icon.name}</Text>;
});

describe("Book", () => {
  const books = [
    {
      id: "5d9b59d94658423d425a4085",
      status: "readed",
      title: "ROMEO Y JULIETA",
      author: "WILLIAM SHAKESPEARE",
      cover: "b/59872eb3cba2bce50c1fbcd6/79cc66a6-ffd4-44cf-92c5-0fb0bd4eb23d",
      description:
        "La icónica tragedia comienza con dos familias de Verona, los Montesco y los Capuleto, enemistadas desde tiempos inmemoriales. El odio es tan fuerte que incluso se lleva la vida de víctimas inocentes. Sin embargo, dos jóvenes provenientes de las familias enfrentadas se enamoran el uno del otro y se entregan, de esta manera, a un destino fatal. \nRomeo y Julieta, de William Shakespeare, no es solo un clásico de la literatura universal, sino también sinónimo del amor desventurado.\n\nEn ALIBRATE puedes encontrar todas las reseñas de los libros de William Shakespeare y todas las opiniones de los lectores sobre Romeo y Julieta.",
      genre: "CLÁSICOS UNIVERSALES",
      isbn13: "9788491051701",
      rating: 8.3,
      reviews: 6487
    },
    {
      id: "5d9b59d9423d498ret085",
      status: "readed",
      title: "HAMLET",
      author: "WILLIAM SHAKESPEARE",
      cover: "b/59872e9ccba2bce50c1cba94/9c68fdd3-357a-44e4-a28e-c4be25bfa11c",
      description: "Todos mueren.",
      genre: "CLÁSICOS UNIVERSALES",
      isbn13: "9788367051701",
      rating: 8.8,
      reviews: 3457
    }
  ];

  it("should display the correct title", () => {
    const { getByText } = render(<Books list={books} />);
    expect(getByText("ROMEO Y JULIETA")).toBeTruthy();
    expect(getByText("HAMLET")).toBeTruthy();
  });
});
