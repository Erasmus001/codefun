import React from 'react';
import ComprehensiveProject from '../../Components/ComprensiveProject/ComprehensiveProject';
import Masterclass from '../../Components/Masterclass/Masterclass';
import Whyus from '../../Components/Whyus/Whyus';
import { Header, Banner } from '../../Exports/exports';

const Homepage = () => {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Banner */}
			<Banner />
			{/* Welcome to Codefun Pro */}
			<Whyus />
			{/* Comprehensive Project */}
			<ComprehensiveProject />

			{/* MasterClass Experience */}
			<Masterclass />

			{/* Our Testimonials */}
			{/* <Testimonials /> */}
			{/* Meet Your Coach */}
			{/* <Coach /> */}
			{/* FAQ */}
			{/* <Faq /> */}
		</>
	);
};

export default Homepage;
