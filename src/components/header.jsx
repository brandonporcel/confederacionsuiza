import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
	return (
		<div className="header">
			<div className="navLogo">
				<Link to="/" className="navLogo-ctn">
					{/* habia q pasarlo a la carpeta public */}
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
			<div className="navBar">
				<ul className="navLinks-ctn">
					<li>
						<Link className="navLinks" to="/institucional">
							Institucional
						</Link>
					</li>
					<li>
						<a className="navLinks" href="#especialidades">
							Especialidades
						</a>
					</li>
					<li>
						<a className="navLinks" href="#proyectos">
							Proyectos
						</a>
					</li>
					<li>
						<a className="navLinks" href="#contacto">
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
