/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from '../Auth.module.css';
import logo from '../../../assets/png&jpg/logo.png';
import Play from '../../../assets/icons/play';
import Envelope from '../../../assets/icons/envelope';
import User from '../../../assets/icons/user';
import LockAlt from '../../../assets/icons/lock-alt';
import { useAuth } from '../../../Context/AppContext';

const Signup = () => {
	const [isloading, setIsloading] = React.useState(false);
	const [ischecked, setIsChecked] = React.useState(false);
	const [username, setUsername] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const { registerUser, setCurrentUser } = useAuth();
	const navigate = useNavigate();

	const Register = (event) => {
		event.preventDefault();

		if (!username) {
			alert('Please enter your username');
			return;
		} else if (!email) {
			alert('Please enter your email');
		} else if (!password) {
			alert('Please enter a strong password');
		} else if (!ischecked) {
			alert('Please agree to our Terms of Use');
		} else {
			setIsloading(true);
			setTimeout(() => {
				// console.log(username, email, password);
				registerUser(email, password, username);
				setIsloading(false);
				setCurrentUser(username);

				navigate('/', {
					replace: true,
				});

				setEmail('');
				setUsername('');
				setPassword('');
				setIsChecked(false);
			}, 5000);
		}
	};

	return (
		<div className={styles.auth_page}>
			<div className={styles.auth_banner}>
				<div className={styles.brand}>
					<Link to='/'>
						<img src={logo} alt={logo} loading='lazy' />
						<h3>Codefun</h3>
					</Link>
				</div>

				<div className={styles.banner_txt}>
					<div>
						<h1>Learn to code.</h1>
						<h1>Interactively.</h1>
						<h1>For free.</h1>
					</div>

					<div className={styles.demo_vid}>
						<button>
							<div className={styles.playIcon}>
								<Play fill='white' height='16' width='16' />
							</div>
							<span>Watch Demo</span>
						</button>
					</div>
				</div>

				<div className={styles.bottom_nav}>
					<nav className={styles.nav}>
						<NavLink to='/courses'>Courses</NavLink>
						<NavLink to='/projects'>Projects</NavLink>
						<NavLink to='/mentorship'>Mentorship</NavLink>
						<NavLink to='/contact'>Contact</NavLink>
						<NavLink to='/about'>About</NavLink>
					</nav>
				</div>
			</div>

			{/* AUTH FORM */}
			<div className={styles.auth_form}>
				<div className={styles.auth_hd}>
					<div className={styles.h3s}>
						<h3>Join over 1,000 thousand</h3>
						<h3>learners from around the globe.</h3>
					</div>
					<p>
						Master the languages of the web: HTML, CSS and JavaScript. This path
						will prepare you to build basic websites and then build interactive
						web applications.
					</p>
				</div>

				{/* Form */}
				<form className={styles.form} autoComplete='on' onSubmit={Register}>
					<div className={styles.form_input}>
						<User fill='black' height='20' width='20' title='user' />
						<input
							type='text'
							name='username'
							id='username'
							placeholder='Username'
							// required
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className={styles.form_input}>
						<Envelope fill='black' height='20' width='20' title='email' />
						<input
							type='email'
							name='email'
							id='email'
							placeholder='example@example.com'
							// required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.form_input}>
						<LockAlt fill='black' height='20' width='20' title='password' />
						<input
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							// required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<div className={styles.terms_and_conds}>
						<input
							type='checkbox'
							name='agree'
							id='agree'
							value={ischecked}
							checked={ischecked ? true : false}
							onChange={(e) => setIsChecked(e.target.value)}
						/>
						<label htmlFor='agree'>
							<p>
								Agree to all terms and conditions in
								<Link to='/terms'>Terms of Use</Link>
							</p>
						</label>
					</div>

					<div className={styles.submit}>
						<button
							type='submit'
							className={`${styles.button}  ${
								isloading && styles.submit__loading
							}`}
							disabled={(isloading || !username || !email || !password) && true}
						>
							<span className={styles.button_txt}>Join us</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
