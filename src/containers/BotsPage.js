import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    robots: [],
    selectedBots: [],
    selectedBot: ""
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r=> r.json())
    .then(robots => {
      this.setState({
        robots: robots,
        allRobots: robots
      })
    })
  }

  handleAddBot = (bot) => {
    let selectedBots = [...this.state.selectedBots]
    if(!selectedBots.includes(bot)){
      let newSelectedBots = [...selectedBots, bot]
      this.setState({
        selectedBots: newSelectedBots
      })
    }
  }

  showBotCard = (bot) => {
    console.log("showing bot card")
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <YourBotArmy robots={this.state.selectedBots}/>
        <BotCollection robots={this.state.robots} addBot={this.handleAddBot}/>
      </div>
    );
  }

}

export default BotsPage;
