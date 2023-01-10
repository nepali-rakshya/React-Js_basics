import "./index.css";

function App() {
  const thingsArray = ["Thing 1", "Thing 2"];
  const listArrayItems = thingsArray.map((item) => {
    return <p key={item}>{item}</p>;
  });

  function handleClick() {
    const value = thingsArray.length;
    thingsArray.push("Thing " + (value + 1));
    console.log(thingsArray);
  }

  return (
    <div className="div__button">
      <button onClick={handleClick}> Add item</button>
      {listArrayItems}
    </div>
  );
}

export default App;
