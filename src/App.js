import React, {Component} from 'react';
import Series from './containers/Series';
import './App.css';
import './assets/semantic-ui-css/semantic.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="ui header">TV Series List</h1>
    <Series/>

  </div>
  );
}

export default App;
