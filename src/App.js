import "./App.css";

import { useState } from "react";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [message, setMessage] = useState("");
  const [bmi, setBmi] = useState("");

  //logic
  let calcbmi = (e) => {
    e.preventDefault();
    if (weight == 0 || height == 0) {
      alert("please enter a vaild weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("you are healthy weight");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  //Reload

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        container
        <h2>BMI calculator</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>weight(lbs)</label>
            <input
              type="test"
              placeholder="enter weight value"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
          </div>
          <div>
            <label>height(in)</label>
            <input
              type="test"
              placeholder="enter height value"
              value={height}
              onChange={(event) => setheight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              submit
            </button>
            <button classname="btn-outline" onClick={reload} type="submit" >
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
