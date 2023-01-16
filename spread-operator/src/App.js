import React, { useState } from "react";

const App = () => {
  let [objUpdate, setObjUpdate] = useState({
    name: "rakshya",
  });

  const handleClick = () => {
    setObjUpdate((prevState) => (prevState = { ...prevState, name: "ram" }));
  };

  return <button onClick={handleClick}>{objUpdate.name}</button>;
};

export default App;
