import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlisted: []
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(robots => {
      this.setState({bots: robots})
    })
  }

  componentDidMount = () => {
    this.fetchBots()
  }

  enlistBot = (id) => {
    let bot = this.state.bots.find(b => b.id == id)
    if (!this.state.enlisted.find(b => b.id == id)) {
      this.setState({enlisted: [...this.state.enlisted, bot]})
    }
  }

  unenlistBot = (id) => {
    console.log("remove" + id);
    let bot = this.state.enlisted.find(b => b.id == id)
    // if (this.state.enlisted.find(b => b.id == id)) {
      this.setState({enlisted: this.state.enlisted.filter(function(b) {
        return b.id != bot.id
      })})
    // }
  }

  render() {
    console.log(this.state.enlisted);
    return (
      <div>
        <YourBotArmy enlisted={this.state.enlisted} unenlistBot={this.unenlistBot}/>
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
