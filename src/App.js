import React, {Component} from 'react';
import Series from './containers/Series';
import './App.css';
import './assets/semantic-ui-css/semantic.css';

const App = () => {
  return (
    <div className="App">
    <header className="App-header">
      <h1 className="App-title">TV Series List</h1>
    </header>
    <Series/>


    <div>Icons made by
      <a href="http://www.freepik.com" title="Freepik"> Freepik </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com </a>
      is licensed by
      <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank"> CC 3.0 BY </a>
    </div>
  </div>
  );
}

export default App;
