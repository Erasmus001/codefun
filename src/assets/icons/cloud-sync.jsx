import React from 'react';

function CloudSync(props) {
	const title = props.title || "cloud sync";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M40.6 46.2c-.8-.5-1.9-.3-2.4.5-1.2 1.7-3.1 2.8-5.3 2.8-1.4 0-2.7-.4-3.7-1.2H31c1 0 1.7-.8 1.7-1.8s-.8-1.8-1.7-1.8h-6.3c-1.2 0-2.2 1-2.2 2.2V52c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.9c1.8 1.8 4.3 2.9 7 2.9 3.3 0 6.4-1.6 8.2-4.3.3-.8.1-1.9-.7-2.5z"/>
		<path d="M42.4 31.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V33c-2-1.6-4.6-3-6.9-3-3.7 0-7.1 2.1-8.8 5.4-.4.9-.1 1.9.7 2.4.9.4 1.9.1 2.4-.7 1.1-2.1 3.3-3.5 5.7-3.5 1.6 0 4.1 1.6 5.5 3H35c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5c1.2 0 2.2-1 2.2-2.2v-6.5z"/>
		<path d="M57.8 23.5c-2.7-3-6.6-5-10.6-5.7-2.2-3.6-5.5-6.3-9.3-7.6-1.7-.7-3.7-1-5.8-1-9.7 0-17.5 7.7-17.9 17.3-7.3.6-12.9 6.7-12.9 14.1 0 7.8 6.3 14.2 14.1 14.2 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-6 0-10.6-4.7-10.6-10.7 0-6 4.7-10.7 10.6-10.7h.5c1 0 1.8-.8 1.8-1.8v-1.1c0-7.9 6.5-14.4 14.4-14.4 1.7 0 3.2.3 4.6.8 3.3 1.1 6.1 3.6 7.9 6.8.3.5.8.8 1.3.9 3.6.4 7 2.1 9.3 4.7 2.6 2.8 4 6.5 4 10.3 0 8.3-6.8 15.1-15.1 15.1-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c10.3 0 18.6-8.3 18.6-18.6.1-4.6-1.7-9.1-4.9-12.6z"/>
	</g>
</svg>
	);
};

export default CloudSync;