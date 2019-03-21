import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
    if (this.props.filtered === false) {
      return this.props.botArmy.map(bot => {
        return <BotCard key={bot.id} bot={bot} addBotToArmy={this.props.addBotToArmy} parent={"BC"}/>
      })
    } else {
      return this.props.filterArmy.map(bot => {
        return <BotCard key={bot.id} bot={bot} addBotToArmy={this.props.addBotToArmy} parent={"BC"}/>
      })
    }

  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
