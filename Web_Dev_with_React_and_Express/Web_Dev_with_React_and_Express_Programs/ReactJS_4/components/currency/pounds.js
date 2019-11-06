import React from "react";

class Pounds extends React.Component {
  render() {
    const dollars = this.props.dollars;
    return (
      <fieldset>
        <legend>Pounds:</legend>
        <input
          value={dollars}
          onChange={e => this.props.onCurrencyChange(e.target.value)}
          readOnly
        />
      </fieldset>
    );
  }
}

export default Pounds;
