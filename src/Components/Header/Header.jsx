import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/png&jpg/logo.png";

const Header = () => {
  const activestyle = {
    color: "#3434FF",
    fontWeight: 600,
  };
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link to="/">
          <img src={logo} alt="" loading="lazy" />
          <h3>Codefun</h3>
        </Link>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/courses" activestyle={activestyle}>
          Courses
        </NavLink>
        <NavLink to="/projects" activestyle={activestyle}>
          Projects
        </NavLink>
        <NavLink to="/mentorship" activestyle={activestyle}>
          Mentorship
        </NavLink>
        <NavLink to="/resources" activestyle={activestyle}>
          Rescources
        </NavLink>
        {/* <NavLink to='/challenges' activestyle={activestyle}>Challenges</NavLink> */}
        <NavLink to="/contact" activestyle={activestyle}>
          Contact
        </NavLink>
        <NavLink to="/about" activestyle={activestyle}>
          About
        </NavLink>
      </nav>

      <div className={styles.join}>
        <Link to="/join-us">Join us</Link>
      </div>
    </header>
  );
};

export default Header;
