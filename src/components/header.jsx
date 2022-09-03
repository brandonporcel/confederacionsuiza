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
					<div className="navLogo-h3-ctn">
						<h3>Confederación Suiza</h3>
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
					<Link className="navLinks" to="/institucional">
						<li className="navList-item">Institucional</li>
					</Link>
					<li className="navList-item navLinks">
						<a href="#especialidades">Especialidades</a>

						<ul className="navList-submenu" ref={listMobile}>
							<Link to="ciclobasico">
								<li className="navList-subItem">Ciclo Básico</li>
							</Link>
							<hr />
							<Link to="automotores">
								<li className="navList-subItem">Automotores</li>
							</Link>
							<hr />
							<Link to="computacion">
								<li className="navList-subItem">Computación</li>
							</Link>
						</ul>
					</li>
					<Link to="/proyectos" className="navLinks" onClick={toTop}>
						<li className="navList-item">Proyectos</li>
					</Link>
					<Link to="/contacto" className="navLinks" onClick={toTop}>
						<li className="navList-item">Contacto</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
