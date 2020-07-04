import React from "react";
import PropertyGallery from "../property-gallery/property-gallery.jsx";
import PropertyRating from "../property-rating/property-rating.jsx";
import PropertyReviews from "../property-reviews/property-reviews.jsx";
import NearPlaces from "../near-places/near-places.jsx";
import PropTypes from "prop-types";

const Property = ({offer}) => {
  const {title, premium, images, rating, price, type} = offer;
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery
          images={images} />
        <div className="property__container container">
          <div className="property__wrapper">
            {premium ?
              <div className="property__mark">
                <span>Premium</span>
              </div> : ``}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <PropertyRating
              rating={rating} />
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                  Wi-Fi
                </li>
                <li className="property__inside-item">
                  Washing machine
                </li>
                <li className="property__inside-item">
                  Towels
                </li>
                <li className="property__inside-item">
                  Heating
                </li>
                <li className="property__inside-item">
                  Coffee machine
                </li>
                <li className="property__inside-item">
                  Baby seat
                </li>
                <li className="property__inside-item">
                  Kitchen
                </li>
                <li className="property__inside-item">
                  Dishwasher
                </li>
                <li className="property__inside-item">
                  Cabel TV
                </li>
                <li className="property__inside-item">
                  Fridge
                </li>
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  Angelina
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <PropertyReviews />
          </div>
        </div>
        <section className="property__map map" />
      </section>
      <div className="container">
        <NearPlaces />
      </div>
    </main>
  );
};

Property.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    premium: PropTypes.bool,
    rating: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default Property;
