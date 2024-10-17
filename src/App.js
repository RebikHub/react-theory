import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false):

  function rate() {
    const ar = [];
    let zero = 0;
    let one = 0;
  
    for (let i = 0; i < 100; i++) {
      const random = Math.fround(Math.random().toFixed());
      ar.push(random);
    }
  
    ar.forEach((el) => {
      Number(el);
      if (el === 0) {
        zero += 1;
      } else {
        one += 1;
      }
    });
  
    const percentZero = (zero / 100) * 100;
    const percentOne = (one / 100) * 100;
  
    const obj = {
      false: Math.fround(percentZero.toFixed()),
      true: Math.fround(percentOne.toFixed())
    };

    setLoading(true)

  }

  useEffect(() => {
    let timer = null
    if (loading) {
      timer = setTimeout(() => {
          setLoading(false)
          setAnswer(obj.true > obj.false)
       }, 2000);
    }
    return () => clearTimeout(timer)
  }, [loading])
  
  return (
    <div className='App-div'>
        <h1>Predict</h1>
        <div>
          {loading ? <p>...Loading</p> : <p>{answer ? "Yes" : "No"}</p>}
        </div>
        <button className='App-btn'
        type='button'
        onClick={rate}>Choose your destiny</button>
    </div>
  );
}


