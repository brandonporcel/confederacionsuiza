import React from 'react';
import styled from 'styled-components';
const Error404Ctn = styled.figure`
	text-align: center;
	padding: 20px 0;
	width: 45%;
	margin: 0 auto;
	img {
		margin-bottom: 5px;
	}
`;
export default function Error404() {
	return (
		<Error404Ctn>
			<img src="./images/error404.jpg" alt="Error 404 lasuizacompu" />
			<figcaption>La página no fue encontrada:/</figcaption>
		</Error404Ctn>
	);
}
