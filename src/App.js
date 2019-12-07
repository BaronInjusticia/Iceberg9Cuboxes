import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Section />
        <Section02 />
        <Section03 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
