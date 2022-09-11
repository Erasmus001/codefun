import React from 'react';

function Cut(props) {
	const title = props.title || "cut";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M47.1 43c-1.4 0-2.8.3-4 .9l-8.9-13L52.5 4c.5-.8.3-1.9-.5-2.4-.8-.6-1.9-.4-2.4.4L32 27.7 14.4 2c-.5-.8-1.6-1-2.4-.5-.8.5-1 1.6-.5 2.4l18.4 26.9-8.9 13c-1.2-.6-2.6-.9-4-.9-5.5.1-10 4.5-10 10s4.4 9.9 9.9 9.9 9.9-4.4 9.9-9.9c0-2.7-1.1-5.2-2.9-7l8.1-12 8.2 11.9c-1.8 1.8-2.9 4.3-2.9 7 0 5.4 4.4 9.9 9.9 9.9s9.9-4.4 9.9-9.9-4.6-9.8-10-9.8zM16.9 59.3c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4zm30.2 0c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.9 6.4-6.4 6.4z"/>
	</g>
</svg>
	);
};

export default Cut;