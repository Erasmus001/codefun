import React from 'react';

function AmazonPay(props) {
	const title = props.title || "amazon pay";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M1 39.5c0-.1.1-.3.3-.3.2-.1.5 0 .7.1 1.1.6 2.1 1.1 3.2 1.7 4.1 2 8.5 3.5 12.9 4.7 2.1.4 4.2.8 6.4 1.1 3.2.4 6.4.6 9.6.4 1.7 0 3.5-.1 5.4-.4 5.6-.7 11.3-2.1 16.5-4.4.3-.1.6-.1 1-.1.7.1.8.8.4 1.4-.3.3-.6.4-1 .7-3.1 2.1-6.5 3.7-10 4.8-2.5.7-5.1 1.4-7.6 1.7-4.7.5-9.6.6-14.3-.1-2.8-.4-5.5-1.1-8.2-2.1-1.6-.6-3.2-1.3-4.7-2-1.5-.8-3-1.6-4.5-2.5C5.6 43 4.3 42 2.9 41c-.2-.2-.5-.4-.7-.6-.2-.2-.4-.5-.8-.5-.1 0-.2-.1-.3-.1 0-.2-.1-.2-.1-.3zm16-26.6l-.4.1c-1.4.1-2.7.7-3.8 1.6-.3.1-.4.4-.7.6v-.1c0-.3-.1-.6-.1-.8-.1-.4-.3-.7-.7-.7H10c-.7 0-.8.1-.8.8v21.5c0 .3.1.4.4.4h2.1c.3 0 .4-.1.4-.4v-7.6l.1.1c1.8 1.6 3.8 2 6.2 1.6 2-.4 3.5-1.7 4.5-3.5.7-1.4 1-3 1.1-4.5.1-1.7-.1-3.4-.7-5.1-.8-2-2.3-3.2-4.5-3.8-.3-.1-.7-.1-1-.1-.1-.1-.4-.1-.8-.1zm-4.7 4.4c0-.1.1-.3.1-.3 1.4-1 3-1.4 4.7-1.4 1.6.1 2.7.8 3.4 2.7.4 1.1.4 2.3.4 3.4s-.1 2.1-.4 3.1c-.7 2.1-2.3 3-4.4 3-1.4-.1-2.7-.6-3.8-1.4V26v-4.2-4.5zm20.8-4.4h-.3c-1 0-2 .1-3 .4-.6.1-1.3.4-1.8.6-.4.1-.6.4-.6.7v1c0 .4.1.6.7.4.7-.1 1.6-.4 2.4-.6 1.3-.1 2.5-.3 3.8-.1.7.1 1.3.3 1.7.8.4.4.4 1.1.6 1.7v2.6h-.1c-1.1-.3-2.1-.4-3.2-.4-1.1-.1-2.3 0-3.4.4-1.4.4-2.3 1.3-3 2.5-.4 1-.6 2-.4 3.1.1 1.4.8 2.5 2.1 3.2 1.1.7 2.5.7 3.8.6 1.6-.1 3-.8 4.1-1.8.1 0 .1-.1.1-.1.1.4.1.7.1 1.1.1.3.3.4.6.4H39c.3 0 .4-.1.4-.4V18.2c0-.4 0-.8-.1-1.4-.1-1.4-.7-2.4-2-3.1-.7-.4-1.4-.6-2.3-.7-.4-.1-.7-.1-1.1-.1h-.8zm3.6 13c0 .1-.1.1-.1.3-1.1.7-2.4 1.4-3.8 1.6-.6.1-1.1 0-1.7-.1-.6-.1-1.1-.7-1.3-1.4-.1-.7-.1-1.4 0-2 .3-.8.8-1.4 1.7-1.6.7-.3 1.7-.3 2.5-.1.8.1 1.7.1 2.5.4.1 0 .1.1.1.3v1.4c0 .4.1.8.1 1.2zm26.1 13.2c0-.3-.2-.6-.6-.8-1-.5-2.4-.6-3.5-.6-2.3-.1-4.9.5-6.9 1.8-.1.1-.3.1-.4.4-.1.1-.1.3-.1.4s.1.1.4.1h.1c.7-.1 1.6-.1 2.3-.3 1.4-.3 3.2-.2 4.6 0 .3.1.5.1.7.3.4.3.4.9.3 1.4-.3 2.2-1.1 4.5-2.2 6.4-.1.1-.1.2-.1.3 0 .2.3.3.5.3.2-.1.4-.2.5-.4.3-.3.6-.6.8-.9 1-1.2 1.7-2.7 2.3-4.2.6-1.2 1.4-2.8 1.3-4.2zM49.7 26.6c-1.4-3.5-2.7-7.2-4-10.9-.1-.6-.4-1.1-.7-1.7-.1-.3-.3-.4-.7-.4H42c-.3 0-.4.1-.3.4.1.1.1.4.1.6 2 4.9 4 9.9 6.1 14.7.1.4.1.7 0 1.1-.3.7-.6 1.6-1 2.3-.3.7-.7 1.1-1.6 1.4-.4.3-1 .3-1.4.3-.3 0-.4-.1-.7-.1-.4 0-.4.1-.4.4v1c0 .6.1.7.7.8s1.1.1 1.7.1c1.7 0 3.1-.7 4-2.1.4-.6.7-1.3 1-1.8 2.4-6.1 4.8-12.1 7.2-18.2.1-.1.1-.4.1-.6 0-.3-.1-.4-.4-.4h-2c-.4 0-.7.1-.7.4-.1.1-.1.3-.1.4l-3.5 10.3c-.3.7-.4 1.4-.7 2.3-.4-.1-.4-.3-.4-.3z"/>
	</g>
</svg>
	);
};

export default AmazonPay;