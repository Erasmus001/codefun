import React from 'react';

function Compass(props) {
	const title = props.title || "compass";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M56.5 60.2L45.2 37c3.3-2.4 6-5.8 7.5-9.7.4-.9-.1-1.9-1-2.3-.9-.4-1.9.1-2.3 1-1.2 3.1-3.3 5.8-5.8 7.8l-4.9-10c1.8-1.8 3-4.2 3-7 0-4.8-3.5-8.7-8.1-9.6V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v4.2c-4.6.8-8 4.8-8 9.6 0 2.7 1.2 5.2 3 7l-4.9 10c-2.6-2-4.6-4.7-5.8-7.8-.4-.9-1.4-1.3-2.3-1-.9.4-1.3 1.4-1 2.3 1.5 3.9 4.2 7.3 7.5 9.7L7.5 60.2c-.4.9-.1 1.9.8 2.3.2.1.5.2.8.2.6 0 1.3-.4 1.6-1l11.1-22.9c3.1 1.6 6.6 2.5 10.2 2.5 3.6 0 7.1-.9 10.2-2.5l11.1 22.9c.3.6.9 1 1.6 1 .3 0 .5-.1.8-.2.9-.3 1.3-1.4.8-2.3zM32 10.5c3.5 0 6.3 2.8 6.3 6.2S35.5 23 32 23s-6.3-2.8-6.3-6.2 2.8-6.3 6.3-6.3zm0 27.3c-3.1 0-6.1-.8-8.7-2.2l4.9-10c1.2.5 2.5.8 3.9.8s2.7-.3 3.8-.8l4.9 10c-2.7 1.5-5.7 2.2-8.8 2.2z"/>
	</g>
</svg>
	);
};

export default Compass;