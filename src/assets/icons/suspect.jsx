import React from 'react';

function Suspect(props) {
	const title = props.title || "suspect";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M45.2 43.4H18.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h26.4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M28.5 21.5c0-1-.8-1.8-1.8-1.8H16.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.5c1-.1 1.8-.9 1.8-1.8z"/>
		<path d="M47.8 19.7H37.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Suspect;