import React, { useState } from "react";

const App = () => {
  let [value, setValue] = useState("rakshya");
  return (
    <div>
      {value} <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

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
//
//
//
//
//
//
//

// let [objUpdate, setObjUpdate] = useState({
//   name: "rakshya",
//   condition: true,
// });

// let { name, condition } = objUpdate;

// const handleClick = () => {
//   if (objUpdate.condition === true) {
//     setObjUpdate((prevStat) => ({
//       ...prevStat,
//       name: "ram",
//       condition: false,
//     }));
//   } else if (condition === false) {
//     setObjUpdate((prevStat) => ({
//       ...prevStat,
//       name: "rakshya",
//       condition: true,
//     }));
//   }
// };

// let [update, setUpdate] = useState("rakshya");

// function handleClick() {
//   update === "rakshya" ? setUpdate("ram") : setUpdate("rakshya");
// }

// return <button onClick={handleClick}>{update}</button>;
