import React from "react";
import ReactDOM from "react-dom/client";

const image = "./logo192.png";

function Header() {
  return (
    <header
      className="img"
      style={{
        marginBottom: "1em",
      }}
    >
      <img src={image} alt="react-logo" width="50px" />
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>&copy; 2022 Nepali development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <main
      className="main-content"
      style={{
        marginBottom: "1em",
      }}
    >
      <h1
        style={{
          marginBottom: "0.3em",
        }}
      >
        Fun facts about React
      </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Fackebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

function Page() {
  return (
    <div
      style={{
        margin: "3em",
      }}
    >
      <Header />
      <MainContent />

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
