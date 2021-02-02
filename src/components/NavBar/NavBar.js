import React, { Component } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import { Cart } from "../cart/Cart";

const NavBar = () => {
  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">Bootlegger</h1>

      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

/* function NavBar(params) {
  return (
    <nav className="NavBarItems">
      <h1 className="navbar-logo">Bootlegger </h1>
      <div className="menu-icon"></div>

      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} */

/* class NavBar extends Component {
  render() {
    return (
      <nav className="NavBarItems">
        <h1 className="navbar-logo">Bootlegger </h1>
        <div className="menu-icon"></div>

        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
} */
