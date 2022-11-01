import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidenav.module.css'

const Sidenav = () => {
  let activeStyle = {
    color: '#3434FF',
  };
  return (
    <div className={styles.sidenav}>
      <div className={styles.sidenav_hd}>
        <h3>Account</h3>
      </div>
      <nav className={styles.nav_links}>
        <NavLink to={`/me`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Profile</NavLink>
        <NavLink to={`/me/erasmus/courses`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Courses</NavLink>
        <NavLink to={`/me/erasmus/assignments`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Assignments</NavLink>
        <NavLink to={`/me/erasmus/events`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Events</NavLink>
        <NavLink to={`/me/erasmus/settings`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>Settings</NavLink>
      </nav>
    </div>
  )
}

export default Sidenav