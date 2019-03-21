import React, { Component, Fragment } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  render() {
    return (
      <Fragment>
        <YourBotArmy
          myBots={this.props.myBots}
          remove={bot => this.props.remove(bot)}
        />
        <BotCollection
          bots={this.props.bots}
          enlist={bot => this.props.enlist(bot)}
        />
      </Fragment>
    );
  };
};

export default BotsPage;
