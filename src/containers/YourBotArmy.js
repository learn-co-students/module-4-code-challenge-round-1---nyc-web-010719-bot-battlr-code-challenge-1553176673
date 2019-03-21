import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log("YourBotArmy props", this.props)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            Your Bot Army
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
              <BotSpecs
                bot={bot}
                />
              </div>

              )}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
