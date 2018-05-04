import React from 'react';
import './App.css';

function Avat({login}) {
  const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
  return (
    <img src={imgUrl} className="ui mini rounded image" alt="foto"/>
  );
}

export default Avat;