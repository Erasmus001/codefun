/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../../Components/CourseCard/CourseCard';
import Header from '../../Components/Header/Header';
import styles from './Courses.module.css';

// Courses data
import CoursesData from '../../api.json';

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useLayoutEffect(() => {
		setCourses(CoursesData.courses);
	}, [courses]);

	return (
		<>
			<Header />
			<div className={styles.courses}>
				<section className={styles.courses_banner}>
					<h2>Our Courses</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo
						magni, qui vel laborum ducimus.
					</p>
					{/* <Link to="" className={styles.get_started}>
            Get Started
          </Link> */}
				</section>

				{/* Catalogue of courses */}
				<div className={styles.courses_lists}>
					<div className={styles.courses_hd}>
						<h3>Choose your course</h3>
						<p>
							Get your web development career started by choosing a course to
							learn.
						</p>
					</div>

					<div className={styles.courses_container}>
						{courses?.map((course) => (
							<CourseCard course={course} key={course.id} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Courses;
