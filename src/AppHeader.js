import React, { Component } from 'react';
import './App.css';

class ListaKontaktow extends Component {
  render() {
    return (
      <div>
        <ul className="ui relaxed divided list selection">
          <ContactItem
            login="typeofweb1"
            name="Lena"
            department="JavaScript Developer"
          />

          <ContactItem
            login="typeofweb2"
            name="Brian"
            department="Human Resources"
          />
          <ContactItem
            login="typeofweb3"
            name="Rick"
            department="QA"
          />
          <ContactItem
            login="typeofweb4"
            name="Kamil"
            department="debil.."
          />

        </ul>
      </div>
    );
  }}
export default ListaKontaktow;