import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.myBots.map(bot => <BotCard bot={bot} handleClick={this.props.handleClick}/>)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
// <form>
// <select onChange={(e) => this.props.filter(e.target.value)}>
//   <option value="Defender">Defender Bots</option>
//   <option value="Support">Support Bots</option>
//   <option value="Assault">Assault Bots</option>
// </select>
// </form>
