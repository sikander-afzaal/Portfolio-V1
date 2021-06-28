import React, { useEffect } from "react";
import "./About.css";

function About() {
  const mobile = window.innerWidth;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (mobile >= 415) {
        if (window.scrollY >= 295) {
          document.querySelector(".heading").classList.add("translateAnim");
          document.querySelector(".before").classList.add("translateBorder");
          document.querySelectorAll(".icon__div").forEach((child) => {
            child.classList.add("rotate");
          });
          document.querySelectorAll(".traits__h2").forEach((child) => {
            child.classList.add("aboutFade");
          });
          document.querySelectorAll(".traits__p").forEach((child) => {
            child.classList.add("aboutFade");
          });
          document.querySelector(".left").classList.add("fade");
          document.querySelector(".right").classList.add("fade");
          document.querySelector(".bar__css").classList.add("seventy");
          document.querySelector(".bar__html").classList.add("ninety");
          document.querySelector(".bar__js").classList.add("sixty");
          document.querySelector(".bar__react").classList.add("seventy");
        } else {
          document.querySelector(".heading").classList.remove("translateAnim");
          document.querySelector(".before").classList.remove("translateBorder");
          document.querySelectorAll(".icon__div").forEach((child) => {
            child.classList.remove("rotate");
          });
          document.querySelectorAll(".traits__h2").forEach((child) => {
            child.classList.remove("aboutFade");
          });
          document.querySelectorAll(".traits__p").forEach((child) => {
            child.classList.remove("aboutFade");
          });
          document.querySelector(".left").classList.remove("fade");
          document.querySelector(".right").classList.remove("fade");
          document.querySelector(".bar__css").classList.remove("seventy");
          document.querySelector(".bar__html").classList.remove("ninety");
          document.querySelector(".bar__js").classList.remove("sixty");
          document.querySelector(".bar__react").classList.remove("seventy");
        }
      } else {
        if (window.scrollY >= 400) {
          document.querySelector(".heading").classList.add("translateAnim");
          document.querySelector(".before").classList.add("translateBorder");
          document.querySelectorAll(".icon__div").forEach((child) => {
            child.classList.add("rotate");
          });
          document.querySelectorAll(".traits__h2").forEach((child) => {
            child.classList.add("aboutFade");
          });
          document.querySelectorAll(".traits__p").forEach((child) => {
            child.classList.add("aboutFade");
          });
          document.querySelector(".left").classList.add("fade");
          document.querySelector(".right").classList.add("fade");
          document.querySelector(".bar__css").classList.add("seventy");
          document.querySelector(".bar__html").classList.add("ninety");
          document.querySelector(".bar__js").classList.add("sixty");
          document.querySelector(".bar__react").classList.add("seventy");
        } else {
          document.querySelector(".heading").classList.remove("translateAnim");
          document.querySelector(".before").classList.remove("translateBorder");
          document.querySelectorAll(".icon__div").forEach((child) => {
            child.classList.remove("rotate");
          });
          document.querySelectorAll(".traits__h2").forEach((child) => {
            child.classList.remove("aboutFade");
          });
          document.querySelectorAll(".traits__p").forEach((child) => {
            child.classList.remove("aboutFade");
          });
          document.querySelector(".left").classList.remove("fade");
          document.querySelector(".right").classList.remove("fade");
          document.querySelector(".bar__css").classList.remove("seventy");
          document.querySelector(".bar__html").classList.remove("ninety");
          document.querySelector(".bar__js").classList.remove("sixty");
          document.querySelector(".bar__react").classList.remove("seventy");
        }
      }
    });
  });
  return (
    <div id="about" className="about">
      <h1 className="heading">
        ABOUT <span className="before"></span>
      </h1>
      <div className="about__boxes">
        <div className="traits">
          <div className="one icon__div">
            <i class="icon fas fa-tachometer-alt"></i>
          </div>
          <h2 className="one traits__h2">Fast</h2>
          <p className="one traits__p">
            Fast load times and lag free interaction, my highest priority.
          </p>
        </div>
        <div className="traits">
          <div className="two icon__div">
            <i class="icon fas fa-laptop"></i>
          </div>
          <h2 className="two traits__h2">Responsive</h2>
          <p className="two traits__p">
            My layouts will work on any device, big or small.
          </p>
        </div>
        <div className="traits">
          <div className="three icon__div">
            <i class="icon fas fa-rocket"></i>
          </div>
          <h2 className="three traits__h2">Dynamic</h2>
          <p className="three traits__p">
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </div>
      <div className="about__me">
        <div className="left">
          <div className="myself__div">
            <img
              className="myself"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
              alt=""
            />
          </div>

          <h1 className="who">Who is this guy</h1>
          <p className="desc">
            I'm a Front-End Developer based in Pakistan, KHI. I have serious
            passion for websites, dynamic user experiences. Let's make something
            special.
          </p>
        </div>
        <div className="right">
          <div className="css">
            <p>CSS</p>
            <div className="percentage">
              <span className="bar__css"></span> 70%
            </div>
          </div>
          <div className="html">
            <p>HTML</p>
            <div className="percentage">
              <span className="bar__html"></span> 90%
            </div>
          </div>
          <div className="js">
            <p>JAVASCRIPT</p>
            <div className="percentage">
              <span className="bar__js"></span> 65%
            </div>
          </div>
          <div className="react">
            <p>REACT</p>
            <div className="percentage">
              <span className="bar__react"></span> 70%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
