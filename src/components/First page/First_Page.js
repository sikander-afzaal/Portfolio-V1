import React, { useEffect } from "react";
import "./First_Page.css";
import video from "./video.mp4";
import { init } from "ityped";
import Particles from "react-particles-js";
import { tsParticles } from "tsparticles";
function FirstPage() {
  useEffect(() => {
    const first = document.querySelector("#one");
    init(first, {
      showCursor: true,
      strings: ["Frontend developer", "React JS developer"],
      typeSpeed: 100,
    });
  }, []);
  const mobile = window.innerWidth;
  const part__number = mobile > 414 ? 100 : 30;
  return (
    <>
      <div id="first" className="first">
        {/* <video className="video" loop="loop" src={video} autoplay="true" /> */}
        <div className="particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: part__number,
                },
                size: {
                  value: 2,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <h1>
          Hello, I'm <span className="pink">Sikander Afzaal</span>
        </h1>
        <h1 className="h1">
          I'm a
          <ul>
            <li>
              <span id="one" className=""></span>
            </li>
            {/* {mobile > 415 ? (
              <li>
                <span id="two" className=""></span>
              </li>
            ) : (
              ""
            )} */}
          </ul>
        </h1>
        <a className="work-btn" href="#projects">
          View my work <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </>
  );
}

export default FirstPage;
