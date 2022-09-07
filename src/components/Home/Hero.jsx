import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
const Containter = styled.div`
	width: 100%;

	background-repeat: no-repeat;

	background-size: cover;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	transition: background-image 1s;
	min-height: 100vh;
	max-height: min-content;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-color: #000000;
		opacity: 0.53;
	}
	.content {
		z-index: 10;
		padding: 75px 0 100px;
		color: var(--white);
		h2 {
			max-width: 700px;
			font-size: 62px;
			margin-bottom: 20px;
			text-shadow: 0px 1px 3px #424242;
		}
		&-cta {
			max-width: 425px;
			p {
				font-weight: 400;
				font-size: 20px;
			}
		}
	}
	/* celu */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		& {
			.content {
				padding: 0;
				padding-bottom: 70px;
				h2 {
					font-size: 36px;
				}
				.content-cta {
					p {
						font-size: var(--mobile-font-size);
					}
				}
			}
		}
	}
	@media only screen and (min-width: 480px) and (max-width: 675px) {
		& {
			.content {
				h1 {
					font-size: 44px;
				}
			}
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		& {
			.content {
				h1 {
					font-size: 48px;
					width: 85%;
				}
			}
			.content-cta {
				p {
					font-size: 18px;
				}
			}
		}
	}
	/* Small screens, laptops */
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		& {
			.content {
				h1 {
					font-size: 56px;
					width: 85%;
				}
			}
			.content-cta {
				p {
					font-size: 19px;
				}
			}
		}
	}
`;
const Imagesss = [
	'./images/hero/foto-frontal-escuela.jpg',
	'./images/hero/foto-diagonal-escuela.jpg',

];
export default function Hero() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [selectedImage, setSelectedImage] = useState(Imagesss[selectedIndex]);
	const selectNewImage = (images) => {
		const nextIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
		setSelectedImage(images[nextIndex]);
		setSelectedIndex(nextIndex);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			selectNewImage(Imagesss);
		}, 4500);
		return () => clearInterval(interval);
	});

	return (
		<Containter
			className="section"
			style={{ backgroundImage: `url(${selectedImage})` }}
		>
			<div className="content">
				<h2>Escuela Técnica Confederación Suiza</h2>
				<div className="content-cta">
					<p>
						Bienvenido al sitio oficial de nuestra escuela. Acá encontraras toda
						la información y novedades que necesites y más.
					</p>

					<div className="content-buttons">
						<a href="#especialidades" className="mr20">
							<Button type="bg">Especialidades</Button>
						</a>
						<a href="#contacto" className="mr20">
							<Button type="noBg">Conocenos</Button>
						</a>
					</div>
				</div>
			</div>
		</Containter>
	);
}
