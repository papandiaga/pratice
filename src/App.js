import React, { Component } from "react";
import ButtonCard from "./Components/ButtonCard";
import Directions from "./Components/Directions";
import "./App.css";
import students from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      foundData: []
    };
  }
  // Write you findData function here

  render() {
    return (
      <div className="App">
        <h1>Processing Data</h1>
        <Directions />
        <button type="button" class="btn btn-primary">
          Find M Names
        </button>
        <div>{/* Print out found data here */}</div>
        <div className="grid"></div>
      </div>
    );
  }
}

export default App;
