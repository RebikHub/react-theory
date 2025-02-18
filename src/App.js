import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const timer = useRef();

  function rate() {
    setLoading(true);
    setAnswer(Date.now % 2 === 0);
  }

  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer.current);
  }, [answer]);

  return (
    <div className="App-div">
      <h1>Predict</h1>
      <input placeholder="Insert your question" />
      <div>{loading ? <p>...Loading</p> : <p>{answer ? "Yes" : "No"}</p>}</div>
      <button className="App-btn" type="button" onClick={rate}>
        Choose your destiny
      </button>
    </div>
  );
}
