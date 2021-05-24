import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }
    return (
          <div style={divStyle}>
              <h1>Hello World!!!</h1>
          </div>
        );
  }
}

// function App() {
//   return (
//     <div className="App">
//         <h1>Hello World!!!</h1>
//     </div>
//   );
// }

export default App;
