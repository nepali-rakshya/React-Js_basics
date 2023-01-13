import "./index.css";
import { useState } from "react";

function App() {
  let [bioData, setBioData] = useState({
    firstName: "John",
    lastName: "Doe",
    number: 9863215562,
    email: "johndoe@gmail.com",
    isFavorite: false,
  });

  function handleClick() {
    return isFavorite === false ? 
  }

  let { firstName, lastName, number, email } = bioData;

  return (
    <div className="App">
      <div className="bio__img">
        <img src="/img/avatar.png" alt="avatar" width="200px" onClick={handleClick}/>
        <img
          src="/img/star-filled.png"
          alt="star-filled"
          style={{ display: "none" }}
        />
        <br />
        <img src="/img/star.png" alt="star" />
      </div>
      <div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <p>{number}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default App;
