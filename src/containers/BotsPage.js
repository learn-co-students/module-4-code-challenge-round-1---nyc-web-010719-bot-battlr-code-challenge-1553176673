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
    let army = this.state.armyBots

    if (army.includes(enlisted)) {
    let index = army.indexOf(enlisted)
    army.splice(index, 1)
    this.setState({
      armyBots: [...army]
    })
  } else {
    this.setState({
      armyBots: [...army, enlisted]
    })
    }
  }

  remove=(id)=>{
    console.log(id)
  }

  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots} enlist={this.enlist}/>
        <BotCollection bots={this.state.bots} enlist={this.enlist} />
      </div>
    );
  }

}

export default BotsPage;
