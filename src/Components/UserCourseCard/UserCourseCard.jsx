import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UserCourseCard.module.css'
import CourseImg from '../../assets/New folder/nextjs1.jpg'

const UserCourseCard = ({data}) => {
  const imgUrl = CourseImg
  const { title, desc, price} = data

  return (
    <Link to={`/courses/${title}`} className={styles.user_course_card}>
      <div className={styles.course_card_img}>
        <img src={imgUrl} alt={title} loading='lazy' />
      </div>
      <div className={styles.course_card_details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </Link>
  )
}

export default UserCourseCard