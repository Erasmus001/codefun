import React from 'react';

function Phone(props) {
	const title = props.title || "phone";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M49.1 61.3c-8.2 0-20-5.9-30.8-16.2-14.7-14-21-29.6-14.6-36.4.3-.3.6-.5 1-.7l8.4-4.7c1.9-1 4.3-.5 5.5 1.2l6.1 8.7c.6.9.9 2 .7 3-.2 1.1-.8 2-1.7 2.6L20 21.2c-.2.1-.2.2-.2.3 0 .1 0 .2.1.3 2.7 4 10.4 14.2 22.6 21.5.3.2.8.1 1-.1l2.6-3.5c1.3-1.8 3.8-2.2 5.7-1l9.1 5.8c1.9 1.2 2.5 3.6 1.3 5.5l-5 8c-.2.4-.5.7-.8.9-1.9 1.7-4.4 2.4-7.3 2.4zM15.2 6.2c-.1 0-.2 0-.4.1L6.4 11c-.1.1-.1.1-.2.1-4.2 4.5.6 18.2 14.6 31.5s28.5 17.9 33.3 13.8l.1-.1 5-8c.1-.2.1-.5-.2-.7l-9.1-5.8c-.3-.2-.8-.1-1 .1l-2.6 3.5c-1.3 1.7-3.7 2.2-5.6 1.1C27.8 38.8 19.8 28.1 17 23.8c-.6-.9-.8-1.9-.6-3 .2-1 .8-2 1.7-2.5l3.7-2.5c.2-.1.2-.2.2-.3 0-.1 0-.2-.1-.4l-6.1-8.7c-.1-.1-.4-.2-.6-.2zm40.5 50.9z"/>
	</g>
</svg>
	);
};

export default Phone;