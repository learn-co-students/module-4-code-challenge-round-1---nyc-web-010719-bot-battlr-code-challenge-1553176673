import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
  };

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => this.setState({ bots }))
  };

  render() {
    return (
      <div className="App">
        <BotsPage bots={this.state.bots} />
      </div>
    );
  }
}

export default App;
