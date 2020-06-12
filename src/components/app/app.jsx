import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import TYPES_OF_RENT from "../../constants.js";


const App = (props) => {
  const {placesCount, rentType} = props;

  return (
    <Main
      placesCount={placesCount}
      rentType={rentType} />
  );
};


App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  rentType: PropTypes.oneOf(TYPES_OF_RENT),
};


export default App;
