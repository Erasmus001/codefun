import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './CourseCard.module.css';

const CourseCard = ({ course }) => {
	// Destructuring the course props...
	const { title, price, intro, imgUrl, tutor } = course;

	useLayoutEffect(() => {
		// Adding an automatic scroll to top upon render...
		const scrollWindow = () => {
			window.scrollTo({
				top: 0,
				scroll: 'smooth',
			});
		};

		// Removing the automatic scroll
		return () => {
			scrollWindow();
		};
	}, [title]);

	return (
		<Link to={`/courses/${title}`} className={styles.course_card}>
			<div className={styles.course_card_img}>
				<img src={imgUrl} alt={title} loading='lazy' />
			</div>
			<div className={styles.course_card_info}>
				<div className={styles.course_card_info_txt}>
					<h3>{title}</h3>
					<p>{intro}</p>
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
