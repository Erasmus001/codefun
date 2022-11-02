/* eslint-disable no-unused-vars */
import React from 'react'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import UserCourseCard from '../../../Components/UserCourseCard/UserCourseCard'
import { Header } from '../../../Exports/exports'
import styles from './UserAssignment.module.css'
// import CourseData from '../../../api.json'


const UserAssignment = () => {
  return (
    <>
      <Header />

      <div className={styles.user_assignment}>
        <Sidenav />
        <div className={styles.user_assignment_content}>
          <div className={styles.user_assignment_hd}>
            <h3>My Assignments</h3>
          </div>

          <div className={styles.user_assignment_lists}>
            {/* {
              Assigments?.map((assignment) => (
                <AssignmentCard data={assignment} key={assignment.id} />
              )).slice(0, 5)
            } */}
          </div>
        </div>
      </div>
    </>
  )
}

export default UserAssignment