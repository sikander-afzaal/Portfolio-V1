import React, { useEffect } from "react";
import "./Projects.css";
import commerce from "./project_photos/ecommerce.PNG";
import blogr from "./project_photos/blogr.PNG";
import space from "./project_photos/space.PNG";
import countries from "./project_photos/countries.PNG";
import rock from "./project_photos/rock.PNG";
import bill from "./project_photos/bill.PNG";
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
    const grid = document.querySelector(".table__grid");
    if (e.target.innerText === "React Js") {
      listImages.forEach((image) => {
        image.classList.add("hidden");
      });
      list[0].classList.remove("active");
      list[1].classList.add("active");
      grid.classList.add("col");
    } else {
      list[1].classList.remove("active");
      list[0].classList.add("active");
      listImages.forEach((image) => {
        image.classList.remove("hidden");
      });
      grid.classList.remove("col");
    }
  };
  return (
    <div id="projects" className="projects">
      <h1 className="heading__project">
        My Works <span className="before__project"></span>
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
            <img src={commerce} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://e-commerce-product-page.vercel.app/"
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
          <div className="image__div">
            <img src={space} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://sikander-afzaal.github.io/Space-tourism-website/"
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
            <img src={rock} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://rock-paper-scissors-game-theta.vercel.app/"
              target="blank"
            >
              Visit Site
            </a>
          </div>
          <div className="image__div non__react">
            <img src={bill} alt="" className="grid__image" />
            <a
              className="visit"
              href="https://bill-splitter-pi.vercel.app/"
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
              href="https://sunny-side-nine.vercel.app/"
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
