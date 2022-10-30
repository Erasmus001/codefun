import React from 'react';
import styles from './ComprehensiveProject.module.css';

import ProjectImg from '../../assets/png&jpg/pricing-starup-template2.png';

const ComprehensiveProject = () => {
	return (
		<div className={styles.comprehensiveProject}>
			<div className={styles.comprehensiveProject_wrapper}>
				<h3>
					Comprehensive Project-Based Courses to Help You Become a JavaScript
					Master
				</h3>
				<p>
					Want to master HTML or build amazing Web Application with ReactJS?
					Join other professional developers inside<span> Codefun Pro </span>
					where you'll build a Netflix clone streaming app or an Amazon Clone
					where you'll develop an Ecommerce platform.
				</p>
			</div>

			{/* Comprehensive Projects */}
			<div className={styles.projects_outline}>
				<div className={styles.project_card}>
					<div className={styles.project_img}>
						<img src={ProjectImg} alt='' loading='lazy' />
					</div>
					<div className={styles.project_details}>
						<h2>Build a movie streaming platform using ReactJS</h2>
						<p>
							Build an interactive movie streaming application to showcase your
							development prowess.
						</p>
					</div>
				</div>
				<div className={styles.project_card}>
					<div className={styles.project_img}>
						<img src={ProjectImg} alt='' loading='lazy' />
					</div>
					<div className={styles.project_details}>
						<h2>Build a movie streaming platform using ReactJS</h2>
						<p>
							Build an interactive movie streaming application to showcase your
							development prowess.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComprehensiveProject;
