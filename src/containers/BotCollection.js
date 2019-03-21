import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots = () => {
    return this.props.bots.map((b, index) => {
      return <BotCard bot={b} key={index} enlistBot={this.props.enlistBot}
        renderSpecs={this.props.renderSpecs} changeSpec={this.props.changeSpec}/>
    })
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
