import React from 'react';

function Bulb(props) {
	const title = props.title || "bulb";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M55.4 24.6C55.4 11.7 44.9 1.3 32 1.3 19.1 1.3 8.6 11.7 8.6 24.6c0 9.3 5.4 17.3 13.2 21v12.2c0 2.7 2.2 4.8 4.8 4.8h11.1c2.7 0 4.8-2.2 4.8-4.8V45.4c7.7-3.9 12.9-11.7 12.9-20.8zM39.1 47.2v10.7c0 .7-.6 1.3-1.3 1.3H26.7c-.7 0-1.3-.6-1.3-1.3V47.2h.6c1.9.5 3.9.8 6 .8s4.1-.3 6-.8h1.1zm-5.4-2.8V31.8l6.1-4.7c.8-.6.9-1.7.3-2.5-.6-.8-1.7-.9-2.5-.3l-4 3v-6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.2l-4.7-3.3c-.8-.6-1.9-.4-2.4.4-.6.8-.4 1.9.4 2.4l6.8 4.8v12.4c-10-.7-18-9.2-18-19.6 0-11 8.9-19.9 19.9-19.9s19.9 8.9 19.9 19.9c0 10.4-8 18.9-18.2 19.8z"/>
	</g>
</svg>
	);
};

export default Bulb;