import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chosenOffer: null,
    };

    this.onCardTitleClick = this.onCardTitleClick.bind(this);
  }

  onCardTitleClick(offer) {
    this.setState({
      chosenOffer: offer,
    });
  }

  _renderApp() {
    const {offers} = this.props;
    const {chosenOffer} = this.state;

    return (
      !chosenOffer
        ? <Main offers={offers} onCardTitleClick={this.onCardTitleClick} />
        : <Property offer={chosenOffer} />
    );
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <Property offer={offers[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
