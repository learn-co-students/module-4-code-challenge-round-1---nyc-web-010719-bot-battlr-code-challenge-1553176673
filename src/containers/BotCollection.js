import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"



class BotCollection extends React.Component {

  state = {
    myBots: []
  }
  //your code here

  render(){
    console.log("BotCollection props", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {this.props.bots.map(bot=>
            <div>
            <BotCard
              bot={bot}
              // id={bot.id}
              // name={bot.name}
              // health={bot.health}
              // damage={bot.damage}
              // armor={bot.armor}
              // bot_class={bot.bot_class}
              // catchphrase={bot.catchphrase}
              // avatar_url={bot.avatar_url}
            />
            <YourBotArmy
              bot={bot}
              />
            </div>

            )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
