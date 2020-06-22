import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

it(`Render Place Card component`, () => {
  const tree = renderer
    .create(<PlaceCard
      rentTitle={`Wood and stone place`}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
