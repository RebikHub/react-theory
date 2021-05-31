import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center' 
    }
    return (
          <div className='App-div' style={divStyle}>
              <h1>Predict</h1>
              <Car />
              <button className='App-btn' onClick={() => window.location.reload(false)}>Choose your destiny</button>
          </div>
        );
  }
}

export default App;

// {document.getElementById('App-btn-choose').onclick = () => location.reload()}