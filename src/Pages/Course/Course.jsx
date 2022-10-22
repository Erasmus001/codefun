import React, { useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../Exports/exports";
import styles from "./Course.module.css";

const Course = () => {
  const courseParam = useParams();
  const courseId = courseParam.courseId
  const url = "../../api.json";

  useLayoutEffect(() => {
    alert(courseId);

    const fetchCourse = (courseId) => {
      fetch(`${url}/courses/${courseId}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchCourse(courseId);
  }, [courseId]);

  return (
    <>
      <Header />
      <div className={styles.course}>
        <h2>{JSON.stringify(courseParam)}</h2>
      </div>
    </>
  );
};

export default Course;
