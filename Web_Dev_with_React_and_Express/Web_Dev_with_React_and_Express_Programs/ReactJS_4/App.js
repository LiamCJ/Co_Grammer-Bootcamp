import React from "react";
import ReactDOM from "react-dom";
import Converter from "./components/currencyConverter.js";
import Win from "./components/win.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: 0 };
    }
    render() {
        const components = [<Converter />, <Win />];
        return (
            <section>
        <select
          onChange={e => {
            this.setState({ component: e.target.value });
          }}
        >
          <option value="0">Converter</option>
          <option value="1">Win!</option>
        </select>
        <hr />
        {components[this.state.component]}
      </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));