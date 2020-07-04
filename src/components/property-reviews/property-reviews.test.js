import React from "react";
import renderer from "react-test-renderer";
import PropertyReviews from "../property-reviews/property-reviews.jsx";

it(`Render Property Reviews component`, () => {
  const tree = renderer
    .create(<PropertyReviews />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
