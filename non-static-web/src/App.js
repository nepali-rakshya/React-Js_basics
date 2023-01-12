import "./index.css";
import React, { useState } from "react";

function App() {
  // const thingsArray = ["Thing 1", "Thing 2", "Thing 3"];
  const [arrayThings, setArrayThings] = useState(["Thing 1", "Thing 2"]);

  function handleClick() {
    setArrayThings((prevState) => [
      ...prevState,
      `Thing ${prevState.length + 1}`,
    ]);
  }

  const arrayElements = arrayThings?.map((item) => <p key={item}>{item}</p>);

  return (
    <div className="div__button">
      <button onClick={handleClick}> Add item</button>
      {arrayElements}
    </div>
  );
}

export default App;

//
//
//

//
//
//

//
//
//
//
//

// function App() {
//   let [isGoingOut, setIsGoingOut] = useState(true);

//   function handleMouse() {
//     if (isGoingOut === true) {
//       return setIsGoingOut((prevOut) => (prevOut = false));
//     } else {
//       return setIsGoingOut((prevOut) => (prevOut = true));
//     }
//   }

//   return (
//     <div className="state">
//       <h1 className="state--title">Do I feel like going out tonight?</h1>
//       <div className="state--value" onMouseEnter={handleMouse}>
//         <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
//       </div>
//     </div>
//   );
// }

// export default App;

// function handleClick(name) {
//   let date = new Date();

//   let hours = date.getHours();

//   if (hours >= 4 && hours < 12) {
//     console.log(name + ", good morning");
//   } else if (hours >= 12 && hours < 17) {
//     console.log(name + ", good afternoon");
//   } else if (hours >= 17 && hours < 20) {
//     console.log(name + ", good evening");
//   } else {
//     console.log(name + ", good night");
//   }
// }
