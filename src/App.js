import React, { Component } from 'react';
import Series from './containers/Series';
import './App.css';

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
