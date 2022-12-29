import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

const image = "./logo192.png";

function Header() {
  return (
    <header className="img center">
      <img src={image} alt="react-logo" width="50px" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small className="center">
        &copy; 2022 Nepali development. All rights reserved.
      </small>
    </footer>
  );
}

function MainContent() {
  return (
    <main className="main-content center">
      <h1>Fun facts about React</h1>
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
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
