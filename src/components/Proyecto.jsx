import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgGallery from './ImgGallery';
import SubTitleAndDescription from './SubTitleAndDescription';

const ProyectoContainer = styled.div`
	background: var(--conocelasuiza-color);

	padding: 40px 0;
	.projectCtnBackground {
		background: var(--white);
		border-radius: 10px;
		width: 70%;
		margin: 0 auto;
		padding: 50px 100px;
		box-shadow: var(--shadow);
		h2 {
			font-size: 32px;
			color: var(--titles-color);
			margin-bottom: 20px;
		}
		.tags {
			color: var(--gray-third);
			display: flex;
			.dot-spacing {
				padding: 0 10px;
				cursor: default;
			}
			p {
				a {
					font-weight: 500;
					color: var(--gray);
					cursor: pointer;
				}
			}
		}
		.img-project-suiza {
			position: relative;
			height: 400px;
			width: 500px;
			margin: 20px auto 0;
			img {
				position: absolute;
				height: 100%;
				object-fit: contain;
			}
		}
	}
	.cccccccc {
		list-style: initial;
		padding-left: 20px;
	}
`;
const galleryImages = [
	{
		id: 0,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/06/5d0509c46a734_900.jpg',
	},
	{
		id: 1,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'https://pbs.twimg.com/media/D2DY619XgAAel5C.jpg',
	},
	{
		id: 2,
		title: 'logo del proyecto',
		active: null,
		url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw18oSQGMaearEoWRZnzjxGnaSr-IFs06vbWE3T3LxFjXFy9zOCjeY9q_uTHGv_PTz50I&usqp=CAU',
	},
	{
		id: 3,
		title: 'logo del proyecto',
		active: null,
		url: 'https://econojournal.com.ar/cntnt/uploads/2019/01/3.jpg',
	},
	{
		id: 4,
		title: 'logo del proyecto',
		active: null,
		url: 'https://econojournal.com.ar/cntnt/uploads/2019/01/7.jpg',
	},
];
export default function Proyecto() {
	return (
		<ProyectoContainer>
			<div className="projectCtnBackground">
				<h2>First Lego First: El proyecto Nombre Equipo llego a la final!</h2>
				<div className="tags">
					<span>Marzo 19,2022</span>
					<div className="dot-spacing">•</div>
					<p>
						Por <Link to="/computacion">Computación</Link>
					</p>
				</div>
				<div className="img-project-suiza">
					<img
						src="https://scontent.feze10-1.fna.fbcdn.net/v/t1.6435-9/56509914_1513882648754057_1057467346806898688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=KHsWKl-1_KIAX_uHF6n&_nc_ht=scontent.feze10-1.fna&oh=00_AT_sSbFz-PPDsJYOkJtRnVJ6wsBV9WGrA9a_GTZqQEI3yg&oe=630BF9CA"
						alt=""
					/>
				</div>
				<SubTitleAndDescription title="descripcion" w="100">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta
						quibusdam nam ut ratione sequi quis magnam rem perspiciatis.
						Laboriosam harum non deleniti explicabo corporis provident facere
						unde dolor ex.
					</p>
				</SubTitleAndDescription>
				<SubTitleAndDescription
					title="por que participaron del proyecto"
					w="100"
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta
						quibusdam nam ut ratione sequi quis magnam rem perspiciatis.
						Laboriosam harum non deleniti explicabo corporis provident facere
						unde dolor ex.
					</p>
					<ul className="cccccccc">
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
						</li>
					</ul>
				</SubTitleAndDescription>
				<SubTitleAndDescription
					title="que tareas realizaron los alumnos"
					w="100"
				>
					<ul className="cccccccc">
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
						</li>
						<li>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
						</li>
					</ul>
				</SubTitleAndDescription>
				<SubTitleAndDescription title="docente a cargo" w="100">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
					consequatur numquam ea <b>josesito josesin</b> Vero magni alias,
				</SubTitleAndDescription>
				<ImgGallery galleryImages={galleryImages} />
			</div>
		</ProyectoContainer>
	);
}
