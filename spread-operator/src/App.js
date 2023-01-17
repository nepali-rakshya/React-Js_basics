import React, { useState } from "react";

const App = () => {
  let [data, setData] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+9779863215562",
    email: "johndoe@gmail.com",
    isFavorite: false,
  });

  let { firstName, lastName, phone, email, isFavorite } = data;

  let starIcon = !isFavorite ? "star.png" : "star-filled.png";

  function handleClick() {
    setData(starIcon);
  }

  return (
    <div className="card">
      <img src="/img/avatar.png" alt="profile" width="150" />
      <br />
      <img src={`/img/${starIcon}`} alt="star" onClick={handleClick} />
      <h1>
        {firstName} {lastName}
      </h1>
      <p>{phone}</p>
      <p>{email}</p>
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

// let [value, setValue] = useState("rakshya");
// return (
//   <div>
//     {value} <br />
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//   </div>
// );
