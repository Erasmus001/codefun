import React from "react";
import styles from "./Whyus.module.css";

const Whyus = () => {
  return (
    <>
      <div className={styles.why_us}>
        <h3>Welcome to Codefun Pro</h3>
        <p>
          Hands-on projects are the most practical way to learn a programming
          language and build your portfolio. If you're tired of building "to-do"
          apps and learning theory, codefun Pro can help you solidify your
          knowledge and start taking on meaningful projects that will set the
          tone for your career.
        </p>
      </div>

      <div>
        <h3>
          Comprehensive Project-Based Courses to Help You Become a JavaScript
          Master
        </h3>
        <p>
          Want to master React.js or create a stunning mobile app? Join other
          professional developers inside Codefun Pro where you'll build a
          Netflix clone streaming app or an Amazon Clone where you'll develop an
          Ecommerce platform.
        </p>
      </div>
    </>
  );
};

export default Whyus;
