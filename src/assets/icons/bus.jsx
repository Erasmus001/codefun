import React from 'react';

function Bus(props) {
	const title = props.title || "bus";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M21.4 34c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6s5.6-2.5 5.6-5.6c0-3.1-2.5-5.6-5.6-5.6zm0 7.8c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1s2.1 1 2.1 2.1-.9 2.1-2.1 2.1z"/>
		<path d="M42.6 34c-3.1 0-5.6 2.5-5.6 5.6 0 3.1 2.5 5.6 5.6 5.6 3.1 0 5.6-2.5 5.6-5.6 0-3.1-2.5-5.6-5.6-5.6zm0 7.8c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1 1.2 0 2.1 1 2.1 2.1s-.9 2.1-2.1 2.1z"/>
		<path d="M57.2 3.9h-2.7c-.6-1.5-2.2-2.6-4-2.6H13.4c-1.8 0-3.3 1.1-4 2.6H6.8c-2 0-3.7 1.5-3.8 3.4v4.6c0 1.9 1.7 3.5 3.8 3.5h2.4v31.4c0 3 2.3 5.4 5.3 5.5V57c0 3.2 2.6 5.8 5.8 5.8h2.5c3.2 0 5.8-2.6 5.8-5.8v-4.8h7V57c0 3.2 2.6 5.8 5.8 5.8h2.5c3.2 0 5.8-2.6 5.8-5.8v-4.8c2.9-.1 5.3-2.6 5.3-5.5V15.3h2.4c2.1 0 3.8-1.6 3.8-3.5V7.4c-.1-2-1.9-3.5-4-3.5zm-43.8.9h37.1c.4 0 .8.4.8.8v6.3H12.7V5.5c0-.4.3-.7.7-.7zm37.9 22.8H33.8V15.3h17.6v12.3zm-38.6 0V15.3h17.6v12.3H12.7zM6.8 11.8c-.2 0-.3-.1-.3-.1V7.5s.1-.1.3-.1h2.4v4.4H6.8zM25 57c0 1.2-1 2.3-2.3 2.3h-2.5c-1.2 0-2.3-1-2.3-2.3v-4.8h7V57zm21.1 0c0 1.2-1 2.3-2.3 2.3h-2.5c-1.2 0-2.3-1-2.3-2.3v-4.8h7V57zm3.2-8.3H14.7c-1.1 0-2.1-.9-2.1-2.1V31.1h38.7v15.5c0 1.2-.9 2.1-2 2.1zm8.3-37c-.1 0-.2.1-.3.1h-2.4V7.4h2.4c.2 0 .3.1.3.1v4.2z"/>
	</g>
</svg>
	);
};

export default Bus;