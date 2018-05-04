import React, { Component }from 'react';
import './App.css';

class Parent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: null,
      forwardValue: null
    }
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event){
    this.setState({ input: event.target.value });
}

handleClick(){
  this.setState({
    forwardValue: this.state.input
  });
}
  render() {
    return (
      <div>
        <input onchange={this.handleChange} type="number"/>
        <button onclick={this.handleClick}>Propagate to child</button>
        {this.state.forwardValue && <child value={this.state.forwardValue}/>}
      </div>
    );
  }
}
export default Parent;
