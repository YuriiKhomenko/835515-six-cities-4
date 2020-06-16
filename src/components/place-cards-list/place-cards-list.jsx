import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";


const PlaceCardsList = (props) => {
  const {rentTitles} = props;

  const cards = rentTitles
    .map((title, i) => {
      return (
        <PlaceCard
          rentTitle={title}
          key={i} />
      );
    });

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>
  );
};


PlaceCardsList.propTypes = {
  rentTitles: PropTypes.array.isRequired
};


export default PlaceCardsList;
