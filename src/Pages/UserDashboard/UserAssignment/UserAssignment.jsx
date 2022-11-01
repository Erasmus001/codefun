import React from 'react'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import { Header } from '../../../Exports/exports'
import styles from './UserAssignment.module.css'

const UserAssignment = () => {
  return (
    <>
      <Header />

      <div className={styles.user_assignment}>
        <Sidenav />
        <div>
          UserAssignment
        </div>
      </div>
    </>
  )
}

export default UserAssignment