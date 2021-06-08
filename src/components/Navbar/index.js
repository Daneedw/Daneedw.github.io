import React from "react";
import styles from "./style.module.css"
import {
    Link
  } from "react-router-dom";
export default function Navbar() {

  return (
    <nav>
      <ul className={styles.navParent}>
        {/* <li > <Link to="/">Home </Link></li> */}
        <li > <Link to="/">Projects </Link></li>
        <li > <Link to="/contact">Contact </Link></li>
      </ul>
    </nav>
  );
}
