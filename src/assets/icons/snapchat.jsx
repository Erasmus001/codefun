import React from 'react';

function Snapchat(props) {
	const title = props.title || "snapchat";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M32.5 4.2c2.4 0 10.4.7 14.2 9.1 1.3 2.8.8 7.9.7 11.9-.1.7-.1 1.3-.1 2v.3l.1.1c.1.1.7.8 2.1.8 1-.1 2-.3 3.2-.8.1-.1.4-.1.7-.1s.6.1.8.1c.6.1 1.1.6 1.1 1 0 .1-.1 1-2.4 1.8-.1.1-.4.1-.8.3-1.4.4-3.5 1.1-4.2 2.8-.4 1-.3 2.1.3 3.2.3.6 4.3 9.7 13.3 11.1 0 .1 0 .1-.1.1-.1.4-1.1 1.7-7.2 2.5-1 .1-1.1 1.3-1.4 2.5-.1.4-.1.8-.3 1.4l-.1.1h-.1c-.3 0-.7-.1-1.1-.1-.8-.1-2-.4-3.5-.4-.8 0-1.7.1-2.7.1-1.8.3-3.4 1.4-4.9 2.5-2.1 1.5-4.3 3.1-7.7 3.1H31.5c-3.4 0-5.6-1.5-7.7-3.1-1.7-1.1-3.1-2.2-4.9-2.5h-2.8c-1.5 0-2.7.3-3.5.4-.4.1-.8.1-1.1.1-.1 0-.1 0-.3-.1-.1-.4-.3-.8-.3-1.4-.3-1.3-.4-2.4-1.4-2.5-6-.8-7-2.2-7.2-2.5 0-.1-.1-.1-.1-.1 9.1-1.5 13.2-10.5 13.3-11.1.7-1.3.7-2.4.3-3.2-.7-1.7-2.9-2.4-4.2-2.8-.3-.1-.6-.1-.8-.3-1.8-.7-2.4-1.4-2.4-2 .1-.4 1-1.1 1.7-1.1.1 0 .3 0 .4.1 1.3.6 2.4.8 3.4.8 1.5 0 2.4-.7 2.4-.8l.1-.1v-.3c0-.6-.1-1.3-.1-2-.3-4-.6-9.1.7-11.9 3.8-8.6 11.6-9.1 14.2-9.1.3 0 1.3 0 1.3.1m0-1.2h-1.1c-2.5 0-11.2.7-15.3 9.8-1.4 3.1-1.1 8.3-.8 12.5 0 .4.1 1.1.1 1.5-.1.1-.6.3-1.1.3-.8 0-1.7-.3-2.9-.8-.3-.1-.6-.1-1-.1-1.3 0-2.8.8-2.9 2.1-.1.8.3 2.2 3.1 3.2.3.1.6.1.8.3 1.1.4 2.9.8 3.5 2.1.3.6.1 1.4-.3 2.4v.1c-.1.4-3.9 9-12.3 10.4-.7.1-1.1.7-1.1 1.4 0 .1.1.4.1.6.7 1.5 3.2 2.5 8.1 3.2.1.1.3 1 .4 1.4.1.4.1 1 .3 1.4.1.4.4 1.1 1.5 1.1.4 0 .8-.1 1.4-.1.8-.1 2-.4 3.2-.4.8 0 1.5.1 2.4.1 1.5.3 2.9 1.1 4.5 2.4 2.2 1.5 4.8 3.2 8.6 3.2h.7c3.8 0 6.3-1.7 8.6-3.2 1.5-1.1 2.9-2 4.5-2.4.8-.1 1.7-.1 2.4-.1 1.3 0 2.4.1 3.2.3.6.1 1.1.1 1.4.1h.2c.7 0 1.3-.4 1.4-1.1.1-.4.3-1 .3-1.4.1-.4.3-1.3.4-1.4 4.8-.8 7.6-1.8 8.1-3.2.1-.1.1-.4.1-.6.1-.7-.4-1.3-1.1-1.4-8.4-1.4-12.2-10.1-12.3-10.4-.4-.8-.4-1.7-.3-2.4.4-1.1 2.4-1.7 3.5-2.1.3-.1.7-.1.8-.3 2.1-.8 3.1-1.8 3.1-2.9 0-.8-.7-1.7-2-2.1-.4-.1-.8-.3-1.3-.3-.3 0-.8.1-1.1.3-1 .4-2 .7-2.7.8-.4 0-.8-.1-1.1-.3 0-.4.1-.8.1-1.3v-.1c.3-4.2.6-9.4-.8-12.5C43.7 3.7 35 3 32.5 3z"/>
	</g>
</svg>
	);
};

export default Snapchat;