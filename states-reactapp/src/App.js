import { useState } from "react";
import "./index.css";

function App() {
  let initalNum = 0;

  let [changeNum, setChangeNum] = useState(initalNum);

  function handleMinus() {
    setChangeNum(changeNum - 1);
  }

  function handlePlus() {
    setChangeNum(changeNum + 1);
  }

  return (
    <div className="counter">
      <button className="button counter--minus" onClick={handleMinus}>
        -
      </button>
      <div className="counter--display">
        <h1>{changeNum}</h1>
      </div>
      <button className="button counter--plus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

export default App;
