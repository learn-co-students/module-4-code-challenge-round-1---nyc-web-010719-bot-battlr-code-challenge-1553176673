import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderArmy(){
    return this.props.armyBots.map (bot=>{
      return <BotCard bot={bot} enlist={this.props.enlist} clickedOn={this.props.clickedOn}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
