import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const OFFERS = [
  {
    price: 80,
    priceType: `night`,
    rating: 5,
    offerTitle: `Beautiful & luxurious apartment at great location`,
    offerPlace: `Private room`,
  },
  {
    price: 100,
    priceType: `night`,
    rating: 4.5,
    offerTitle: `Wood and stone place`,
    offerPlace: `Hotel room`,
  },
  {
    price: 50,
    priceType: `day`,
    rating: 3.5,
    offerTitle: `Beautiful & luxurious apartment at great location`,
    offerPlace: `Kitchen table`,
  },
  {
    price: 125,
    priceType: `night`,
    rating: 5,
    offerTitle: `Wood and stone place`,
    offerPlace: `Private room`,
  },
];

it(`Render Main component`, () => {
  const tree = renderer
    .create(<Main
      offers={OFFERS}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
