/* eslint-disable no-unused-vars */
import React, { Fragment, useLayoutEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../Exports/exports';
import styles from './Course.module.css';
import CourseData from '../../api.json';

import Img from '../../assets/png&jpg/60b830fb89b3f8c7a3b97925_course-single-image-academy-webflow-template.jpg';

// SVG's
import Beginner from '../../assets/miniSvg/beginner-level-svg.svg';
import Duration from '../../assets/miniSvg/duration-svg.svg';
import Vid from '../../assets/miniSvg/video-svg.svg';
import LifetimeAccess from '../../assets/miniSvg/lifetime-access-svg.svg';
import AccessAnywhere from '../../assets/miniSvg/access-anywhere-svg.svg';
import Downloadable from '../../assets/miniSvg/downloadable-svg.svg';
import OnlineVid from '../../assets/miniSvg/online-vid-svg.svg';
import OneOnOne from '../../assets/miniSvg/one-on-one-mentor-svg.svg';
import CommunityChat from '../../assets/miniSvg/active-community-svg.svg';
import MultiDownlaoad from '../../assets/miniSvg/multi-download-svg.svg';
import { useAuth } from '../../Context/AppContext';
import userDB from '../../utils/userDB';

const Course = () => {
	const [hasEnrolled, setHasEnrolled] = useState(false);
	// const [user, setUser] = useState(false);
	const [course, setCourse] = useState([]);
	const navigate = useNavigate();

	const { currentUser } = useAuth();

	// Destructuring the `CourseId` from the URL Parameter..
	const { courseId } = useParams();

	// Filtering through all the course to find the matching course....
	const selectedCourse = CourseData?.courses?.filter(
		(course) => course.title === courseId
	);

	useLayoutEffect(() => {
		setCourse(selectedCourse[0]);

		// Adding an automatic scroll to top upon render...
		const scrollWindow = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		};

		// Removing the automatic scroll
		return () => {
			scrollWindow();
		};
	}, [selectedCourse]);

	// Enroll Course Function...
	const enrollCourseHandler = () => {
		if (!currentUser) {
			navigate('/join-us');
		}

		if (currentUser && !hasEnrolled) {
			
			setHasEnrolled(true);
		} else {
			setHasEnrolled(false);
		}
	};

	const {
		title,
		accessLimit,
		price,
		imgUrl,
		intro,
		desc,
		level,
		videoUrl,
		features,
		instructor,
		relation,
		tags,
		videoPoster,
		videos,
		LearningLists,
		downloadables,
		devices,
	} = course;

	return (
		<>
			<Header />
			<div className={styles.course}>
				<div className={styles.course_banner}>
					<div className={styles.course_hd}>
						<div className={styles.course_title}>
							<h3>{title}</h3>
							<p>{desc}</p>
						</div>
						<div className={styles.perks}>
							{Object?.features?.map((feature) => (
								<>
									<div className={styles.perk}>
										<div className={styles.perk_img}>
											<img src={OnlineVid} alt='' loading='lazy' />
										</div>
										<p>{feature}</p>
									</div>
								</>
							))}
						</div>
						<div className={styles.tutor_profile}>
							<div className={styles.tutor}>
								<div className={styles.tutor_img}>
									<img src={Img} alt='tutor_image' />
								</div>
								<div className={styles.tutor_info}>
									{instructor?.map(({ name, role }) => (
										<Fragment key={role}>
											<h4>{name}</h4>
											<p>{role}</p>
										</Fragment>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Course Card */}
					<div className={styles.course_preview_card}>
						<div className={styles.preview}>
							<div className={styles.course_preview}>
								<div className={styles.course_preview_video}>
									{/* <video src={Img} loop muted></video> */}
									<img src={Img} alt='course_img_preview' loading='lazy' />
								</div>
								<div className={styles.course_details}>
									<div className={styles.course_price}>
										<h4>{price}</h4>
									</div>
									<div className={styles.course_action}>
										<button
											type='button'
											onClick={enrollCourseHandler}
											disabled={hasEnrolled ? true : false}
										>
											{hasEnrolled ? 'Leave Course' : 'Enroll Course'}
										</button>
									</div>
									<div className={styles.preview_info}>
										<div className={styles.preview_detail}>
											<img src={Beginner} alt={Beginner} loading='lazy' />
											<p>Level: {level}</p>
										</div>
										<div className={styles.preview_detail}>
											<img src={Duration} alt='' loading='lazy' />
											<p>Duration: 5hr 42mins</p>
										</div>
										<div className={styles.preview_detail}>
											<img src={Vid} alt='' loading='lazy' />
											<p>Videos: {videos}</p>
										</div>
										<div className={styles.preview_detail}>
											<img src={Downloadable} alt='' loading='lazy' />
											<p>Downloadable Files: {downloadables?.length}</p>
										</div>
										<div className={styles.preview_detail}>
											<img src={LifetimeAccess} alt='' loading='lazy' />
											<p>{accessLimit}</p>
										</div>
										<div className={styles.preview_detail}>
											<img src={AccessAnywhere} alt='' loading='lazy' />
											<p>{devices}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* About Course */}
				<div className={styles.about_course}>
					<div className={styles.about_course_hd}>
						<h2>About the Course</h2>
					</div>

					<div className={styles.about_course_txt}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
							amet habitasse orci convallis sodales augue.
						</p>
						<br />
						<br />
						<p>
							Ac, pellentesque proin tincidunt lobortis sit velit velit dui
							eget. Massa, lectus orci auctor morbi. A nisl vitae, sagittis
							elementum placerat nullam id integer leo. Diam venenatis amet diam
							odio ultrices auctor.
						</p>
					</div>

					{/* Course Pic Preview */}
					<div className={styles.about_course_preview}>
						<img src={Img} alt='' loading='lazy' />
					</div>

					{/* Lists */}
					<div className={styles.about_course_lists}>
						<div className={styles.about_course_title}>
							<h3>What are you going to learn?</h3>
						</div>
						<ul>
							{LearningLists?.map((list) => (
								<Fragment key={list}>
									<li>{list}</li>
								</Fragment>
							))}
						</ul>
					</div>
					<div className={styles.about_course_txt}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
							massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum
							scelerisque egestas. Volutpat, adipiscing a elit platea amet et.
							At at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
							habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut
							morbi risus. Ornare aliquam phasellus consequat amet velit risus.
							Amet, diam cras morbi hendrerit vitae pretium in enim.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Course;
