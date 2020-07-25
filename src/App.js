import React from 'react';
import './App.css';
import CharacterForm from './CharacterForm';

export default class App extends React.Component {

  //Problem description is in the CharacterForm.js

  render () {
    return (
      <div className="App">
        <h1>Class skill proficiencies</h1>
        <CharacterForm/>
      </div>
    )
  }
}
