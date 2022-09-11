import React from 'react';

function SlackLine(props) {
	const title = props.title || "slack line";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M20.2 13.6h4.6c1 0 1.8-.8 1.8-1.8V7.2c0-3.2-2.1-6.1-5.1-6.7-2.2-.5-4.5.1-6.2 1.7-1.6 1.6-2.3 4-1.8 6.3.7 3 3.5 5.1 6.7 5.1zm-2.4-8.9c.6-.6 1.3-.9 2.2-.9.2 0 .5 0 .7.1 1.4.3 2.3 1.7 2.3 3.3v2.9h-2.8c-1.6 0-3-1-3.3-2.4-.2-1.1.1-2.2.9-3z"/>
		<path d="M9.7 32.7h11.2c4.7 0 8.4-3.8 8.4-8.4 0-4.6-3.8-8.4-8.4-8.4H9.7c-4.7 0-8.4 3.8-8.4 8.4-.1 4.6 3.7 8.4 8.4 8.4zm0-13.3h11.2c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9H9.7c-2.7 0-4.9-2.2-4.9-4.9-.1-2.7 2.1-4.9 4.9-4.9z"/>
		<path d="M39.5 28.6c4.6 0 8.3-3.8 8.3-8.5V8.8c0-4.7-3.7-8.5-8.3-8.5s-8.3 3.8-8.3 8.5V20c0 4.7 3.7 8.6 8.3 8.6zM34.7 8.8c0-2.8 2.2-5 4.8-5s4.8 2.3 4.8 5V20c0 2.8-2.2 5-4.8 5s-4.8-2.3-4.8-5V8.8z"/>
		<path d="M53.6 30.7h-8.7c-4.6 0-8.3 3.7-8.3 8.2 0 4.5 3.7 8.2 8.3 8.2h8.7c4.6 0 8.3-3.7 8.3-8.2 0-4.5-3.8-8.2-8.3-8.2zm0 13h-8.7c-2.6 0-4.8-2.1-4.8-4.7s2.2-4.7 4.8-4.7h8.7c2.6 0 4.8 2.1 4.8 4.7s-2.2 4.7-4.8 4.7z"/>
		<path d="M26.1 37c-4.4 0-7.9 3.7-7.9 8.2V54c0 4.5 3.6 8.2 7.9 8.2S34 58.5 34 54v-8.9c.1-4.5-3.5-8.1-7.9-8.1zm4.5 17c0 2.6-2 4.7-4.4 4.7s-4.4-2.1-4.4-4.7v-8.9c0-2.6 2-4.7 4.4-4.7s4.4 2.1 4.4 4.7V54z"/>
		<path d="M60.9 16.2c-1.6-1.6-3.8-2.2-5.9-1.7-2.8.7-4.9 3.4-4.9 6.5v4.4c0 1 .8 1.7 1.8 1.7h4.3c3.1 0 5.8-2.1 6.4-4.9.5-2.2-.1-4.4-1.7-6zm-1.7 5.3c-.3 1.3-1.6 2.2-3 2.2h-2.6v-2.6c0-1.5.9-2.8 2.2-3.1 1-.2 2 0 2.7.8.7.6.9 1.6.7 2.7z"/>
		<path d="M12.7 36.1H8.4c-3.1 0-5.8 2.1-6.4 4.9-.5 2.2.1 4.5 1.7 6 1.2 1.2 2.8 1.8 4.5 1.8.5 0 1-.1 1.5-.2 2.8-.7 4.9-3.4 4.9-6.5v-4.4c-.2-.8-.9-1.6-1.9-1.6zm-1.8 6.1c0 1.5-.9 2.8-2.2 3.1-1 .2-2 0-2.7-.8-.7-.7-1-1.7-.8-2.8.3-1.3 1.6-2.2 3-2.2h2.6v2.7z"/>
		<path d="M43.9 50.9h-4.3c-1 0-1.8.8-1.8 1.8v4.4c0 3.1 2.1 5.8 4.9 6.5.5.1 1 .2 1.5.2 1.7 0 3.3-.6 4.5-1.8 1.6-1.6 2.2-3.8 1.7-6-.7-3-3.4-5.1-6.5-5.1zm2.2 8.5c-.7.7-1.7 1-2.7.8-1.3-.3-2.2-1.6-2.2-3.1v-2.6h2.6c1.5 0 2.7.9 3 2.2.3 1 0 2-.7 2.7z"/>
	</g>
</svg>
	);
};

export default SlackLine;