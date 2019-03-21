import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    bots: []
  }

  componentDidMount = () => {
    debugger
    this.fetchBots()
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r=>r.json())
    .then(json=>{
      this.setState(
        {bots: json}
      )
    })
    debugger
  }

  render() {
    debugger
    console.log("app page props", this.state)
    return (
      <div className="App">
        <BotsPage bots={this.state.bots}/>
      </div>
    );
  }
}

export default App;
