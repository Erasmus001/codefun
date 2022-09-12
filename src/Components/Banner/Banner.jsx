import React from "react";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

// SVG as Components
import { ReactComponent as Star } from "../../assets/svg/arrow-starup.svg";

import { useAutoAnimate } from '@formkit/auto-animate/react'

const Banner = () => {
  const [banner] = useAutoAnimate();

  return (
    <div className={styles.banner} ref={banner}>
      <h2>
        Launch your Dev Career with <span>Project-Based Coaching.</span>
      </h2>
      {/* <div className={styles.star}></div> */}
      <div className={styles.star}>
        <Star />
      </div>
      <p>
        Showcase your skills with practical development experience and land the
        coding career of your dreams.
      </p>
      <Link to="/courses" className={styles.course_link}>
        Explore Courses
      </Link>
    </div>
  );
};

export default Banner;
