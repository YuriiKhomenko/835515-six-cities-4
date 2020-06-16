/* eslint-disable indent */
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const TYPES_OF_RENT = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`];


ReactDOM.render(
  <App
    rentTitles={TYPES_OF_RENT}
  />,
  document.querySelector(`#root`)
);
