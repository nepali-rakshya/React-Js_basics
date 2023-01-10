import "./index.css";
import React, { useState } from "react";

function App() {
  const thingsArray = ["Thing 1", "Thing 2"];
  const listArrayItems = thingsArray.map((item) => {
    return <p key={item}>{item}</p>;
  });

  // function handleClick() {
  //   const value = thingsArray.length;
  //   thingsArray.push("Thing " + (value + 1));
  //   console.log(thingsArray);
  // }

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

  const [isImportant, setIsImportant] = React.useState(thingsArray[0]);

  function handleClick() {
    setIsImportant(thingsArray[1]);
  }

  return (
    <div className="div__button">
      <button onClick={handleClick}> Add item</button>
      {listArrayItems}
      <p>{isImportant}</p>
    </div>
  );
}

export default App;
