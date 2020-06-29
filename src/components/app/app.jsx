import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const cardTitleClickHandler = () => {};

const App = ({offers}) => {
  return (
    <Main
      offers={offers}
      onCardTitleClick={cardTitleClickHandler} />
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
