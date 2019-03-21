import React, { Component, Fragment } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  //start here with your code for step one

  render() {
    return (
      <Fragment>
        <BotCollection bots={this.props.bots} />
        <YourBotArmy />
      </Fragment>
    );
  }

}

export default BotsPage;
