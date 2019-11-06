import React from "react";
import Dollars from "./currency/dollars.js";
import Rands from "./currency/rands.js";
import Euros from "./currency/euros.js";
import Pounds from "./currency/pounds.js";
//converts dollars to Rands
const toRands = dollars => {
    return dollars * 14.79;
};
//converts dollars to Euros
const toEuros = dollars => {
    return dollars * 0.9;
};
//converts dollars to Pounds
const toPounds = dollars => {
    return dollars * 0.82;
};

const convert = (dollars, convert) => {
    const input = parseFloat(dollars);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
};

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dollars: "" };
    }

    currencyChange = dollars => {
        this.setState({ dollars });
    };
    render() {
        const dollars = this.state.dollars;
        return (
            <div>
        <Dollars dollars={dollars} onCurrencyChange={this.currencyChange} />
        <Rands
          dollars={convert(dollars, toRands)}
          onCurrencyChange={this.currencyChange}
        />
        <Euros
          dollars={convert(dollars, toEuros)}
          onCurrencyChange={this.currencyChange}
        />
        <Pounds
          dollars={convert(dollars, toPounds)}
          onCurrencyChange={this.currencyChange}
        />
      </div>
        );
    }
}

export default Converter;