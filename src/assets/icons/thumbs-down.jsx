import React from 'react';

function ThumbsDown(props) {
	const title = props.title || "thumbs down";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M53.9 7.7c-4.5-3-11.1-4.7-18-4.7-1.2 0-2.3 0-3.5.1-8.2.7-13.9 2.1-16.7 3.9l-.6.5H5.7c-2.4 0-4.4 2-4.4 4.4v23.7c0 2.4 2 4.4 4.4 4.4H18c.2 0 .4 0 .7.3 2.2 2.2 7.9 8.4 13.8 17.7 1.3 2 3.3 3.1 5.6 3.1h.5c2.5-.2 4.6-1.5 5.6-3.7 1.5-2.8 0-11.8-.5-14.7h.7c5.3.1 14.2.4 16.7-5.3 3.8-8.7 1.3-24.1-7.2-29.7zM4.8 35.6V11.9c0-.5.4-.9.9-.9h6.1v25.5H5.6c-.5 0-.8-.4-.8-.9zm53 .3c-1.6 3.5-9.3 3.3-13.5 3.2h-2.9c-.5 0-1 .2-1.4.7s-.5 1-.3 1.5l.3 1.5c1.3 7.3 1.3 12.1.9 13-.5 1-1.5 1.7-2.8 1.8-1.1 0-2.1-.5-2.8-1.6-6.1-9.5-12-15.9-14.2-18.2-.8-.9-2-1.3-3.2-1.3h-2.6V11h.3c.4 0 .7-.1 1-.3l1-.8c1-.7 4.5-2.3 15-3.3 1.1-.1 2-.1 3.2-.1C42.1 6.5 48 8 52 10.6c6.8 4.5 9 18.1 5.8 25.3z"/>
	</g>
</svg>
	);
};

export default ThumbsDown;