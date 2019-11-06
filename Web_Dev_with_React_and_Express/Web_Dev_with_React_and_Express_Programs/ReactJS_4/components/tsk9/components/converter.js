//this component is made to convert the rand currency to euros, pounds and dollars by using state

import React from "react";
//The functions declared below convert the input of rands to other currencies by using the researched rates to
//perform a calculation on the property, and convert it to a floating integer
function ConvertDollars(props) {
  return parseFloat(props.input * 0.071);
}

function ConvertEuros(props) {
  return parseFloat(props.input * 0.063);
}

function ConvertPounds(props) {
  return parseFloat(props.input * 0.056);
}

//this component class uses rand as the state, which is initialized with an empty string, the handleChange function is binded to it so
//that it can be used in the render method.
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rand: 0 };
  }
  //as soon as the input
  handleChange = e => {
    this.setState({ rand: e.target.value });
  };
  /*I set up the const to take whatever value is entered into the input and use the functions that are called in the return statement
to calculate the rands to the researched rates. The input assigns the value to the rand which gets updated inside the state,
and as the value is updated, the handleChange function is run to update the rand with the value of the input.*/
  render() {
    const rand = this.state.rand;
    return (
      <div>
        <h1>Enter Rand Value:</h1>
        <input value={rand} onChange={this.handleChange} />
        <br />
        $
        <ConvertDollars input={rand} />
        <br />
        &euro;
        <ConvertEuros input={rand} />
        <br />
        &pound;
        <ConvertPounds input={rand} />
      </div>
    );
  }
}
//We export the component so that it can be used in App.js
export default Converter;
