import React, { Component }from 'react';
import './App.css';


class Counter extends Component {


  constructor(){
    super();
    this.state = {counter: 0, totalClicks: 0, doubleClicks: 0};
  }

  render() {
    return (
      <div>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button><br />
        <output>Kliknięć Łącznie{this.state.totalClicks}</output><br />
        <output ondblclick={this.dblClick.bind(this)}>Licznik {this.state.counter}</output><br />
        <output>Podwójnych kliknięć: {this.state.doubleClicks}</output>
      </div>
    );
  }

  increment(){
    this.setState({
      counter: this.state.counter + 1,
      totalClicks: this.state.totalClicks + 1
    })
  }

  decrement(){
    this.setState({
      counter: this.state.counter - 1,
      totalClicks: this.state.totalClicks + 1
    })
  }

  dblClick(){
    this.setState({
      doubleClicks: this.state.doubleClicks + 1
    })
  }
}
export default Counter;
