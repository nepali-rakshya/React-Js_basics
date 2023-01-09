import "./index.css";

function App() {
  function handleClick() {
    console.log("I am a react logo");
  }

  function onMouseOver() {
    console.log("Mouse over");
  }

  return (
    <div>
      <img src="/logo192.png" alt="" onMouseOver={onMouseOver} /> <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
