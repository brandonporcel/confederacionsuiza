import React from 'react';
import styled from 'styled-components';
import { conocelasuizabg } from '../svg/svgAsImage';
import Button from './Button';
export default function ConoceLaSuiza() {
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
			height: 450px;
			margin-bottom: 20px;
		}
	`;
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
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			<Button type="bg">Mapa Escuela</Button>
		</ConoceLaSuizaCtn>
	);
}
