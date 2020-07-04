import React from "react";
import renderer from "react-test-renderer";
import PropertyRating from "../property-rating/property-rating.jsx";

const rating = 5;

it(`Render Property Rating component`, () => {
  const tree = renderer
    .create(<PropertyRating
      rating={rating}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
