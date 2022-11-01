import React from 'react'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import { Header } from '../../../Exports/exports'
import styles from './UserCourses.module.css'

const UserCourses = () => {
  return (
    <>
      <Header />

      <div className={styles.user_courses}>
        <Sidenav />

        <div>
          User Courses
        </div>
      </div>
    </>
  )
}

export default UserCourses