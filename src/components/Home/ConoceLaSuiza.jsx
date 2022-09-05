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
		margin-bottom: 15px;
		font-size: 34px;
	}
	p {
		color: var(--gray-third);
		font-size: 17px;
		margin-bottom: 25px;
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
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		padding-top: 50px;
		padding-bottom: 30px;
		.sectionTitleSuiza {
			font-size: 34px;
			margin-bottom: 20px;
		}
		p {
			font-size: 16px;
			width: 90%;
			margin-bottom: 30px;
		}

		.conocelasuiza-iframe {
			width: 90%;
			height: 210px;
			margin-bottom: 10px;
		}
		/* height: 700px; */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		/* .conocelasuizasection {
		} */
	}
	@media only screen and (min-width: 480px) and (max-width: 675px) {
		.conocelasuiza-iframe {
			height: 270px;
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		.conocelasuiza-iframe {
			height: 360px;
		}
	}
`;
export default function ConoceLaSuiza() {
	return (
		<ConoceLaSuizaCtn id="contacto" className="section">
			<h4 className="sectionTitleSuiza">Conocé La Suiza</h4>
			<p>
				La escuela esta cituada en el barrio de Balvanera, Avenida Jujuy 255
			</p>
			<iframe
				className="conocelasuiza-iframe"
				width="560"
				height="315"
				src="https://www.youtube.com/embed/hPB4I61D6b0"
				title="Escuela Técnica Confederación Suiza Video Presentacion"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				loading="lazy"
			></iframe>
			<div>
				<Link to="/contacto">
					<Button type="bg">Contacto</Button>
				</Link>
			</div>
		</ConoceLaSuizaCtn>
	);
}
