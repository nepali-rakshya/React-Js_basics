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

  let starIcon = 
  let { firstName, lastName, number, email, isFavorite } = bioData;

  return (
    <div className="App">
      <div className="bio__img">
        <img src="/img/avatar.png" alt="avatar" width="200px" /> <br />
        {/* <img src="/img/star-filled.png" alt="star-filled" /> */}
        
        <img src="/img/star.png" alt="star" onClick={setBioData(!isFavorite)}/>
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
