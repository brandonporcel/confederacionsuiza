import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
	const toTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="header">
			<div className="navLogo">
				<Link onClick={toTop} to="/" className="navLogo-ctn">
					<div className="navLogo-img-ctn">
						<img
							src="./images/logo.jpg"
							alt="Logo de la Institución"
							width="100px"
							height="100px"
						/>
					</div>
					<div className="navLogo-h2-ctn">
						<h2>Confederación Suiza</h2>
					</div>
				</Link>
			</div>
			<nav className="navList">
				<ul className="navList-ctn">
					<Link className="navLinks" to="/institucional">
						<li className="navList-item">Institucional</li>
					</Link>
					<li className="navList-item">
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
					<Link to="/proyectos">
						<li className="navList-item">Proyectos</li>
					</Link>
					<Link to="/contacto">
						<li className="navList-item">Contacto</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
