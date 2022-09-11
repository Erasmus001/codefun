import React from 'react';

function SkippingRope(props) {
	const title = props.title || "skipping rope";

	return (
		<svg height={props.height || "64"} width={props.height || "64"} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill={props.fill || "#0000"}>
		<path d="M55.4 43.4h-7.2c-3.3 0-6.2 2.2-7.1 5.3H18.9c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5h26.2c6.1 0 11-4.9 11-11s-4.9-11-11-11H23.2v-.5c0-4.1-3.3-7.4-7.4-7.4H8.6c-4.1 0-7.4 3.3-7.4 7.4v1.9c0 4.1 3.3 7.4 7.4 7.4h7.2c3.3 0 6.2-2.2 7.1-5.3h22.2c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5H18.9c-6.1 0-11 4.9-11 11s4.9 11 11 11h21.9v.5c0 4.1 3.3 7.4 7.4 7.4h7.2c4.1 0 7.4-3.3 7.4-7.4v-1.9c0-4.1-3.4-7.4-7.4-7.4zM19.7 13.2c0 2.1-1.7 3.9-3.9 3.9H8.6c-2.1 0-3.9-1.7-3.9-3.9v-1.9c0-2.1 1.7-3.9 3.9-3.9h7.2c2.1 0 3.9 1.7 3.9 3.9v1.9zm39.6 39.5c0 2.1-1.7 3.9-3.9 3.9h-7.2c-2.1 0-3.9-1.7-3.9-3.9v-1.9c0-2.1 1.7-3.9 3.9-3.9h7.2c2.1 0 3.9 1.7 3.9 3.9v1.9z"/>
	</g>
</svg>
	);
};

export default SkippingRope;