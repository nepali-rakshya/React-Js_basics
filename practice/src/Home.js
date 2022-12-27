import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(21);

  const handleClick = () => {
    setName("rakshya");
    setAge(22);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
