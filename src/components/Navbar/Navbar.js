import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1017) {
        document.querySelector(".navbar").style.position = "sticky";
        document.querySelector(".navbar").classList.add("fadeIn");
      } else {
        document.querySelector(".navbar").classList.remove("fadeIn");
        document.querySelector(".navbar").style.position = "static";
      }
      console.log(window.scrollY);
    });
  });

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#first" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
