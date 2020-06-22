import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App component`, () => {
  const tree = renderer
    .create(<App
      rentTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
