import React from 'react'
import Sidenav from '../../../Components/Sidenav/Sidenav'
import { Header } from '../../../Exports/exports'
import styles from './UserCourses.module.css'
import CourseData from '../../../api.json'
import UserCourseCard from '../../../Components/UserCourseCard/UserCourseCard'

const UserCourses = () => {
  const Courses = CourseData?.courses;
  return (
    <>
      <Header />
      <div className={styles.user_courses}>
        <Sidenav />

        <div className={styles.user_course_content}>
          <div className={styles.user_course_hd}>
            <h3>My Courses</h3>
          </div>

          <div className={styles.user_course_lists}>
            {
              Courses?.map((course) => (
                <UserCourseCard data={course} key={course.id} />
              )).slice(0, 5)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCourses