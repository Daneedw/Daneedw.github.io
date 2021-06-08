import React from "react";
import styles from "./style.module.css"
import {
    Link
  } from "react-router-dom";
  import resume from "../../assets/Resume.pdf"
export default function Navbar() {

  return (
    <nav>
      <ul className={styles.navParent}>
        <li > <Link to="/">Projects </Link></li>
        <li > <Link to="/aboutme">About Me </Link></li>
        <li > <Link to="/contact">Contact </Link></li>
        <li > <a href={resume} download>Resume </a></li>
      </ul>
    </nav>
  );
}
