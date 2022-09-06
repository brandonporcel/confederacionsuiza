import { Link } from 'react-router-dom';
import './styles.css';
import { logo } from '../svg/svgAsImage';
import { useRef, useState } from 'react';
import MobileHeaderr from './MobileHeader';
function Header() {
	const toTop = () => {
		window.scrollTo(0, 0);
	};
	const listMobile = useRef();
	const [openMenu, setOpenMenu] = useState(false);

	const MobileHeader = () => setOpenMenu((openMenu) => !openMenu);

	return (
		<header className="header">
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
		</header>
	);
}

export default Header;
