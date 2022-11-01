import React from 'react'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import { Header } from '../../../Exports/exports'
import styles from './UserEvents.module.css'

const UserEvents = () => {
  return (
    <>
      <Header />

      <div className={styles.user_events}>
        <Sidenav />

        <div>
          User Events
        </div>
      </div>
    </>
  )
}

export default UserEvents