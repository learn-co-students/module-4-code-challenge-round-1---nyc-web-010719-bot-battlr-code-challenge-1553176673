import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderAllRobots = () => {
    return this.props.bots.map(robot => <BotCard bot={robot}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.renderAllRobots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
