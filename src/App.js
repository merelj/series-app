import React, { Component } from 'react';
import Series from './containers/Series';
import './App.css';
import './assets/semantic-ui-css/semantic.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV Series List</h1>
      </header>
      <Series />
    </div>
  );
}

export default App;
