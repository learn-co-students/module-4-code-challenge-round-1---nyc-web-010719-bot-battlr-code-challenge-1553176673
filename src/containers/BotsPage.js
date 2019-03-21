import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import BotFilter from "../components/BotFilter"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botArmy: [],
    filterArmy: [],
    myArmy: [],
    clicked: false,
    selectedBot: "",
    filtered: false
  }

  addBotToArmy = (e, bot) => {
    e.preventDefault()
    console.log("clicked");
    if (this.state.myArmy.includes(bot)) {
      null
    } else {
      this.setState((prevState)=>({
        ...this.state,
        clicked: true,
        selectedBot: bot,
      }))
    }
  }

  enlistBot = (e, bot) => {
    e.preventDefault()
    this.setState((prevState)=>({
      ...this.state,
      clicked: false,
      myArmy: [...prevState.myArmy, bot]
    }))
  }

  goBack = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      clicked: false,
    })
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

  renderBottom = () => {
    if (this.state.clicked === false) {
      return <BotCollection
                botArmy={this.state.botArmy}
                filterArmy={this.state.filterArmy}
                filtered={this.state.filtered}
                addBotToArmy={this.addBotToArmy}/>
    } else {
      return <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} goBack={this.goBack}/>
    }
  }

  filterBots = (e) => {
    e.preventDefault()
    let filter = e.target.value
    let bots = this.state.botArmy
    switch (filter) {
      case "all":
        this.setState({
          ...this.state,
          filterArmy: bots,
          filtered: false
        })
        break;
      case "assault":
        let botAssualt = bots.filter(bot => bot.bot_class === "Assault")
        this.setState({
          ...this.state,
          filterArmy: botAssualt,
          filtered: true
        })
        break;
      case "defender":
        let botDefender = bots.filter(bot => bot.bot_class === "Defender")
        this.setState({
          ...this.state,
          filterArmy: botDefender,
          filtered: true
        })
        break;
      case "support":
        let botSupport = bots.filter(bot => bot.bot_class === "Support")
        this.setState({
          ...this.state,
          filterArmy: botSupport,
          filtered: true
        })
        break;
    }
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
        <BotFilter filterBots={this.filterBots} />
        <br/>
        {this.renderBottom()}
      </div>
    );
  }

}

export default BotsPage;
