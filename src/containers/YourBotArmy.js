import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = () => {
    console.log(this.props.robots)
    return this.props.robots.map(robot => {
      return <BotCard key={robot.id} bot={robot} addBot={this.props.addBot}/>
    })
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
