import React from "react";
import "./First_Page.css";
import video from "./video.mp4";
function FirstPage() {
  const mobile = window.innerWidth;
  return (
    <>
      <div id="first" className="first">
        <video className="video" loop="loop" src={video} autoplay="true" />
        <h1>
          Hello, I'm <span className="pink">Sikander Afzaal</span>
        </h1>
        <h1 className="h1">
          I'm a
          <ul>
            <li>
              <span className="animated"> front-end web developer</span>
            </li>
            {mobile > 415 ? (
              <li>
                <span className="animated"> React js developer</span>
              </li>
            ) : (
              ""
            )}
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
