import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from '../Auth.module.css'
import logo from '../../../assets/png&jpg/logo.png'
import Play from '../../../assets/icons/play'

const Signup = () => {
  return (
    <div className={styles.auth_page}>
      <div className={styles.auth_banner}>
        <div className={styles.brand}>
          <Link to='/'>
            <img src={logo} alt="" loading="lazy" />
            <h3>Codefun</h3>
          </Link>
        </div>

        <div className={styles.banner_txt}>
          <div>
            <h1>Learn to code.</h1>
            <h1>Interactively.</h1>
            <h1>For free.</h1>
          </div>

          <div className={styles.demo_vid}>
            <button>
              <div className={styles.playIcon}>
                <Play fill='white' height='16' width='16' />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>
        </div>

        <div className={styles.bottom_nav}>
          <nav className={styles.nav}>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/mentorship'>Mentorship</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Signup