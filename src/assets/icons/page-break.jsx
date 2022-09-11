import React from 'react';

function PageBreak(props) {
	const title = props.title || "page break";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M47.5 1.3h-31c-2.6 0-4.8 2.1-4.8 4.8v15.1c0 2.6 2.1 4.8 4.8 4.8h30.9c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.1-4.7-4.7-4.7zm1.2 19.8c0 .7-.6 1.3-1.3 1.3H16.5c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h30.9c.7 0 1.3.6 1.3 1.3v15.1z"/>
		<path d="M47.5 38.2h-31c-2.6 0-4.8 2.1-4.8 4.8v15c0 2.6 2.1 4.8 4.8 4.8h30.9c2.6 0 4.8-2.1 4.8-4.8V42.9c0-2.6-2.1-4.7-4.7-4.7zM48.7 58c0 .7-.6 1.3-1.3 1.3H16.5c-.7 0-1.3-.6-1.3-1.3V42.9c0-.7.6-1.3 1.3-1.3h30.9c.7 0 1.3.6 1.3 1.3V58z"/>
		<path d="M17.2 33.8h4.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1z"/>
		<path d="M30.4 33.8h4.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1z"/>
		<path d="M43.6 33.8h4.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1z"/>
	</g>
</svg>
	);
};

export default PageBreak;