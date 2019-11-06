/*This generates the rendering of different componenets through a stateful drop-down menu if they are selected*/

/*Import all the used componenets: */
import React from "react";
import Converter from './Components/converter';
import Cards from './Components/cards';
import Choose from './Components/choose';
import "./App.css";

/*Define styles for the drop-down*/ 
const styling = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "150px",
};

/*Create a class which extends react.cpmponenet so that we can use state */
class Dropdown extends React.Component {
  constructor(props) {//set up the props
    super(props);
    this.state = { selection: 0 }; //initial selection on the state is 0 
  }
  
  //the value of the selected will be targeted as so set the state as soon as the event (onChange) has occured
 dropDownSelect = e => {
    this.setState({ selection: e.target.value });
  };

//-The render method accepts the two arrays below, dropDownList is what will be mapped over and rendered inside the physical drop-down menu
//-When the user clicks on the chosen item, it will fetch the corresping component
//-The options array is created so that they can be selected
//-What is returned is the div which encapsulates an event listener that waits for the user to click on the drop down to display the list
//-The drop down itema are matched with, the x(to display the list item) and i(to index the list item)
//-According to the item selected, the index number is then assigned to update the state so that the desired component can be rendered.
  render() {
    const dropDownList = ["select","Currency converter", "Win!"];
    const options = [<Choose/>,<Converter />, <Cards />];
    return (
      <div>
        <select onChange={this.dropDownSelect}>
          {dropDownList.map((x, i) => (
            <option value={i} key={i}>
              {x}
            </option>
          ))}
        </select>
        {options[this.state.selection]}
      </div>
    );
  }
}

/*Render the drop-down with the preferred styling*/
const App = () => (
  <div style={styling}>
    <Dropdown />
  </div>
);

/*Don't forget to export App! */
export default App;


