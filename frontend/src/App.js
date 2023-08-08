import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactLinks />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
