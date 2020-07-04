import React from "react";
import PropTypes from "prop-types";
import PropertyImage from "../property-image/property-image.jsx";

const PropertyGallery = ({images}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, i) => {
          return (
            <PropertyImage
              image={image}
              key={i} />
          );
        })}
      </div>
    </div>
  );
};

PropertyGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PropertyGallery;
