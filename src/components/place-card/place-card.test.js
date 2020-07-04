import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const OFFER = {
  title: `Beautiful & luxurious apartment at great location`,
  price: 80,
  type: `apartment`,
  premium: true,
  rating: 5,
  images: [
    `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`,
  ],
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
