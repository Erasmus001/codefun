/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./PageNotFound.module.css";
import { useNavigate, Navigate } from "react-router-dom";

const PageNotFound = () => {
  // const navigate = useNavigate()

  // const goHomeHandler = () => {
  //   navigate('/')
  // }
  return (
    <div className={styles.page_not_found}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <small>
        The page you are looking for doesn't exist or has been moved.
      </small>
      <Navigate to='/' replace='true'>Go Home</Navigate>
      {/* <button type="button" onClick={goHomeHandler}>Go Home</button> */}
    </div>
  );
};

export default PageNotFound;
