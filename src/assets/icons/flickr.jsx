import React from 'react';

function Flickr(props) {
	const title = props.title || "flickr";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M14.4 45.4c7.4 0 13.4-6 13.4-13.4s-6-13.4-13.4-13.4S1 24.6 1 32s6 13.4 13.4 13.4z" fill={props.fill || "#0000"}/>
		<path d="M49.6 45.4C57 45.4 63 39.4 63 32s-6-13.4-13.4-13.4-13.4 6-13.4 13.4 6 13.4 13.4 13.4z" fill={props.fill || "#0000"}/>
	</g>
</svg>
	);
};

export default Flickr;