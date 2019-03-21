import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  //start here with your code for step one

  render() {
    //console.log(this.props.bots);
    return (
      <div>
        {this.props.bots.map(bot =>
          <BotCollection
           bot={bot}
           handleClick={this.props.handleClick}
          />)}
          {<YourBotArmy
            army={this.props.army}
            removeFromArmy={this.props.removeFromArmy} />}
      </div>
    );
  }

}

export default BotsPage;
