/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import TYPES_OF_RENT from "./constants.js";

const Settings = {
  PLACES_COUNT: 10
};

ReactDOM.render(
  <App
    placesCount={Settings.PLACES_COUNT}
    rentType={TYPES_OF_RENT[0]}
  />,
  document.querySelector(`#root`)
);
