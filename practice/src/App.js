import Navbar from "./Navbar";
import Home from "./Home";

const user = {
  firstName: "John",
  lastName: "Doe",
};

function formatName(users) {
  if (!users) {
    return <h1>My name is {users.firstName + " " + users.lastName}</h1>;
  } else {
    return <h2>Hello Strangers!</h2>;
  }
}

function App() {
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <div className="content">
  //       <Home />
  //     </div>
  //   </div>
  // );
  return <div>{formatName(user)}</div>;
}

export default App;
