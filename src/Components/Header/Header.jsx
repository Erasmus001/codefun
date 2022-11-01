import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/png&jpg/logo.png";

const Header = () => {
  const activeStyle = {
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
        <NavLink to="/courses" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          Courses
        </NavLink>
        <NavLink to="/projects" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          Projects
        </NavLink>
        <NavLink to="/mentorship" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          Mentorship
        </NavLink>
        <NavLink to="/resources" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          Rescources
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          Contact
        </NavLink>
        <NavLink to="/about" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
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
