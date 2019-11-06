/*This componenet is created to be a mini-card game which allows the user to only turn 1 card at a time to see if they have 
chosen the winning card, to try again and to quit. */
import React, { Component } from "react";
import "../App.css";

//This function returns the card with it's styling and <Result/> values
const FlipCard = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" />
        <div className="flip-card-back">
          <Result />
        </div>
      </div>
    </div>
  );
};

//This function chooses a random result on the cards
function Result() {
  var luckArray = ["You Win", "You Lose", "You Lose"]; //the array of "outcomes" that will be picked to display on each of the three cards on random
  var randomLuck = Math.floor(Math.random() * luckArray.length); //the index of the outcomes are randomly selected to be returned(so in this case, a random number is picked between 0 and 4)
  return luckArray[randomLuck]; //the randomly selected index will return it's related string
}

//I have set a state here so that it can be updated when the button is clicked, which will cause the component to be re-rendered.
class Cards extends Component {
  state = {
    winnerCard: {}
  };

  //The three cards are rendered, and below them are buttons which either trigger alerts or reset the state when clicked so that the components "refresh"
  render() {
    return (
      <div>
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
    );
  }
}

export default Cards;
