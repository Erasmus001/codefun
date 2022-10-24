import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Exports/exports";
import styles from "./Course.module.css";
import CourseData from '../../api.json'

const Course = () => {
  const courseParam = useParams();
  const courseId = courseParam.courseId

  const courses = CourseData.courses

  useLayoutEffect(() => {
    const fetchCourse = (id) => {
      console.log(id);
      const selectedCourse = courses.filter((id) => id.id === courses)

      console.log(`SelectedCourse => ${JSON.stringify(selectedCourse)}`);
    };

    fetchCourse(courseId);
  });

  return (
    <>
      <Header />
      <div className={styles.course}>
        <div className={styles.course_banner}>
          <div className={styles.course_title}>
            <h2>{courseId}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
