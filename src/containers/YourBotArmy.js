import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...


  renderArmy(){
    return this.props.armyBots.map (bot=>{
      return <BotCard bot={bot} enlist={this.props.enlist}/>
    })
  }

  render(){
    console.log(this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
