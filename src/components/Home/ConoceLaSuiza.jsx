import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { conocelasuizabg } from '../../svg/svgAsImage';
import Button from '../Button';
const ConoceLaSuizaCtn = styled.section`
	background-color: var(--conocelasuiza-color);
	background-image: url(${conocelasuizabg});
	background-size: contain;
	text-align: center;
	.sectionTitleSuiza {
		margin-bottom: 10px;
		font-size: 30px;
	}
	p {
		color: var(--gray-third);
		font-size: 16px;
		margin-bottom: 20px;
	}
	.conocelasuiza-iframe {
		width: 90%;
		height: 500px;
		margin-bottom: 20px;
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		.conocelasuiza-iframe {
			height: 400px;
		}
	}
	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 480px) {
		.sectionTitleSuiza {
			font-size: 26px;
		}
		p {
			font-size: 14px;
		}
		.conocelasuiza-iframe {
			width: 100%;
			height: 300px;
		}
	}
`;
export default function ConoceLaSuiza() {
	return (
		<ConoceLaSuizaCtn id="contacto" className="section">
			<h2 className="sectionTitleSuiza">Conocé La Suiza</h2>
			<p>
				La escuela esta cituada en el barrio de Balvanera, Avenida Jujuy 255
			</p>
			<iframe
				className="conocelasuiza-iframe"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/hPB4I61D6b0"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
			<Link to="/contacto">
				<Button type="bg">Contacto</Button>
			</Link>
		</ConoceLaSuizaCtn>
	);
}
