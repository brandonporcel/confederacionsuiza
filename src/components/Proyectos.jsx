import React from 'react';
import styled from 'styled-components';
import ProyectoItem from './Home/ProyectoItem';
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
		specialty: '📚',
	},
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
		specialty: '📚',
	},
];
const ProyectosCtn = styled.div`
	text-align: center;

	h2 {
		font-size: 34px;
		margin-bottom: 20px;
		color: var(--titles-color);
		text-transform: capitalize;
	}
	.description-text {
		p {
			width: 60%;
			margin: 0 auto;
		}
	}
	.grid-between {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		margin: 40px auto;
		justify-items: center;
		grid-row-gap: 40px;
		width: 90%;
	}
`;

export default function Proyectos() {
	return (
		<ProyectosCtn className="section">
			<h2>Proyectos</h2>
			<div className="description-text">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
					et odit, maxime rem exercitationem! Aut sequi reiciendis corporis
					ratione sed eaque, magni aspernatur suscipit doloremque modi maxime?
					Obcaecati, libero.
				</p>
			</div>
			<div className="grid-between">
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
		</ProyectosCtn>
	);
}
