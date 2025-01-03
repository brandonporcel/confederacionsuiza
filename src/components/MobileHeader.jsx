import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DownArrow from './svg/DownArrow';
const MobileHeaderCtn = styled.nav`
	position: absolute;
	top: 80px;
	background: white;
	left: 0;
	width: 100%;

	.navList-ctn-mobile {
		display: flex;
		flex-direction: column;

		.navLinks {
			border-top: 1px solid var(--gray-line);
		}
		.navList-item {
			cursor: pointer;
			padding: 15px 15px;
			color: var(--gray);
			font-weight: 500;
			text-transform: capitalize;
			/* &:hover {
				color: var(--gray-third);
			} */
			.rotate180 {
				transform: rotate(180deg);
			}
			.navList-submenu {
				position: absolute;
				width: 175px;
				top: 50px;
				left: -1px;
				padding: 4px 10px;
				display: flex;
				flex-direction: column;
				visibility: hidden;
				background-color: var(--white);
				border-radius: 10px;
				.navList-subItem {
					color: var(--gray);
					width: 100%;
					padding: 10px 10px;
					text-align: left;
					font-weight: 500;
					&:hover {
						color: var(--gray-third);
					}
				}
			}
		}
		.navList-item:hover ul {
			visibility: visible;
		}
	}

	.acordeonTitle {
		display: flex;
		align-items: center;
		justify-content: space-between;

		button {
			background: none;
			border: none;
			color: inherit;
			cursor: pointer;
			span {
				padding: 10px 5px;
			}
		}
		&.selected {
			color: var(--blue);
		}
	}

	.especialidadesItemsCtn {
		display: none;

		&.selected {
			display: block;

			.navLinks {
				.navList-item {
					background-color: var(--blue-hover);
					color: var(--white);
				}
			}
		}
	}
	@media only screen and (min-width: 769px) {
		display: none;
	}
	@media only screen and (min-width: 1025px) and (max-width: 1200px) {
		display: none;
	}

	@media screen and (min-width: 1201px) {
		display: none;
	}
`;
export default function MobileHeaderr({ openMenu, setOpenMenu, toTop }) {
	const [selected, setSelected] = useState(false);

	const showSpecialties = () => setSelected((selected) => !selected);
	return (
		<MobileHeaderCtn
			className={`${openMenu === true ? 'navListMobile open' : 'none'}`}
		>
			<ul className="navList-ctn-mobile">
				<Link
					className="navLinks"
					to="/institucional"
					onClick={() => {
						setOpenMenu();
						toTop();
					}}
				>
					<li className="navList-item">Institucional</li>
				</Link>
				<li
					className="navList-item navLinks especialidadesMenuHandler"
					onClick={() => showSpecialties()}
				>
					<div
						className={`${
							selected === true ? 'verticalAlign selected' : 'verticalAlign'
						}`}
					>
						<a href="#especialidades">Especialidades </a>

						{selected === true ? <DownArrow rotate="180" /> : <DownArrow />}
					</div>
				</li>
				<ul
					className={`${
						selected === true
							? 'especialidadesItemsCtn selected'
							: 'especialidadesItemsCtn'
					}`}
				>
					<Link
						className={`navLinks`}
						to="/primerciclo"
						onClick={() => {
							setOpenMenu();
							toTop();
						}}
					>
						<li className="navList-item">Primer Ciclo</li>
					</Link>
					<Link
						className={`navLinks`}
						to="/automotores"
						onClick={() => {
							setOpenMenu();
							toTop();
						}}
					>
						<li className="navList-item">Automotores</li>
					</Link>
					<Link
						className={`navLinks`}
						to="/computacion"
						onClick={() => {
							setOpenMenu();
							toTop();
						}}
					>
						<li className="navList-item">computación</li>
					</Link>
				</ul>

				<Link
					to="/proyectos"
					className="navLinks"
					onClick={() => {
						setOpenMenu();
						toTop();
					}}
				>
					<li className="navList-item">Proyectos</li>
				</Link>
				<Link
					to="/contacto"
					className="navLinks"
					onClick={() => {
						setOpenMenu();
						toTop();
					}}
				>
					<li className="navList-item">Contacto</li>
				</Link>
			</ul>
		</MobileHeaderCtn>
	);
}
