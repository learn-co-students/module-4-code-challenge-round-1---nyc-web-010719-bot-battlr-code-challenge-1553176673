import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots:[],
    armyBots:[],
    clicked: false,
    currentBot:{}
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
    let army = this.state.armyBots
    if (army.includes(enlisted)) {
      let index = army.indexOf(enlisted)
      army.splice(index, 1)
      this.setState({
        armyBots: [...army]
      })
    } else {
      this.setState({
        armyBots: [...army, enlisted],
        clicked: !this.state.clicked
      })
    }
  }


  clickedOn=(id)=>{
    let currentBot = this.state.bots.find(bot=>{return bot.id===id})
    this.setState({
      clicked: !this.state.clicked,
      currentBot: currentBot
    })
  }



  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots}
          enlist={this.enlist}
          clickedOn={this.clickedOn}/>
        {(!this.state.clicked) ?
          <BotCollection bots={this.state.bots}
            clickedOn={this.clickedOn} />
            :
          <BotSpecs bot={this.state.currentBot}
            enlist={this.enlist}
            clickedOn={this.clickedOn}
            armyBots={this.state.armyBots}/>
        }
      </div>
    );
  }

}

export default BotsPage;
