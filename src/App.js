import React from "react";
import "./App.css";
import FirstPage from "./components/First page/First_Page.js";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Contact from "./components/Contact/Contact.js";
function App() {
  return (
    <div className="App">
      <FirstPage />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
