import React from "react";
import PropTypes from "prop-types";

const PropertyRating = ({rating}) => {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={{width: `${Math.round(rating) * 20}%`}} />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{rating}</span>
    </div>
  );
};

PropertyRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default PropertyRating;
