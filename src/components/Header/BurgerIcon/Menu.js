import React from "react";
import './BurgerIcon.css';
export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close} className="link">
      <a href="/">About</a>
      </li>
      <li onClick={close} className="link">
      <a href="/">Work</a>
      </li>
      <li onClick={close} className="link">
      <a href="/">Contact</a>
      </li>
    </ul>
  </div>
);
