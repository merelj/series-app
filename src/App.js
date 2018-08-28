import React, {Component} from 'react';
import Header from './components/Header';
import Series from './containers/Series';
import './App.css';


class App extends Component {

  render() {
    const appName = this.props.name;
    console.log("app name =", appName);

    return (
      <div className="App">

//       <h1 className="ui header">{this.props.name} - Find your favourite series</h1>
      <Header name={appName} />
      <Series/>
      </div>
    );
  }
}

export default App;
