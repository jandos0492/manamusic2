import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactLinks from "./components/ContactLinks";
import Home from "./components/Home";
import Library from "./components/Library";

function App() {

  return (
    <div className="App">
      <Navbar />
      <ContactLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
