import React from 'react';

export default function Facebook({ color }) {
	return (
		<svg
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			// xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 50.5 50.5"
			className="svgSocial"

			// xml:space="preserve"
		>
			<path
				fill={color}
				d="M36.2,28.3l1.3-8.5h-8.2v-5.5c0-2.3,1.1-4.5,4.7-4.5h3.7V2.5c0,0-3.3-0.6-6.6-0.6c-6.7,0-11.1,4-11.1,11.4v6.4h-7.5v8.5H20
	v20.5h9.2V28.3H36.2z"
			/>
		</svg>
	);
}
