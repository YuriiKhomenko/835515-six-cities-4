import React from "react";
import renderer from "react-test-renderer";
import PropertyImage from "../property-image/property-image.jsx";

const image = `img/apartment-01.jpg`;

it(`Render Property Image component`, () => {
  const tree = renderer
    .create(<PropertyImage
      image={image}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
