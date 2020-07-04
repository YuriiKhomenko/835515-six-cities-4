import React from "react";
import renderer from "react-test-renderer";
import Property from "../property/property.jsx";

const offer = {
  title: `Beautiful & luxurious apartment at great location`,
  price: 80,
  type: `apartment`,
  premium: true,
  rating: 5,
  images: [
    `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`,
  ],
};

it(`Render Property component`, () => {
  const tree = renderer
    .create(<Property
      offer={offer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
