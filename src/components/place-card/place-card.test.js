import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const OFFER = {
  price: 80,
  priceType: `night`,
  rating: 5,
  offerTitle: `Beautiful & luxurious apartment at great location`,
  offerPlace: `Private room`,
};

it(`Render Place Card component`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer={OFFER}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
