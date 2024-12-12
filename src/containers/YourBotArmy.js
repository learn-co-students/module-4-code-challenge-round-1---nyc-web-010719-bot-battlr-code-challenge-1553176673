import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  removeBot = () => {
    // console.log(this.props)
    return this.props.botArmy.map((bot, id) =>
    (<BotCard key={bot.id} bot={bot} enlist={this.props.removeBot} />)
  )
  }

  render(){
    // console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.removeBot()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
