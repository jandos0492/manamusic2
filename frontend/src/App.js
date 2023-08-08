import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactLinks />
    </div>
  );
}

export default App;
