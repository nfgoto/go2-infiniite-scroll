import React, { Component } from 'react';
import './App.css';
import Images from './components/images';

class App extends Component {
  render() {
    return (
      <div className="hero is-fullheight is-bold is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="header content">
              <h1 className="title is-1">Go2 Infinite</h1>
            </div>
            <Images />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
