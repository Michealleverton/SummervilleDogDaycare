import React from "react";
import { NavLink } from "react-router-dom";
import daycarelogo2 from "../assets/daycarelogo2.gif";

function Navigation() {
  return (
    <section>
        <header className="d-flex header fixed-top px-5 bottomblackline myshadow-lg bg_white">
          <nav className="navbar navbar-expand-lg bg_white">
          <NavLink to="/"><img className="mylogo" alt="" src={daycarelogo2} /></NavLink>
            <div className="display-7 pt-3 text-black">
              Summersville <span className="text-green">Doggy </span>Daycare<br />
              <p className="slogan">Your Friends Won't Want To Leave</p>
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="mynav nav-item">
                <NavLink className="mynavlinks nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mynavlinks nav-link" to="/Daycare">
                Daycare
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mynavlinks nav-link" to="/Boarding">
                 Boarding
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mynavlinks nav-link" to="/Services">
                 Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="mynavlinks nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </section>
  );
}

export default Navigation;