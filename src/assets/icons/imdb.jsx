import React from 'react';

function Imdb(props) {
	const title = props.title || "imdb";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M58.8 1H5.2c-2.3.1-4.1 2-4.3 4.1v53.7C1.1 61 2.8 62.7 5 63H59c2.3-.1 4.1-2.1 4.1-4.4V5.4c-.2-2.3-2-4.3-4.3-4.4zm2.9 57.6c0 1.7-1.3 3-2.8 3.1H5c-1.6-.1-2.8-1.4-2.8-3V5.2c.1-1.6 1.4-2.8 3-3h53.5c1.7.1 3 1.4 3 3.1v53.3z"/>
		<path d="M8.4 22.3h4.9v19H8.4z"/>
		<path d="M22.6 31.3l-.7-4.9c-.1-1.5-.4-3-.6-4.1H15v19h4.2V28.8L21 41.3h3.1l1.7-12.8v12.8H30v-19h-6.5l-.9 9z"/>
		<path d="M42.1 23.8c-.4-.6-1.1-.8-2-1.1-.8-.1-2.3-.3-4.5-.3h-3.7v19h5.9c1.5 0 3.6.2 4.5-1.3.4-.6.5-1.4.6-2.2.1-.7.1-1.4.1-2.2v-6.6c0-1.8 0-3-.1-3.7-.1-.6-.4-1.1-.8-1.6zm-3.5 11.6c0 1.3-.3 2-.4 2.3-.1.3-.6.4-1.3.4V25.5c.6 0 .8 0 1.1.1.1.1.3.3.4.6.1.3.1.8.1 1.7v7.5h.1z"/>
		<path d="M55.3 28.3c-.2-.4-.5-.6-1-.8-.8-.3-1.8-.4-2.7-.2-.4.1-.8.2-1.2.4-.2.1-.4.2-.6.4-.1.1-.5.3-.5.4v-6.2h-4.8v19H49l.3-1.3c.4.4.8.8 1.3 1.1.4.3 1 .3 1.5.3s1.1-.1 1.6-.3c1.1-.5 1.8-1.6 1.9-2.8.1-1.7.1-3.4.1-5.2v-3.5c-.1-.5-.2-.9-.4-1.3zm-4.2 8.5c0 .8 0 1.5-.1 1.7-.1.3-.4.4-.8.4-.3 0-.4-.1-.6-.3-.1-.3-.1-.7-.1-1.5V32c0-.8 0-1.4.1-1.5s.3-.3.6-.3.7.1.8.4c.1.3.1.7.1 1.5v4.7z"/>
	</g>
</svg>
	);
};

export default Imdb;