import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import ContactContext from '../context/ContactContext';
import Banner from './Banner';

import SocialLogos from './Footer/SocialLogos';

const ContactoInfoCtn = styled.main`
	position: relative;
	background: var(--grey-bg-contact);
	display: flex;
	justify-content: center;
	/* esto tienen q ser mayor al height de .nuestraescuela */
	height: 800px;
	z-index: 20;
	.nuestraEscuelaaa {
		box-shadow: var(--shadow);
		border: 1px solid var(--gray-line);
		background: var(--white);
		padding: 40px 20px;
		position: absolute;
		top: -75px;
		width: 900px;
		border-radius: 10px;
		height: min-content;
		text-align: center;
		h3 {
			color: var(--titles-color);
			font-size: 22px;
			margin-bottom: 20px;
		}

		.infoLink {
			margin: 20px 0;
			span,
			p {
				color: var(--gray-third);
				font-weight: 500;
				display: block;
			}
			a {
				color: var(--blue);
				font-weight: 600;
			}
		}

		.contact {
			margin-top: 40px;
			h4 {
				color: var(--titles-color);
				font-size: 20px;
				margin-bottom: 20px;
			}
			.followUsCtn {
				width: 50%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-around;
				a {
					width: 28px;
					height: 28px;
				}
			}
		}
	}
	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		height: 750px;
		.nuestraEscuelaaa {
			width: 100%;
			border-radius: 15px;

			iframe {
				width: 100%;
			}
			.contact {
				.followUsCtn {
					width: 85%;
				}
			}
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		height: 750px;
		.nuestraEscuelaaa {
			width: 600px;
			border-radius: 15px;
			.contact {
				.followUsCtn {
					width: 70%;
				}
			}
		}
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		height: 750px;
		.nuestraEscuelaaa {
			width: 700px;
			.contact {
				.followUsCtn {
					width: 60%;
				}
			}
		}
	}
`;
const TitleAndBanner = styled.div`
	position: relative;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}
	h2 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
		font-size: 52px;
		color: var(--white);
		z-index: 10;
	}
`;
export default function Contacto() {
	const { contactData } = useContext(ContactContext);
	const { number, mainMail, regencia } = contactData;
	return (
		<>
			<TitleAndBanner>
				<Banner img="./images/escuela.webp" height={'375px'} />

				<h2>Contacto</h2>
			</TitleAndBanner>
			<ContactoInfoCtn className="section">
				<div className="nuestraEscuelaaa">
					<h3>Nuestra Escuela</h3>
					<div className="infoLink">
						<p>Avenida Jujuy 255 - 1083 CABA</p>
					</div>

					<iframe
						width="500"
						height="300"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Avenida%20Jujuy%20255&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
						scrolling="no"
						marginHeight="0"
						marginWidth="0"
						title="mapa Escuela Tecnica confederacion suiza"
						loading="lazy"
					/>
					<div className="infoLink">
						<span>Telefono:</span>
						<p>{number}</p>
					</div>

					<div className="infoLink">
						<span>Mail de la escuela:</span>
						<a href={`mailto:${mainMail}`}>{mainMail}</a>
					</div>
					<div className="infoLink">
						<span>Regencia:</span>
						<a href={`mailto:${regencia}`}>{regencia}</a>
					</div>
					<div className="contact">
						<h4>Seguinos en las redes</h4>
						<SocialLogos color="var(--blue)" specialClass="followUsCtn" />
					</div>
				</div>
			</ContactoInfoCtn>

			{/* <Containter className="section">
				<div className="content">
					<h1>Contacto</h1>
				</div>
			</Containter>
			<NuestraEscuela /> */}
		</>
	);
}
