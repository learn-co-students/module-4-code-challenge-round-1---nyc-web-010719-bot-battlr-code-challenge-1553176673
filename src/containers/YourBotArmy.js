import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderMyBots = () => {
    return this.props.myBots.map(b => {
      return (
        <BotCard
          key={b.id}
          bot={b}
          enlisted='true'
          remove={id => this.remove(id)}
        />
      );
    });
  };

  remove = id => {
    let bot = this.props.myBots.find(b => {
      return b.id === id;
    });
    this.props.remove(bot);
  };

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <h1>Your Bot Army</h1>
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderMyBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
