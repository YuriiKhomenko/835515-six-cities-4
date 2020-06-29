import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onCardTitleClick, onCardHover} = this.props;
    const {price, priceType, rating, offerTitle, offerPlace} = offer;

    return (
      <article
        className="cities__place-card place-card"
        onMouseOver={() => onCardHover(offer)} >
        <div
          className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/room.jpg"
              width="260"
              height="200"
              alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;{priceType}</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2
            onClick={onCardTitleClick}
            className="place-card__name">
            <a href="#">{offerTitle}</a>
          </h2>
          <p className="place-card__type">{offerPlace}</p>
        </div>
      </article >
    );
  }
}

PlaceCard.propTypes = {
  onCardTitleClick: PropTypes.func,
  onCardHover: PropTypes.func,
  offer: PropTypes.shape({
    price: PropTypes.number.isRequired,
    priceType: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    offerTitle: PropTypes.string.isRequired,
    offerPlace: PropTypes.string.isRequired,
  }),
};

export default PlaceCard;
