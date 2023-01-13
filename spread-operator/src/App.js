import "./index.css";
import { useState } from "react";

function App() {
  let [bioData, setBioData] = useState({
    firstName: "John",
    lastName: "Doe",
    number: 9863215562,
    email: "johndoe@gmail.com",
  });

  let { firstName, lastName, number, email } = bioData;

  return (
    <div className="App">
      <div className="bio__img">
        <img src="/img/avatar.png" alt="avatar" width="200px" /> <br />
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
