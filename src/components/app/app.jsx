import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";


const cardTitleClickHandler = () => {};


const App = ({rentTitles}) => {
  return (
    <Main
      rentTitles={rentTitles}
      onCardTitleClick={cardTitleClickHandler} />
  );
};


App.propTypes = {
  rentTitles: PropTypes.array.isRequired,
};


export default App;
