import React, { Component, Fragment } from "react";
import BotCard from "../components/BotCard";

class BotCollection extends Component {
  renderBots = () => {
    return this.props.bots.map(bot => {
      return (
        <BotCard
          key={bot.id}
          bot={bot}
          enlist={id => this.enlist(id)}
          remove={id => this.remove(id)}
          enlisted='false'
        />
      );
    })
  };

  enlist = id => {
    let bot = this.props.bots.find(b => {
      return b.id === id;
    });
    this.props.enlist(bot);
  };

  render(){
  	return (
      <Fragment>
        <h1>Collection of all bots</h1>
    	  <div className="ui four column grid">
      		<div className="row">
      		  {this.renderBots()}
      		</div>
    	  </div>
      </Fragment>
  	);
  };
};

export default BotCollection;
