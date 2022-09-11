import React from 'react';

function Image(props) {
	const title = props.title || "image";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M39.8 31.1c4.6 0 8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3-8.3 3.7-8.3 8.3 3.8 8.3 8.3 8.3zm0-13c2.6 0 4.8 2.1 4.8 4.8s-2.1 4.8-4.8 4.8-4.8-2.1-4.8-4.8 2.2-4.8 4.8-4.8z"/>
		<path d="M53.5 1.3h-43C7.3 1.3 4.7 3.8 4.7 7v50c0 3.2 2.6 5.8 5.8 5.8h43.1c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zm-43 3.5h43.1c1.2 0 2.3 1 2.3 2.3v27.4c-1 .6-2.1 1.4-3 2-1.4 1-2.8 2.2-4.2 3.4-3.7 3.3-7.2 6.4-11.9 4.6-.9-.3-1.8-1.1-2.7-1.9l-.4-.4c-2.3-1.9-5-4-8.2-5-5.4-1.7-10.3 1.4-14.6 4.1-.9.6-1.8 1.1-2.6 1.6V7c-.1-1.2.9-2.2 2.2-2.2zm43 54.5h-43c-1.2 0-2.3-1-2.3-2.3V47c.4-.1.7-.3.9-.5 1.2-.7 2.4-1.4 3.6-2.2 3.8-2.4 7.8-5 11.7-3.7 2.5.7 4.8 2.6 7 4.3l.3.3c1.1.9 2.3 2 3.8 2.5 1.4.5 2.7.7 3.9.7 4.7 0 8.4-3.3 11.5-6 1.3-1.2 2.6-2.2 3.8-3.1.3-.2.6-.4 1-.7V57c.1 1.2-.9 2.3-2.2 2.3z"/>
		<path className="st0" d="M15.7 15.7h32.6v32.6H15.7z" fill="none" stroke="#000000" strokeWidth="3.5"/>
	</g>
</svg>
	);
};

export default Image;