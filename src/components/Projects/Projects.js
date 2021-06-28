import React, { useEffect } from "react";
import "./Projects.css";
import bank from "./project_photos/bank.PNG";
import blogr from "./project_photos/blogr.PNG";
import calc from "./project_photos/calc.PNG";
import countries from "./project_photos/countries.PNG";
import insure from "./project_photos/insure.PNG";
import loop from "./project_photos/loop.PNG";
import netflix from "./project_photos/netflix.PNG";
import spotify from "./project_photos/spotify.PNG";
import stroom from "./project_photos/stroom.PNG";
import tesla from "./project_photos/tesla.PNG";
import timer from "./project_photos/timer.PNG";
import weather from "./project_photos/weather.PNG";
function Projects() {
  const mobile = window.innerWidth;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (mobile >= 415) {
        if (window.scrollY >= 1660) {
          document
            .querySelector(".heading__project")
            .classList.add("translateAnim");
          document
            .querySelector(".before__project")
            .classList.add("translateBorder");
          document.querySelectorAll(".image__div").forEach((div) => {
            div.classList.add("scaleIn");
          });
          document.querySelector(".table__heading").style.opacity = "1";
        } else {
          document
            .querySelector(".heading__project")
            .classList.remove("translateAnim");
          document
            .querySelector(".before__project")
            .classList.remove("translateBorder");
          document.querySelector(".table__heading").style.opacity = "0";
          document.querySelectorAll(".image__div").forEach((div) => {
            div.classList.remove("scaleIn");
          });
        }
      } else {
        if (window.scrollY >= 2800) {
          document
            .querySelector(".heading__project")
            .classList.add("translateAnim");
          document
            .querySelector(".before__project")
            .classList.add("translateBorder");
          document.querySelectorAll(".image__div").forEach((div) => {
            div.classList.add("scaleIn");
          });
          document.querySelector(".table__heading").style.opacity = "1";
        } else {
          document
            .querySelector(".heading__project")
            .classList.remove("translateAnim");
          document
            .querySelector(".before__project")
            .classList.remove("translateBorder");
          document.querySelector(".table__heading").style.opacity = "0";
          document.querySelectorAll(".image__div").forEach((div) => {
            div.classList.remove("scaleIn");
          });
        }
      }
    });
  });

  const clickHandler = (e) => {
    const list = document.querySelectorAll(".table__list");
    const listImages = document.querySelectorAll(".non__react");
    if (e.target.innerText === "React Js") {
      listImages.forEach((image) => {
        image.classList.add("hidden");
      });
      list[0].classList.remove("active");
      list[1].classList.add("active");
    } else {
      list[1].classList.remove("active");
      list[0].classList.add("active");
      listImages.forEach((image) => {
        image.classList.remove("hidden");
      });
    }
  };
  return (
    <div id="projects" className="projects">
      <h1 className="heading__project">
        PROJECTS <span className="before__project"></span>
      </h1>
      <div className="table">
        <div className="table__heading">
          <ul>
            <li onClick={clickHandler} className="table__list active">
              All
            </li>
            <li onClick={clickHandler} className="table__list">
              React Js
            </li>
          </ul>
        </div>
        <div className="table__grid">
          <div className="image__div non__react">
            <img src={bank} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://easy-bank-sikander-afzaal.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={blogr} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://blogr-ten.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={calc} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://calculator-gold-ten.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={countries} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://countries-rest-api-murex.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={insure} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://insure-landing-page-p.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={loop} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://loop-studios-landing-page-sikander-afzaal.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div netflix">
            <img src={netflix} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://sikander-afzaal.github.io/Netflix-Clone/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div spotify">
            <img src={spotify} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://sikander-afzaal.github.io/Spotify-Clone/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={stroom} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://stroom-x.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div tesla">
            <img src={tesla} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://sikander-afzaal.github.io/Tesla-Clone/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={timer} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://countdown-timer-jade.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={weather} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://weather-app-six-neon.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
