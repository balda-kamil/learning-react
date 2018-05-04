import React, { Component } from 'react';
import './App.css';
import Parent from "./Parent";
import Child from "./Child";

class App extends Component {
  render() {
    return (
      <div>
        <Child/>
        <Parent/>
      </div>
    );
  }
}

export default App;
