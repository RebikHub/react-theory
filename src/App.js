import './App.css';

export default function App() {
  return (
    <div className='App-div' style={divStyle}>
        <h1>Predict</h1>
        <div>
              <p>{
              (getRandom(0,100) >= 50)?"Yes":"No"
              }</p>
          </div>
        <button className='App-btn' onClick={() => window.location.reload(false)}>Choose your destiny</button>
    </div>
  );
}


