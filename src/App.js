import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  const calcbmi = (e) => {
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height");
      return;
    }
    let bmiValue = (weight / (height * height)) * 703;
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You are healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  const reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inches)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="btn" type="submit">
              Submit
            </button>
            <button
              className="btn-outline"
              type="button"
              onClick={reload}
            >
              Reload
            </button>
          </div>
          {bmi && (
            <div className="center">
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
