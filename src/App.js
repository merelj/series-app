import React, {Component} from 'react';
import Series from './containers/Series';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="ui header">{this.props.name} - Find your favourite series</h1>
      <Series/>

      </div>
    );
  }
}

export default App;
