import React from "react";
import "./Cards.css";

// functional component for the user reward
const Reward = () => {
  var outcome= ["You Win A PC", "You Lose", "You Lose"]; //the array of "outcomes" that will be picked to display on each of the three cards on random
  var random = Math.floor(Math.random() * luckArray.length); //the index of the outcomes are randomly selected to be returned(so in this case, a random number is picked between 0 and 4)
  return outcome[Math.floor(Math.random() * luckArray.length)]; //the randomly selected index will return it's related string
};
// class component for the cards
class Cards extends React.Component {
  render() {
    return (
      <div
        id="card"
        onClick={e => {
          this.setState({ component: 1 });
        }}
      >
  {/*This Users award is displayed here*/}
        <Reward /> 
      </div>
    );
  }
}
// class component that displays all the cards
class Win extends React.Component {
  render() {
    return (
      <article>
        <h1>Welcome To Win!</h1>
        <h3>Please Select A Card</h3>
        <hr />
        <Cards />
        <Cards />
        <Cards />
      </article>
    );
  }
}

export default Win;
