import React from 'react';

function WorldAlt(props) {
	const title = props.title || "world alt";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M51.3 19c-1.4-3.7-4.1-6.7-7.7-8.4-3.3-1.6-6.9-1.9-10.3-.9l-2.2-6.1c-.3-.9-1-1.7-1.9-2-.9-.4-1.8-.4-2.7 0C14.7 6.9 8.9 20.8 13.3 33c3.2 8.8 10.9 14.8 19.6 16.2v10h-6.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h15.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6v-9.7h.5c2.2 0 4.5-.3 6.7-.9.9-.3 1.6-.9 2.1-1.7.4-.9.5-1.9.2-2.8l-2.4-6.5c7-3.1 10.5-11.3 7.8-18.6zM16.6 31.9C12.8 21.3 17.7 9.4 27.8 4.8l2.3 6.2c-2.8 1.5-5 3.8-6.4 6.8-1.7 3.6-1.9 7.7-.5 11.4s4.1 6.7 7.7 8.4c2 .9 4.2 1.4 6.3 1.4 1 0 1.9-.1 2.9-.3l2.5 6.6c-10.8 3-22.2-2.9-26-13.4zm24.6 2.9c-2.9 1-6 .9-8.7-.4-2.8-1.3-4.9-3.6-5.9-6.5s-.9-6 .4-8.7 3.6-4.9 6.5-5.9c1.3-.5 2.6-.7 3.9-.7 1.6 0 3.3.4 4.8 1.1 2.8 1.3 4.9 3.6 5.9 6.5 2.1 5.9-1 12.5-6.9 14.6z"/>
	</g>
</svg>
	);
};

export default WorldAlt;