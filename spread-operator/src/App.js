import React, { useState } from "react";

const App = () => {
  let [clickButton, setClickButton] = useState(["I am alive", "I am boy"]);

  function handleClick() {
    setClickButton(clickButton[1]);
  }

  return (
    <div className="App">
      {/* {clickButton !== "" ? clickButton : <h1>I am h1</h1>} */}
      <h1>{clickButton}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;
