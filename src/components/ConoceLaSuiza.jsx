import React from 'react';
import styled from 'styled-components';
import { conocelasuizabg } from '../svg/svgAsImage';
import Button from './Button';
const ConoceLaSuizaCtn = styled.section`
	background-color: var(--conocelasuiza-color);
	background-image: url(${conocelasuizabg});
	background-size: contain;
	text-align: center;
	.sectionTitle {
		margin-bottom: 10px;
		font-size: 30px;
	}
	p {
		color: var(--gray-third);
		font-size: 16px;
		margin-bottom: 20px;
	}
	iframe {
		width: 90%;
		height: 500px;
		margin-bottom: 20px;
	}
`;
export default function ConoceLaSuiza() {
	return (
		<ConoceLaSuizaCtn id="contacto" className="section">
			<h2 className="sectionTitle">Conocé La Suiza</h2>
			<p>
				La escuela esta cituada en el barrio de Balvanera, Avenida Jujuy 255
			</p>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/hPB4I61D6b0"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<Button type="bg">
				<a
					href="https://goo.gl/maps/8ndhDve72yNUEg9y6"
					target="_blank"
					rel="noreferrer"
				>
					Mapa Escuela
				</a>
			</Button>
		</ConoceLaSuizaCtn>
	);
}
