import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

const OFFER = {
  price: 80,
  priceType: `night`,
  rating: 5,
  offerTitle: `Beautiful & luxurious apartment at great location`,
  offerPlace: `Private room`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`E2E test for Place Card component`, () => {

  it(`Should card title be pressed`, () => {
    const clickTitleHandler = jest.fn();

    const main = shallow(<PlaceCard
      offer={OFFER}
      onCardTitleClick={clickTitleHandler}
    />
    );

    const cardTitle = main.find(`.place-card__name`);

    cardTitle.simulate(`click`);

    expect(clickTitleHandler).toHaveBeenCalledTimes(1);
  });

  it(`Should card be hovered`, () => {
    const onCardHover = jest.fn();

    const main = shallow(<PlaceCard
      offer={OFFER}
      onCardHover={onCardHover}
    />
    );

    const card = main.find(`.place-card`);

    card.simulate(`mouseover`);

    expect(onCardHover).toHaveBeenCalledTimes(1);
  });
});
