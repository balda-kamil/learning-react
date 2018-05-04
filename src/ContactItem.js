import React from 'react';
import './App.css';
import Avat from './Avatars'

function ContactItem({login, name, department }) {
  return (
    <li className="item">
      <Avat login={login}/>
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{department}</div>
      </div>
    </li>
  );
}

export default ContactItem;