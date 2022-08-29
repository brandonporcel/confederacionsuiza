import { Link } from 'react-router-dom';
import './styles.css';
import { logo } from '../svg/svgAsImage';
import { useState } from 'react';
function Header() {
	const toTop = () => {
		window.scrollTo(0, 0);
	};
	const [openMenu, setOpenMenu] = useState(false);
	const MobileHeader = () => setOpenMenu((openMenu) => !openMenu);
	return (
		<header className="header">
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
					<div className="navLogo-h2-ctn">
						<h2>Confederación Suiza</h2>
					</div>
				</Link>
			</div>
			<button className="noBtnStyles" onClick={MobileHeader}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					style={{ fill: ' rgba(0, 0, 0, 1)' }}
				>
					<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
				</svg>
			</button>

			<nav className={` ${openMenu === true ? 'navList active' : 'navList'}`}>
				<ul className="navList-ctn">
					<Link className="navLinks" to="/institucional" onClick={MobileHeader}>
						<li className="navList-item">Institucional</li>
					</Link>
					<li className="navList-item navLinks" onClick={MobileHeader}>
						<a href="#especialidades">Especialidades</a>
						<ul className="navList-submenu">
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
					<Link to="/proyectos" className="navLinks" onClick={MobileHeader}>
						<li className="navList-item">Proyectos</li>
					</Link>
					<Link to="/contacto" className="navLinks" onClick={MobileHeader}>
						<li className="navList-item">Contacto</li>
					</Link>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
