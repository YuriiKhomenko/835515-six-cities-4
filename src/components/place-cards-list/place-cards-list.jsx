import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";


const PlaceCardsList = ({rentTitles, onCardTitleClick}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {rentTitles.map((title, i) => {
        return (
          <PlaceCard
            rentTitle={title}
            key={i}
            onCardTitleClick={onCardTitleClick} />
        );
      })}
    </div>
  );
};


PlaceCardsList.propTypes = {
  rentTitles: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};


export default PlaceCardsList;
