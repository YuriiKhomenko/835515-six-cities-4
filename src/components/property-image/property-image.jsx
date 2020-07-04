import React from "react";
import PropTypes from "prop-types";

const PropertyImage = ({image}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt={image} />
    </div>
  );
};

PropertyImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default PropertyImage;
