import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import TYPES_OF_RENT from "../../constants.js";


const PlaceCardsList = (props) => {
  const {placesCount, rentType} = props;
  const cards = Array(placesCount)
    .fill(<PlaceCard
      rentType={rentType} />);
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};


PlaceCardsList.propTypes = {
  placesCount: PropTypes.number.isRequired,
  rentType: PropTypes.oneOf(TYPES_OF_RENT)
};


export default PlaceCardsList;
