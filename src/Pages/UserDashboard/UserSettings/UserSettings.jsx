import React from 'react'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import { Header } from '../../../Exports/exports'
import styles from './UserSettings.module.css'

const UserSettings = () => {
  return (
    <>
      <Header />

      <div className={styles.user_settings}>
        <Sidenav />

        <div>
          User Settings
        </div>
      </div>
    </>
  )
}

export default UserSettings