import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      allBots: [],
      myBots: [],
      filteredBots: [],
      botClicked: ''
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(r => this.setState({allBots: r}))
  }

  handleClickAdd = (e) => {
    if (!this.state.myBots.includes(e)){
      let newArr = [...this.state.myBots, e]
      this.setState({myBots: newArr, botClicked:''})

    }
  }

  handleClickRemove = (e) => {
     if (this.state.myBots.includes(e)){
      let newArr = this.state.myBots.filter(bot => bot !== e)
      this.setState({myBots: newArr})
      }
  }

  handleInfo = (e) => {
    this.setState({botClicked: e})
  }

  handleBackButton = () => {
    this.setState({botClicked: ''})
  }

  // filter = (e) => {
  //   let filterBots = this.state.allBots.filter(bot => bot.class == e)
  //   debugger
  //   this.setState({filteredBots: filterBots})
  // }



  render() {
    return (
      <div>
       <YourBotArmy myBots={this.state.myBots} handleClick={this.handleClickRemove} filter={(e) => this.filter(e)}/>
       {
         this.state.botClicked == '' ?
         <BotCollection allBots={this.state.allBots}  handleClick={this.handleInfo} />
         : <BotSpecs bot={this.state.botClicked} handleBackButton={this.handleBackButton} handleClick={this.handleClickAdd}/>

     }
      </div>
    );
  }

}

export default BotsPage;
