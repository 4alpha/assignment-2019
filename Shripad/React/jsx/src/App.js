import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
	<label className="label" htmlFor="name">
	  Enter Name :
	  </label>
	  <input id="name" type="text" />
	  <button style = {{backgroundColor:'blue', color:'white'}}>Submit</button>
    </div>
    );
  }
}

export default App;
