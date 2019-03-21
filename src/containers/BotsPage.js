import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    botArmy: []
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

  handleClick = (props) => {
    let recruit = this.state.bots.find(bot => bot.id === props.id)
    let currentArmy = this.state.botArmy
    this.setState({
      botArmy: [...currentArmy, recruit]
    },()=>console.log(this.state.botArmy))
  }

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
        />
        <BotCollection
          bots={this.state.bots}
          botArmy={this.state.botArmy}
          handleClick={this.handleClick}
        />
      </div>
    );
  }

}

export default BotsPage;
