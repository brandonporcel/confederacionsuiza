import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FooterConactotSocial from './FooterConactotSocial';
import { whitelogo } from '../../svg/svgAsImage';
const institucionalItems = [
	{
		key: 2,
		name: 'Institucional',
		link: '/institucional',
	},
	{
		key: 3,
		name: 'proyectos',
		link: '/proyectos',
	},
	{
		key: 4,
		name: 'cooperadora',
		link: 'https://www.instagram.com/lacoopedelasuiza/',
		targetBlank: true,
	},
	{
		key: 5,
		name: 'información útil',
		link: '/informacionutil',
	},
	{
		key: 6,
		name: 'contacto',
		link: '/contacto',
	},
];

const masItems = [
	{
		key: 9,
		name: 'github institucional',
		link: 'https://github.com/21-5to',
	},
	{
		key: 10,
		name: 'Centro Estudiantes',
		link: 'http://cecs.ar',
	},
	{
		key: 11,
		name: 'Google drive',
		link: 'https://drive.google.com/drive/folders/1CpcPcihN9uKiCPa5Tz18yOJIIGJY9ThG',
	},
	{
		key: 12,
		name: 'Biblioteca Virtual',
		link: 'http://lasuizabiblioteca.herokuapp.com',
	},
];
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
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 5px;
				img {
					width: 100%;
					height: auto;
				}
			}
			.title-footer {
				font-weight: 600;
				font-size: 19px;
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
				font-size: 18px;
				font-weight: 600;
			}
			ul {
				li {
					display: block;
					margin-bottom: 10px;
					text-transform: capitalize;
					a {
						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}
	/* celulares */
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		grid-template-columns: 1fr;
		.right {
			text-align: center;
		}
	}
	@media only screen and (min-width: 676px) and (max-width: 768px) {
		grid-template-columns: 1fr;
		.right {
			text-align: center;
		}
	}
`;
export default function FooterContent() {
	const toTop = () => window.scrollTo(0, 0);

	return (
		<FooterContentCtn>
			<div className="left">
				<div className="logo-text">
					<div className="logo-footer-ctn">
						<img
							src={whitelogo}
							alt="Logo ET26 Confederacion Suiza Blanco"
							width="100px"
							height="100px"
						/>
					</div>
					<h5 className="title-footer">
						<span>Escuela Técnica</span> Confederación Suiza
					</h5>
				</div>
				<FooterConactotSocial />
			</div>
			<div className="right">
				<div className="footerSection">
					<h4>Escuela</h4>
					<ul>
						{institucionalItems.map((el) => (
							<li key={el.key}>
								{el.targetBlank ? (
									<a href={el.link} target="_blank" rel="noreferrer">
										{el.name}
									</a>
								) : (
									<Link to={el.link} onClick={toTop}>
										{el.name}
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
				<div className="footerSection">
					<h4>Especialidades</h4>
					<ul>
						<li>
							<Link to="/automotores" onClick={toTop}>
								Automotores
							</Link>
						</li>
						<li>
							<Link to="/computacion" onClick={toTop}>
								Computación
							</Link>
						</li>
					</ul>
				</div>
				<div className="footerSection">
					<h4>Más</h4>
					<ul>
						{masItems.map((el) => (
							<li key={el.key}>
								<a href={el.link} target="_blank" rel="noreferrer">
									{el.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</FooterContentCtn>
	);
}
