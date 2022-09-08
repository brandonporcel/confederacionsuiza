import { Link } from 'react-router-dom';
import { logo } from '../svg/svgAsImage';
import { useRef, useState } from 'react';
import MobileHeaderr from './MobileHeader';
import styled from 'styled-components';
const HeaderWrapper = styled.header`
	display: flex;
	position: sticky;
	justify-content: space-between;
	top: 0;
	z-index: 50;
	padding: 15px 100px;
	width: 100%;
	background-color: var(--white);
	min-height: 60px;
	max-height: min-content;
	color: var(--gray);
	box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
	align-items: center;
	.navList-ctn {
		display: flex;
		justify-content: space-around;
		align-items: center;
		.navList-item {
			position: relative;
			cursor: pointer;
			color: var(--gray);
			font-weight: 500;

			a {
				padding: 15px 15px;
			}
			&:hover {
				color: var(--gray-third);
			}
			&:hover ul {
				visibility: visible;
			}
			.navList-submenu {
				position: absolute;
				width: 175px;
				top: 30px;
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
					text-align: left;
					font-weight: 500;
					a {
						padding: 10px 10px;
						display: block;
					}
					&:hover {
						color: var(--gray-third);
					}
				}
			}
		}
	}

	.navLogo {
		display: flex;
		.navLogo-ctn {
			display: flex;
			align-items: center;
		}
		.navLogo-img-ctn {
			width: 62px;
			height: auto;
			display: flex;
			img {
				width: 100%;
				height: auto;
			}
		}
		.navLogo-h1-ctn {
			width: 60%;
			padding: 0px 10px 0px 10px;
			h1 {
				font-size: 17px;
			}
		}
	}
	.headerMenu {
		display: none;
	}
	.navList-submenu hr {
		background-color: var(--gray-line);
		height: 0.5px;
		border: none;
	}
	.navLogo {
		display: flex;
	}
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		padding: 15px;

		.navList {
			display: none;
		}
		.headerMenu {
			display: block;
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		padding: 15px;

		.navList {
			display: none;
		}
		.headerMenu {
			display: block;
		}
	}
	/* Small screens, laptops */
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		padding: 15px 50px;
	}
`;
function Header() {
	const toTop = () => {
		window.scrollTo(0, 0);
	};
	const listMobile = useRef();
	const [openMenu, setOpenMenu] = useState(false);

	const MobileHeader = () => setOpenMenu((openMenu) => !openMenu);

	return (
		<HeaderWrapper className="header">
			<MobileHeaderr
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
				toTop={toTop}
			></MobileHeaderr>
			<div className="navLogo">
				<Link onClick={toTop} to="/" className="navLogo-ctn">
					<div className="navLogo-img-ctn">
						<img
							src={logo}
							alt="Logo ET26 Confederación suiza"
							width="100px"
							height="100px"
						/>
					</div>
					<div className="navLogo-h1-ctn">
						<h1>Confederación Suiza</h1>
					</div>
				</Link>
			</div>

			<button className="headerMenu noBtnStyles" onClick={MobileHeader}>
				<svg
					width="24px"
					height="24px"
					strokeWidth="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					color="#000000"
				>
					<path
						d="M3 5h18M3 12h18M3 19h18"
						stroke="#000000"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</button>

			<nav className={` ${openMenu === true ? 'navList active' : 'navList'}`}>
				<ul className="navList-ctn">
					<li className="navList-item" onClick={toTop}>
						<Link className="navLinks" to="/institucional">
							Institucional
						</Link>
					</li>
					<li className="navList-item navLinks">
						<a href="#especialidades">Especialidades</a>

						<ul className="navList-submenu" ref={listMobile}>
							<li className="navList-subItem">
								<Link to="ciclobasico">Ciclo Básico</Link>
							</li>
							<hr />
							<li className="navList-subItem">
								<Link to="automotores">Automotores</Link>
							</li>
							<hr />
							<li className="navList-subItem">
								<Link to="computacion">Computación</Link>
							</li>
						</ul>
					</li>
					<li className="navList-item" onClick={toTop}>
						<Link to="/proyectos" className="navLinks">
							Proyectos
						</Link>
					</li>
					<li className="navList-item" onClick={toTop}>
						<Link to="/contacto" className="navLinks">
							Contacto
						</Link>
					</li>
				</ul>
			</nav>
		</HeaderWrapper>
	);
}

export default Header;
