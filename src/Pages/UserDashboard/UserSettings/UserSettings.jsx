import React from 'react'
import { Link } from 'react-router-dom'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import { Header } from '../../../Exports/exports'
import styles from './UserSettings.module.css'

const UserSettings = () => {
  return (
    <>
      <Header />

      <div className={styles.user_settings}>
        <Sidenav />

        <div className={styles.settings}>
          <div className={styles.settings_hd}>
            <h3>My Settings</h3>
          </div>

          <div className={styles.settings_lists}>
            <div className={styles.settings_list}>
              <h4>Change Language</h4>
              <p>Choose your prefered language</p>
            </div>
            <div className={styles.settings_list}>
              <h4>Support</h4>
              <p>Raise tickets regarding any issue here on the platform.
              </p>
            </div>
            <Link to={`/reset-password`} className={styles.settings_list}>
              <h4>Reset Your Password</h4>
              <p>Change your account password here</p>
            </Link>
            <div className={styles.settings_list}>
              <h4>Language</h4>
              <p>Choose your prefered language</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserSettings