import React, { Component } from 'react';
import './App.css';
import logo from './assets/logo.png'
// import ShelfA from  './shelves/shelfA.js';
import router from './router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-container">
            <img id="logo" src={logo}/>
            <div id="logo-text">SHELFIE</div>
          </div>
        </div>
        {router}
      </div>
    );
  }
}

export default App;
