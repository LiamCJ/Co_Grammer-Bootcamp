import React from "react";

class Rands extends React.Component {
  render() {
    const dollars = this.props.dollars;
    return (
      <fieldset>
        <legend>Rands:</legend>
        <input
          value={dollars}
          onChange={e => this.props.onCurrencyChange(e.target.value)}
          readOnly
        />
      </fieldset>
    );
  }
}

export default Rands;
