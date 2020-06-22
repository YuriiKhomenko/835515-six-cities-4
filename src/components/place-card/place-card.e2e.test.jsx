import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card title be pressed`, () => {
  const onCardTitleClick = jest.fn();

  const main = shallow(<PlaceCard
    rentTitle={`Wood and stone place`}
    onCardTitleClick={onCardTitleClick}
  />
  );

  const welcomeButton = main.find(`h2.place-card__name`);

  welcomeButton.props().onClick();

  expect(onCardTitleClick.mock.calls.length).toBe(1);
});
