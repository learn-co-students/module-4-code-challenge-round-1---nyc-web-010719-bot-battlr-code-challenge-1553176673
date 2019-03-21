import React, { Component, Fragment } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from '../components/BotSpecs';

class BotsPage extends Component {
  enlist = id => {
    let bot = this.props.bots.find(b => {
      return b.id === id;
    });
    this.props.enlist(bot);
  };

  render() {
    return (
      this.props.display === 'collection'
        ?
      <Fragment>
        <YourBotArmy
          myBots={this.props.myBots}
          remove={bot => this.props.remove(bot)}
        />
        <BotCollection
          bots={this.props.bots}
          showDetails={bot => this.props.showDetails(bot)}
        />
      </Fragment>
        :
        <Fragment>
          <YourBotArmy
            myBots={this.props.myBots}
            remove={bot => this.props.remove(bot)}
          />
          <BotSpecs
            bot={this.props.selectedBot}
            enlist={id => this.enlist(id)}
            goBack={this.props.goBack}
          />
        </Fragment>
    );
  };
};

export default BotsPage;
