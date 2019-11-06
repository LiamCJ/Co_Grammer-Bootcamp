import React from "react";
//make one class component for all converted currencies
class Euros extends React.Component {
  render() {
    const dollars = this.props.dollars;
    return (
      <fieldset>
        <legend>Euros:</legend>
        <input
          value={dollars}
          onChange={e => this.props.onCurrencyChange(e.target.value)}
          readOnly
        />
      </fieldset>
    );
  }
}

export default Euros;
