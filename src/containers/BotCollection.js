import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots(){
    return this.props.bots.map (bot=>{
      return <BotCard bot={bot} enlist={this.props.enlist}/>
    })
  }

  render(){
    console.log(this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        Collection of all bots
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
