import React, { useEffect } from "react";
import "./Contact.css";
function Contact() {
  const mobile = window.innerWidth;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 2575) {
        document
          .querySelector(".heading__contact")
          .classList.add("translateAnim");
        document
          .querySelector(".before__contact")
          .classList.add("translateBorder");
        document.querySelector(".bottom__div").classList.add("translateUp");
      } else {
        document
          .querySelector(".heading__contact")
          .classList.remove("translateAnim");
        document
          .querySelector(".before__contact")
          .classList.remove("translateBorder");
        document.querySelector(".bottom__div").classList.remove("translateUp");
      }
      console.log(window.scrollY);
    });
  });
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="contact" className="contact">
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 102"
        height="75"
        width="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        class="pointy"
      >
        <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
      </svg>
      <div className="contact__div">
        <h1 className="heading__contact">
          Contact <span className="before__contact"></span>
        </h1>

        <div className="bottom__div">
          <div>
            <p className="work-together">
              Have a question or want to work together?
            </p>
          </div>
          <div className="socials">
            <div className="icon__div__social link">
              <a
                href="https://www.linkedin.com/in/sikander-afzaal-0b9398157/"
                target="blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="icon__div__social fb">
              <a
                href="https://www.facebook.com/profile.php?id=100008363101582"
                target="blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="icon__div__social insta">
              <a
                href="https://www.instagram.com/sikanderafzaal/"
                target="blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div className="icon__div__social github">
              <a href="https://github.com/sikander-afzaal" target="blank">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div
            className={`up ${mobile <= 415 ? "animationUp" : ""}`}
            onClick={toTop}
          >
            <i class="fas fa-angle-double-up"></i>
          </div>
          <p className="copy">Copyright © 2021, Sikander Afzaal</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
