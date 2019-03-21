import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'


class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots:[],
    armyBots:[]
  }
  fetchBots(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=>r.json())
    .then(bots=>this.setState({ bots }))
  }

  componentDidMount(){
    this.fetchBots()
  }

  enlist=(id)=>{
    let enlisted = this.state.bots.find(bot=>{return bot.id===id})
    let bots = this.state.bots
    let index = this.state.bots.indexOf(enlisted)
    let army = this.state.armyBots
    // bots.splice(index, 1, enlisted)
    this.setState({
      armyBots: [...army, enlisted]
    })
    console.log(this.state.armyBots)
  }

  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots}/>
        <BotCollection bots={this.state.bots} enlist={this.enlist}/>
      </div>
    );
  }

}

export default BotsPage;
