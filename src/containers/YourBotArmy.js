import React from "react";
import ArmyCard from "../components/ArmyCard";

class YourBotArmy extends React.Component {

  renderBots = () => {
    return this.props.enlisted.map((b,index) => {
      return <ArmyCard bot={b} key={index} unenlistBot={this.props.unenlistBot}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
