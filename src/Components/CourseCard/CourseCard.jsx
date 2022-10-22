import React from "react";
import { Link } from "react-router-dom";
import styles from "./CourseCard.module.css";

const CourseCard = ({course}) => {

  const {title, price, intro, imgUrl, tutor, id} = course;
  return (
    <Link to={`/courses/${id}`} className={styles.course_card}>
      <div className={styles.course_card_img}>
        <img src={imgUrl} alt="" loading="lazy" />
      </div>
      <div className={styles.course_card_info}>
        <div className={styles.course_card_info_txt}>
          <h3>{title}</h3>
          <p>
            {intro}
          </p>
        </div>
        <div className={styles.course_card_tutor}>
          <p>{tutor}</p>
          <p className={styles.course_card_price_tag}>{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
