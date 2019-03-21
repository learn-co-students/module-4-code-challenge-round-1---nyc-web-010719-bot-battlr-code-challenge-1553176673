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
    //function is being hit but I can't figure out why it is not adding robot to army list.
    console.log('hitting enlist')
    if (!this.state.botArmy.includes(bot)){
      let newRobot = [...this.state.botArmy]
      newRobot.push(bot)
      this.setState({
        botArmy: newRobot
      })
    }
    console.log(this.state.botArmy);
  }

  removeBotFromArmy = (bot) => {
    console.log('hitting removebot')
    let newRobot = [...this.state.botArmy]
    newRobot = newRobot.filter(pickedRobot =>
    pickedRobot.id !== bot.id)
    console.log('new robot in army', newRobot)
    this.setState({
      botArmy: newRobot
    })
  }



  render() {
    return (
      <div>
        <YourBotArmy
          botArmy={this.state.botArmy}
          removeBot={this.removeBotFromArmy}

           />
        <BotCollection
          bots={this.state.bots}
          enlist={this.enlistRobot}
           />
      </div>
    );
  }

}

export default BotsPage;
