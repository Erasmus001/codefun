import React from 'react';

function VolumeHigh(props) {
	const title = props.title || "volume high";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M44 27.1c-.7.7-.8 1.8-.1 2.5 1.2 1.3 1.2 3.5 0 4.9-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6 2.4-2.7 2.4-7 0-9.6-.7-.8-1.8-.9-2.5-.2z"/>
		<path d="M52.1 23.1c-.7-.7-1.8-.8-2.5-.1-.7.7-.8 1.8-.1 2.5 3.3 3.6 3.3 9.5 0 13.1-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6 4.6-5 4.6-13 0-17.9z"/>
		<path d="M57.8 18.9c-.7-.7-1.8-.8-2.5-.1-.7.7-.8 1.8-.1 2.5 5.4 5.9 5.4 15.5 0 21.4-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6 6.6-7.2 6.6-19 0-26.2z"/>
		<path d="M34.1 12.7c-1.4-.8-3.1-.7-4.5.1l-10.8 6.7c-.1.1-.3.1-.5.1H5.6c-2.4 0-4.4 2-4.4 4.4v15.8c0 2.4 2 4.4 4.4 4.4h12.8c.2 0 .3 0 .5.1L29.7 51c.7.4 1.5.7 2.3.7.7 0 1.5-.2 2.1-.6 1.4-.8 2.3-2.2 2.3-3.8V16.5c0-1.6-.9-3-2.3-3.8zm-1.2 34.8c0 .5-.3.7-.5.8-.1.1-.5.2-.9 0l-10.8-6.7c-.7-.4-1.5-.7-2.3-.7H5.6c-.5 0-.9-.4-.9-.9V24.1c0-.5.4-.9.9-.9h12.8c.8 0 1.6-.2 2.3-.7l10.8-6.7c.4-.3.8-.1.9 0 .1.1.5.3.5.8v30.9z"/>
	</g>
</svg>
	);
};

export default VolumeHigh;