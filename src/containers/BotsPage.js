import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botArmy: [],
    myArmy: []
  }

  addBotToArmy = (e, bot) => {
    e.preventDefault()
    if (this.state.myArmy.includes(bot)) {
      null
    } else {
      this.setState((prevState)=>({
        ...this.state,
        myArmy: [...prevState.myArmy, bot]
      }))
    }
  }

  removeFromArmy = (e, bot) => {
    e.preventDefault()
    let index = this.state.myArmy.indexOf(bot)
    this.state.myArmy.splice(index, 1)
    let army = this.state.myArmy
    this.setState((prevState)=>({
      ...this.state,
      myArmy: army
    }))
  }

  componentDidMount() {
    fetch(API)
      .then(r=>r.json())
      .then(bots => {
        this.setState({
          ...this.state,
          botArmy: bots
        })
      })
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy myArmy={this.state.myArmy} removeFromArmy={this.removeFromArmy}/>
        <BotCollection botArmy={this.state.botArmy} addBotToArmy={this.addBotToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
