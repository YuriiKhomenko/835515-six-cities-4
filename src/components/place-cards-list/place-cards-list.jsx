import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";


class PlaceCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover(offer) {
    this.setState({
      activeCard: offer,
    });
  }

  render() {
    const {offers, onCardTitleClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, i) => {
          return (
            <PlaceCard
              offer={offer}
              key={i}
              onCardTitleClick={onCardTitleClick}
              onCardHover={this.handleCardHover} />
          );
        })}
      </div>
    );
  }
}

PlaceCardsList.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardTitleClick: PropTypes.func.isRequired
};

export default PlaceCardsList;
