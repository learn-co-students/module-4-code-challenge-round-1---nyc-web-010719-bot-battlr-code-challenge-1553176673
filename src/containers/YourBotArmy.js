import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  enlist = () => {
    // console.log(this.props)
    return this.props.botArmy.map((bot, id) =>
    (<BotCard key={bot.id} bot={bot} enlist={this.props.enlist} />)
  )
  }

  render(){
    // console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {() => this.enlist()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
