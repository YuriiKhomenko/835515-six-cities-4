import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import mocks from "../../mocks/mocks.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chosenOffer: mocks[0],
    };
    this.handlerTitleClick = this.handlerTitleClick.bind(this);
  }

  handlerTitleClick(offer) {
    this.setState({
      chosenOffer: offer,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offers={mocks}
              onCardTitleClick={this.handlerTitleClick} />
          </Route>
          <Route exact path="/dev-details">
            <Property
              offer={this.state.chosenOffer} />
          </Route>
        </Switch>
      </BrowserRouter>);
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
