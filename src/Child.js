import React from 'react';
import './App.css';

class Child extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fromParent: Number(props.value),
      current: Number(props.value)
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.fromParent) {
      this.setState({
        fromParent: Number(nextProps.value),
        current: Number(nextProps.value),
      })
    }
  }

  handleIncrement() {
    this.setState({ current: this.state.current + 1 })
  }

  handleDecrement() {
    this.setState({ current: this.state.current - 1 })
  }

  render() {
    return(
      <div>
        <label>{this.state.current}</label>
        <button onclick={this.handleIncrement}>+</button>
        <button onclick={this.handleDecrement}>-</button>
      </div>
    );
  }
}
export default Child;
