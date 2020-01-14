import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./assets/Pareiovision.png";
import "./App.css";
import { ContactPage, HomePage, ListenPage } from "./pages";
import React, { Component } from "react";

class App extends Component {
  handleMouseOver = () => {
    this.images.forEach((image, idx) => {
      if (idx === 0) {
        return;
      } else if (idx === 1) {
        image.style.display = `block`;
        image.style.transform = `translateY(1.5rem)`;
      } else {
        image.style.display = `block`;
        image.style.transform = `translateY(3rem)`;
      }
    });
  };
  handleMouseOut = () => {
    this.images.forEach((image, idx) => {
      if (idx === 0) {
        return;
      } else if (idx === 1) {
        image.style.display = "";
        image.style.transform = "";
      } else {
        image.style.display = "";
        image.style.transform = "";
      }
    });
  };
  images = [];
  render() {
    return (
      <Router>
        <nav className="flex-column-m flex-l justify-center justify-between-l items-center items-start-l">
          <div className="ma0 logo w-100-m relative flex flex-column justify-start-l justify-center items-center">
            <Link
              onMouseOver={this.handleMouseOver}
              onMouseOut={this.handleMouseOut}
              to="/"
              className="link dim w-50-m logo-image"
            >
              <img
                src={logo}
                alt=""
                ref={ref => {
                  this.images[0] = ref;
                }}
              />
              <img
                src={logo}
                alt=""
                ref={ref => {
                  this.images[1] = ref;
                }}
              />
              <img
                src={logo}
                alt=""
                ref={ref => {
                  this.images[2] = ref;
                }}
              />
              {/*</div>*/}
            </Link>
          </div>
          <ul className="pa0 flex justify-between items-center list mt4 mt2-l mb0 w-25-l">
            <li>
              <Link to="/" className=" link white dim">
                Home
              </Link>
            </li>
            <li>
              <Link to="/listen" className="link white dim">
                Listen
              </Link>
            </li>
            <li>
              <a
                disabled
                rel="noopener noreferrer"
                target="_blank"
                className="link white dim ma0"
                href="http://www.shop.pareiovision.com"
              >
                Shop
              </a>
            </li>

            <li>
              <Link to="/contact" className=" link white dim">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route path="/listen" component={ListenPage} />
        <Route path="/contact" component={ContactPage} />

        <Route />
      </Router>
    );
  }
}

export default App;
