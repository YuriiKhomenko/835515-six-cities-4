import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render Main component`, () => {
  const tree = renderer
    .create(<Main
      rentTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
      onCardTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
