import React from "react";
import ReactDOM from "react-dom/client";

const image = "./logo192.png";

const content = (
  <div>
    <section className="img">
      <img src={image} alt="react-logo" width="50px" />
    </section>
    <main className="main-content">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Fackebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
