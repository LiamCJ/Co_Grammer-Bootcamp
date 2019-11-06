import React from "react";

class Dollars extends React.Component {
  render() {
    const dollars = this.props.dollars;
    return (
      <fieldset>
        <legend>Enter Dollars To Convert Currency:</legend>
        <input
          value={dollars}
          onChange={e => this.props.onCurrencyChange(e.target.value)}
        />
      </fieldset>
    );
  }
}

export default Dollars;
