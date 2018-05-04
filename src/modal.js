import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
  handleClick = () => {
    alert('klikłeś!');
  }
  constructor(props){
    super(props);
    this.state = {
      title: "Jan Brzechwa",
      content: "spoko pisarzem byl!",
      text: function spoko(){
        alert("function spoko działa, beczka ;)")
      },
      html: <p><b>to jest html</b></p>
    }
  }
  render() {
    return (
      <div>
        <dialog open>
          <h1>{this.state.title}</h1>
          <p>{this.state.content}</p>
          <p>{this.state.html}</p>
          <button onClick={this.state.text}>funckja w konstruktorze bazowym</button>
          <button onClick={this.handleClick}>Kliknij dla nauki!</button>
          <footer><a href="www.wp.pl">Zgadzam się!</a></footer>
        </dialog>
      </div>
    );
  }
}

export default Modal;