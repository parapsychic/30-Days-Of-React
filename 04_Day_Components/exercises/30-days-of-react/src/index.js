import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import html5_image from "./images/html5.png";
import css_image from "./images/css.png";
import js_image from "./images/js.png";
import react_image from "./images/react.png";

const Header = () => (
  <div>
    <h1>ParaPsychic</h1>
  </div>
);

const techs = [html5_image, css_image, js_image, react_image].map((tech) => (
  <img key={tech} src={tech} alt={tech} className="tech-used-img" />
));

const Main = () => (
  <main>
    <h3 className="centered">Front End Technologies</h3>
    <div className="tech-used">{techs}</div>
  </main>
);

const Footer = () => (
  <footer className="footer">
    <div className="blue-div">
      <p className="subscribe-text">SUBSCRIBE</p>
      <p id="subscribe-footer-text">
        Sign up with your email address to receive news and updates
      </p>
      <form id="form">
        <input
          type="text"
          className="footer-input"
          placeholder="First Name"
        ></input>
        <input
          type="text"
          className="footer-input"
          placeholder="Last Name"
        ></input>
        <input
          type="text"
          className="footer-input"
          placeholder="Email Name"
        ></input>
        <div id="submit-button">
          <button id="submit" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
