/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  PLACES_COUNT: 5
};


ReactDOM.render(
  <App
    placesCount={Settings.PLACES_COUNT} />,
  document.querySelector(`#root`)
);
