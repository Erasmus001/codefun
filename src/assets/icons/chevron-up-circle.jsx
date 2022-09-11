import React from 'react';

function ChevronUpCircle(props) {
	const title = props.title || "chevron up circle";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M48.8 35.8L33.4 25.4c-.8-.6-2.1-.6-2.9 0L15.2 35.8c-.8.5-1 1.6-.5 2.4.5.8 1.6 1 2.4.5L32 28.6l14.9 10.1c.3.2.6.3 1 .3.6 0 1.1-.3 1.5-.8.4-.7.2-1.8-.6-2.4z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default ChevronUpCircle;