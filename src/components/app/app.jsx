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
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(offer) {
    this.setState({
      chosenOffer: offer,
    });
  }

  render() {
    const {offers} = this.props;
    const {chosenOffer} = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offers={offers}
              onCardTitleClick={this.handleTitleClick} />
          </Route>
          <Route exact path="/dev-details">
            <Property
              offer={chosenOffer} />
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
