import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

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
