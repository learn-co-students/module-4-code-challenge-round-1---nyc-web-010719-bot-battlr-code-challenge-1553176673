import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'

class BotsPage extends React.Component {
  state={
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(robotData => this.setState({bots: robotData}))
  }

  enlistRobot = (bot) => {
    console.log('hitting enlist')
    let newRobot = [...this.state.botArmy]
    newRobot.push(bot)
    this.setState({
      botArmy: this.state.botArmy
    })
  }

  

  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          enlist={this.enlistRobot}
           />
        <BotCollection
          bots={this.state.bots}
          enlist={this.enlistRobot} />
      </div>
    );
  }

}

export default BotsPage;
