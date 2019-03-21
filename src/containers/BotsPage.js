import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: []
  }

  componentDidMount(){
    this.fetchBots()
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(bots => {
      this.setState({ bots },()=>console.log(this.state))
    })
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
