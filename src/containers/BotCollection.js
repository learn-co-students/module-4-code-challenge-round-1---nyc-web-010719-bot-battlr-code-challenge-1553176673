import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots(){
    return this.props.bots.map (bot=>{
      return <BotCard bot={bot} enlist={this.props.enlist} clickedOn={this.props.clickedOn}/>
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
