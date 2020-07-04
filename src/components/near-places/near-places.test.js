import React from "react";
import renderer from "react-test-renderer";
import NearPlaces from "../near-places/near-places.jsx";

it(`Render Near Places component`, () => {
  const tree = renderer
    .create(<NearPlaces
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
