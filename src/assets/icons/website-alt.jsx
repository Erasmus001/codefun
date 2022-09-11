import React from 'react';

function WebsiteAlt(props) {
	const title = props.title || "website alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M19.3 27.9c-.8-.5-1.9-.3-2.4.5l-2.4 3.5-2-3c-.4-.6-1.1-.9-1.8-.9s-1.4.3-1.8.9l-2 3-2.4-3.5c-.5-.8-1.6-1-2.4-.5s-1 1.6-.5 2.4L5 35.5c.4.6 1.1.9 1.8.9s1.4-.3 1.8-.9l2-3 2 3c.4.6 1.1.9 1.8.9s1.4-.3 1.8-.9l3.5-5.2c.6-.8.4-1.9-.4-2.4z"/>
		<path d="M40.6 27.9c-.8-.5-1.9-.3-2.4.5l-2.4 3.5-2-3c-.4-.6-1.1-.9-1.8-.9s-1.4.3-1.8.9l-2 3-2.4-3.5c-.5-.8-1.6-1-2.4-.5s-1 1.6-.5 2.4l3.5 5.2c.4.6 1.1.9 1.8.9s1.4-.3 1.8-.9l2-3 2 3c.4.6 1.1.9 1.8.9s1.4-.3 1.8-.9l3.5-5.2c.6-.8.3-1.9-.5-2.4z"/>
		<path d="M62 27.9c-.8-.5-1.9-.3-2.4.5l-2.4 3.5-2-3c-.4-.6-1.1-.9-1.8-.9s-1.4.3-1.8.9l-2 3-2.4-3.5c-.5-.8-1.6-1-2.4-.5-.8.5-1 1.6-.5 2.4l3.5 5.2c.4.6 1.1.9 1.8.9s1.4-.3 1.8-.9l2-3 2 3c.4.6 1.1.9 1.8.9s1.4-.3 1.8-.9l3.5-5.2c.5-.8.3-1.9-.5-2.4z"/>
	</g>
</svg>
	);
};

export default WebsiteAlt;