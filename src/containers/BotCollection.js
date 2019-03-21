import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderAllRobots = () => {
    return this.props.bots.map(robot => {
      return <BotCard
               bot={robot}
               key={robot.id}
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
