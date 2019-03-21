import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderAllRobots = () => {
    return this.props.bots.map(robot => {
      return <BotCard
               bot={robot}
               handleClick={this.props.handleClick}
             />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderAllRobots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
