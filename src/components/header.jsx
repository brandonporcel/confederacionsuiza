import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
	return (
		<div className="header">
			<div className="navLogo">
				<Link to="/">
					{/* habia q pasarlo a la carpeta public */}
					<img
						src="./images/logo.png"
						alt="Logo de la Institución"
						width="100px"
						height="100px"
					/>
				</Link>

				<h1>Confederación Suiza</h1>
			</div>
			<div className="navBar">
				<ul>
					<li>
						<Link to="/institucional">Institucional</Link>
					</li>
					<li>
						<a href="#especialdades">Especialidades</a>
					</li>
					<li>
						<a href="#contacto">Contacto</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
