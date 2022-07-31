import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
const Containter = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: url('./images/hero.jpg');
	background-repeat: no-repeat;
	background-position-x: -10px;
	background-size: cover;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.content {
		z-index: 10;

		color: var(--white);
		h1 {
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
`;
export default function Hero() {
	return (
		<Containter className="section">
			<div className="content">
				<h1>Escuela Técnica Confederacion Suiza</h1>
				<div className="content-cta">
					<p>
						Bienvenido al sitio oficial de nuestra escuela. Acá encontraras toda
						la información y novedades que necesites y más.
					</p>

					<div className="content-buttons">
						<a href="#especialidades">
							<Button type="bg">Especialidades</Button>
						</a>
						<a href="#contacto">
							<Button type="noBg">Contacto</Button>
						</a>
					</div>
				</div>
			</div>
		</Containter>
	);
}
