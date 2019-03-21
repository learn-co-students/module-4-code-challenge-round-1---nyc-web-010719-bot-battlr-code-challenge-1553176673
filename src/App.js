import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
    myBots: [],
  };

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => this.setState({ bots }))
  };

  enlist = bot => {
    this.state.myBots.includes(bot)
      ?
    alert('Fraid you already enlisted that botto.')
      :
    this.setState({
      myBots: [...this.state.myBots, bot]
    });
  };

  remove = bot => {
    let index;
    index = this.state.myBots.findIndex(b => {
      return b.id === bot.id;
    });
    this.setState({
      myBots: [
          ...this.state.myBots.slice(0, index),
          ...this.state.myBots.slice(index + 1)
        ],
    });
  };

  render() {
    console.log(this.state.myBots)
    return (
      <div className="App">
        <BotsPage
          bots={this.state.bots}
          myBots={this.state.myBots}
          enlist={bot => this.enlist(bot)}
          remove={bot => this.remove(bot)}
        />
      </div>
    );
  };
};

export default App;
