import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";


class BotCollection extends React.Component {
  //your code here

  state={
    showCard: false,
    selectedBot: ""
  }

  renderBots = () => {
    console.log(this.state)
    // debugger
    if(!this.state.showCard){
      return this.props.robots.map(robot => {
        return <BotCard
          key={robot.id}
          bot={robot}
          addBot={this.props.addBot}
          showCard={this.showCard}
        />
      })
    }
    else{
      return(
        <BotSpecs
          bot={this.state.selectedBot}
          key={this.state.selectedBot.id}
          handleGoBack={this.handleGoBack}
          handleEnlistBot={this.handleEnlistBot}
        />
      )
    }
  }

  handleGoBack = () => {
    this.setState({
      showCard: !this.state.showCard,
      selectedBot: ""
    })
  }

  handleEnlistBot = (bot) => {
    console.log("enlisting bot")
    this.props.addBot(bot)
    this.setState({
      showCard: !this.state.showCard,
      selectedBot: ""
    })
  }


  showCard = (bot) => {
    console.log("showing card")
    this.setState({
      showCard: !this.state.showCard,
      selectedBot: bot
    })
  }



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
