import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProyectoItem from './ProyectoItem';
const proyectos = [
	{
		title: 'Flecha Cosmica',
		link: '/flechacosmica',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/56509914_1513882648754057_1057467346806898688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ahxS_K82gtYAX-9nPcI&_nc_ht=scontent.feze17-1.fna&oh=00_AT9BF2UDXIeKAHhUyacT7iHWdDOJV1FuUvw6f4qlCPALlQ&oe=6308054A',
		year: '2019',
		specialty: '💻',
	},
	{
		title: 'Eco Auto',
		link: '/ecoauto2019',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/41653800_1793791497406001_4809665611133091840_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=jhD1qmiU1UgAX-5ZZIy&_nc_ht=scontent.feze17-1.fna&oh=00_AT-6kYbyKAGXLj65ahDDbxsZs7RP1jHxjulFmq3lpnZQew&oe=6306D02B',
		year: '2019',
		specialty: '🚗',
	},
	{
		title: 'Otro Prouecto',
		link: '/proyecto91',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/56509914_1513882648754057_1057467346806898688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ahxS_K82gtYAX-9nPcI&_nc_ht=scontent.feze17-1.fna&oh=00_AT9BF2UDXIeKAHhUyacT7iHWdDOJV1FuUvw6f4qlCPALlQ&oe=6308054A',
		year: '2019',
		specialty: '🎒',
	},
];
export default function Proyectos() {
	const ProyectosCtn = styled.section`
		/* height: 100vh; */
		/* height: min-content; */
		padding: 50px 100px;
		text-align: center;
		.sectionTitle {
			text-align: center;
			margin-bottom: 50px;
			span {
				color: var(--btn-blue);
			}
		}
		.specialtyCtn {
			display: flex;
			justify-content: space-around;
			/* .specialtyItem {
				background: red;
				margin-bottom: 20px;
			} */
			margin-bottom: 40px;
		}

		.seeMore {
			color: var(--btn-blue);
			text-decoration: underline;
		}
	`;
	return (
		<ProyectosCtn id="proyectos">
			<h2 className="sectionTitle">
				Proyectos de <span>los/as estudiantes</span>
			</h2>
			<div className="specialtyCtn">
				{proyectos.map((el, i) => (
					<ProyectoItem
						key={i}
						title={el.title}
						link={el.link}
						description={el.description}
						year={el.year}
						specialty={el.specialty}
						thumbnail={el.thumbnail}
					/>
				))}
			</div>
			<Link to="proyectos" className="seeMore">
				Ver más
			</Link>
		</ProyectosCtn>
	);
}
