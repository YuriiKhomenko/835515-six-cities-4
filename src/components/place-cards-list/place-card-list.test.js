import React from "react";
import renderer from "react-test-renderer";
import PlaceCardList from "./place-cards-list.jsx";

it(`Render Place Card List component`, () => {
  const tree = renderer
    .create(<PlaceCardList
      rentTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
