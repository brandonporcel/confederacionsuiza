import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FooterConactotSocial from './FooterConactotSocial';
const FooterContentCtn = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	.left {
		.logo-text {
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			.logo-footer-ctn {
				width: 100px;
				height: 100px;
			}
			.title-footer {
				span {
					display: block;
					font-weight: 500;
				}
			}
		}
		.svgSocial {
			height: 28px;
			width: 28px;
			padding: 5px;
			path {
				fill: var(--white);
			}
			&:hover {
				cursor: pointer;
				background: var(--white);
				path {
					fill: var(--blue-footer);
				}
			}
		}
	}
	.right {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 20px;
		padding-top: 30px;
		.footerSection {
			h4 {
				margin-bottom: 20px;
			}
			ul {
				li {
					display: block;
					margin-bottom: 10px;
					a {
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
`;
export default function FooterContent() {
	return (
		<FooterContentCtn>
			<div className="left">
				<div className="logo-text">
					<div className="logo-footer-ctn">
						<img
							src="./images/logoblanco.webp"
							alt="Logo ET26 Confederacion Suiza Blanco"
						/>
					</div>
					<h3 className="title-footer">
						<span>Escuela Técnica</span> Confederacion Suiza
					</h3>
				</div>
				<FooterConactotSocial />
			</div>
			<div className="right">
				<div className="footerSection">
					<h4>Escuela</h4>
					<ul>
						<li>
							<Link to="/institucional">Institucional</Link>
						</li>
						<li>
							<a href="https://sites.google.com/view/aulasvirtualeset26">
								Novedades
							</a>
						</li>
						<li>
							<Link to="/proyectos">Proyectos</Link>
						</li>
						<li>
							<a href="https://www.instagram.com/lacoopedelasuiza/">
								Cooperadora
							</a>
						</li>
						<li>
							<Link to="/informacionutil">Informaction Útil</Link>
						</li>
					</ul>
				</div>
				<div className="footerSection">
					<h4>Especialidades</h4>
					<ul>
						<li>
							<Link to="/automotores">Automotores</Link>
						</li>
						<li>
							<Link to="/computacion">Computación</Link>
						</li>
					</ul>
				</div>
				<div className="footerSection">
					<h4>Más</h4>
					<ul>
						<li>
							<a
								href="https://github.com/otto-krause"
								target={'_blank'}
								rel="noreferrer"
							>
								Github Institucional
							</a>
						</li>
						<li>
							<a
								href="https://cecs.amogus.ar/"
								target={'_blank'}
								rel="noreferrer"
							>
								Centro Estudiantes
							</a>
						</li>
						<li>
							<a
								href="https://drive.google.com/drive/folders/1CpcPcihN9uKiCPa5Tz18yOJIIGJY9ThG"
								target={'_blank'}
								rel="noreferrer"
							>
								Google Drive
							</a>
						</li>
						<li>
							<a
								href="http://lasuizabiblioteca.herokuapp.com/"
								target={'_blank'}
								rel="noreferrer"
							>
								Biblioteca Virtual
							</a>
						</li>
					</ul>
				</div>
			</div>
		</FooterContentCtn>
	);
}
