import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidenav.module.css'

const Sidenav = () => {
  let activeStyle = {
    // color: '#3434FF',
    backgroundColor: 'rgba(200, 200, 200, 0.482)',
    borderRadius: '5px'
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
        <NavLink to={`/erasmus/courses`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Courses</NavLink>
        <NavLink to={`/erasmus/assignments`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Assignments</NavLink>
        <NavLink to={`/erasmus/events`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>My Events</NavLink>
        <NavLink to={`/erasmus/settings`} style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>Settings</NavLink>
      </nav>
    </div>
  )
}

export default Sidenav