import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
  state = {
    bots: [],
    army: []
  }

  handleClick = id => {
    //console.log("HELLLOOOOOO", id);
    this.findBot(id)
  }
  findBot = id => {
    //console.log(id);
    this.state.bots.find(bot => {
      //console.log(bot);
      if(bot.id === id){
        let foundBot = bot
        //console.log(foundBot);

        let addToArmy = [...this.state.army, foundBot]
        this.setState({
          army: addToArmy

        })
      }
    })
  }

  removeFromArmy = (id) => {
    //console.log("Hello!!!!!!", id);
    this.state.army.find(bot => {
      if(bot.id === id){
        let removedBot = bot
        let index = this.state.army.indexOf(removedBot)
        let newArmy = this.state.army
        let deleteBot = newArmy.splice(index, 1)
        this.setState({
          army: newArmy
        })
        //console.log(index);
        //console.log(removedBot);
      }
    })
  }


  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(r => r.json())
    .then(data => {
      this.setState({
        bots: data
      })
      //console.log(data);
    })
  }

  componentDidMount = () => {
    this.fetchBots()
  }
  render() {
    //console.log(this.state.bots);
    //console.log(this.state.army);
    return (
      <div className="App">
        <BotsPage
        bots={this.state.bots}
        army={this.state.army}
        handleClick={this.handleClick}
        removeFromArmy={this.removeFromArmy}/>
      </div>
    );
  }
}

export default App;
