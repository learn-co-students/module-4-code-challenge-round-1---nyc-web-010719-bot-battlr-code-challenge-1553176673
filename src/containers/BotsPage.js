import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    console.log("bots page props", this.props)
    return (
      <div>

          <BotCollection bots={this.props.bots}/>
          <YourBotArmy bots={this.props.bots}/>

      </div>
    );
  }

}

export default BotsPage;
