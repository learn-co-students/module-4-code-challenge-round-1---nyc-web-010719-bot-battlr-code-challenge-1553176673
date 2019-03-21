import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlisted: [],
    botView: false,
    selected: null
  }

  fetchBots = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(robots => {
      this.setState({bots: robots})
    })
  }

  componentDidMount = () => {
    this.fetchBots()
  }

  enlistBot = (id) => {
    let bot = this.state.bots.find(b => b.id == id)
    if (!this.state.enlisted.find(b => b.id == id)) {
      // this.setState({enlisted: [...this.state.enlisted, bot], botView: true})
      // this.setState({enlisted: [...this.state.enlisted, bot], botView: true, selected: bot})
      // this.setState({enlisted: [...this.state.enlisted, bot], selected: bot})
      this.setState({enlisted: [...this.state.enlisted, bot]})
    }
  }

  unenlistBot = (id) => {
    console.log("remove" + id);
    let bot = this.state.enlisted.find(b => b.id == id)
    // if (this.state.enlisted.find(b => b.id == id)) {
      this.setState({enlisted: this.state.enlisted.filter(function(b) {
        return b.id != bot.id
      })})
    // }
  }

  renderSpecs = (id) => {
    // this.setState({selected: bot})
    if (this.state.botView === false) {
      return <BotCollection bots={this.state.bots} enlistBot={this.enlistBot}
        renderSpecs={this.renderSpecs} changeSpec={this.changeSpec}/>
    } else {
      let bot = this.state.bots.find(b => b.id == id)
      debugger
      return <BotSpecs bot={bot.id} enlistBot={this.enlistBot}
        changeSpec={this.changeSpec}/>
    }
  }

  changeSpec = (id) => {
    let bot = this.state.bots.find(b => b.id == id)
    this.setState({botView: !this.state.botView, selected: bot})
  }

  render() {
    console.log(this.state.enlisted);
    return (
      <div>
        <YourBotArmy enlisted={this.state.enlisted} unenlistBot={this.unenlistBot}/>
        {this.renderSpecs()}
      </div>
    );
  }

}

export default BotsPage;
