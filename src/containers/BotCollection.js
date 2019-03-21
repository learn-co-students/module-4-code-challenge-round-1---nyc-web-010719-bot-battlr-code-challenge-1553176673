import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
    console.log(this.props.robots)
    return this.props.robots.map(robot => {
      return <BotCard key={robot.id} bot={robot} addBot={this.props.addBot}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
