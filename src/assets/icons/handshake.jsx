import React from 'react';

function Handshake(props) {
	const title = props.title || "handshake";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M61 35.6h-2.3c-.9 0-1.7-1-1.7-2.2V18.2c0-1.3.8-2.3 1.8-2.3H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-2.3c-1.9 0-3.6 1.2-4.6 2.9H40.8l-1.3-1.1c-5.3-4.6-13.2-5.1-18.7-1.1-2.4 1.8-4.1 3.9-4.9 5 0 .1-.1.1-.1.1h-2.3v-.1c0-3.2-2.3-5.7-5.2-5.7H3c-1 0-1.8.8-1.8 1.8S2 15.9 3 15.9h5.2c.9 0 1.7 1 1.7 2.2v15.1c0 1.3-.8 2.3-1.8 2.3H3c-1 0-1.8.8-1.8 1.8S2 39.1 3 39.1h5.2c1.9 0 3.6-1.2 4.6-2.9h.8c.9 0 1.7.3 2.5.7-.1.5-.1 1.1.3 1.5l2.3 3.1c.2.3.6.5.9.6l3.2.9 1.4 3c.2.5.6.8 1.1.9l3.3.9 2.1 3.4c.2.4.6.6 1 .8l5.6 1.6c.2 0 .3.1.5.1.6 0 1.1-.3 1.5-.8l11.2-16.6c.1 0 .1-.1.3-.1h3.5c.9 1.7 2.6 2.9 4.5 2.9H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-42.7-1.4c-1.4-1-3-1.5-4.7-1.5h-.1v-11h2.3c1.2 0 2.3-.6 3-1.5.7-.9 2.1-2.7 4.1-4.2 4.2-3.1 10.2-2.7 14.4.9l3.4 3c.6.5 1 1.2 1 1.7 0 .4-.1.7-.4 1l-1.7 1.8c-1 1.1-2.6 1.2-3.8.3l-.4-.3c-2.5-1.9-5.9-1.6-8.1.6l-9 9.2zm29.6-.4c-.1.1-.2.2-.2.3L37 49.9l-3.7-1-2.1-3.4c-.2-.4-.6-.6-1-.8l-3.2-.9-1.4-3c-.2-.5-.6-.8-1.1-.9l-3.4-.9-1.1-1.5 9.8-10.1c1-.9 2.4-1 3.5-.2l.4.3c2.6 1.9 6.2 1.6 8.4-.7l1.7-1.8c.9-1 1.4-2.3 1.3-3.6 0-.9-.3-1.7-.8-2.5h9.1v13.9h-2.8c-1-.1-2 .3-2.7 1z"/>
	</g>
</svg>
	);
};

export default Handshake;