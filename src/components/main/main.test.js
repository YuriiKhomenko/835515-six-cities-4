import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const OFFERS = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 80,
    type: `apartment`,
    premium: true,
    rating: 5,
    images: [
      `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`,
    ],
  },
  {
    title: `Wood and stone place`,
    price: 100,
    type: `house`,
    premium: false,
    rating: 4.3,
    images: [
      `img/apartment-03.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`,
    ],
  },
  {
    title: `Wood and stone place`,
    price: 75,
    type: `hotel`,
    premium: false,
    rating: 3.5,
    images: [
      `img/apartment-01.jpg`, `img/studio-01.jpg`,
    ],
  },
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 125,
    type: `room`,
    premium: true,
    rating: 4.2,
    images: [
      `img/apartment-03.jpg`, `img/studio-01.jpg`,
    ],
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
