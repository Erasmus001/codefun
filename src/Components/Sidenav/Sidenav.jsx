import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidenav.module.css'

const Sidenav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.sidenav_hd}>
        <h3>Account</h3>
      </div>
      <nav className={styles.nav_links}>
        <NavLink to={`/me`}>My Profile</NavLink>
        <NavLink to={`/me/erasmus/courses`}>My Courses</NavLink>
        <NavLink to={`/me/erasmus/assignments`}>My Assignments</NavLink>
        <NavLink to={`/me/erasmus/events`}>My Events</NavLink>
        <NavLink to={`/me/erasmus/settings`}>Settings</NavLink>
      </nav>
    </div>
  )
}

export default Sidenav