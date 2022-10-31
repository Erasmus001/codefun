import React from 'react';
import styles from './Masterclass.module.css';

import MasterclassDiagram from '../../assets/png&jpg/jsm-diagram.webp';

const Masterclass = () => {
	return (
		<div className={styles.masterclass}>
			<div className={styles.masterclass_intro}>
				<h3>Codefun is proud to introduce</h3>
			</div>
			<div className={styles.masterclass_details}>
				<h3>The Codefun Pro Masterclass Experience</h3>
				<p>
					Showcase your expertise to employers with exciting projects where
					you'll build real-world applications and have your code reviewed by
					industry experts.
				</p>
				<p>
					Learn how to position yourself for a rewarding career with weekly live
					Q&As, mock interviews, LinkedIn and resume/CV guidance, and more.
				</p>
			</div>

			{/* Masterclass Diagram */}
			<div className={styles.masterclass_diagram}>
				<img src={MasterclassDiagram} alt='' loading='lazy' />
			</div>
		</div>
	);
};

export default Masterclass;
