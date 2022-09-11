import React from 'react';

function Sun(props) {
	const title = props.title || "sun";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32 18.5c-7.5 0-13.5 6.1-13.5 13.5s6 13.5 13.5 13.5 13.5-6 13.5-13.5-6-13.5-13.5-13.5zM32 42c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"/>
		<path d="M32 10c1 0 1.8-.8 1.8-1.8V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v5.3c0 .9.7 1.7 1.7 1.7z"/>
		<path d="M32 54c-1 0-1.8.8-1.8 1.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.3c0-.9-.8-1.7-1.8-1.7z"/>
		<path d="M50.9 10.6l-3.3 3.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l3.3-3.3c.7-.7.7-1.8 0-2.5-.6-.7-1.7-.7-2.4 0z"/>
		<path d="M13.9 47.6l-3.3 3.3c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l3.3-3.3c.7-.7.7-1.8 0-2.5-.6-.7-1.7-.7-2.4 0z"/>
		<path d="M61 30.3h-5.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M8.3 30.3H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h5.3c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.8-1.7z"/>
		<path d="M50.1 47.6c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.3 3.3c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-3.2-3.3z"/>
		<path d="M13.1 10.6c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l3.3 3.3c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-3.2-3.3z"/>
	</g>
</svg>
	);
};

export default Sun;