import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  displayRobots = () => {
    return this.props.bots.map(bot => {
      return (<BotCard key={bot.id} bot={bot} enlist={this.props.enlist} />)
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.displayRobots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
