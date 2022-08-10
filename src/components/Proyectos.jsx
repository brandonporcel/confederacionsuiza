import React, { useContext } from 'react';
import styled from 'styled-components';
import ProjectsContext from '../context/ProjectsContext';
import ProyectoItem from './Home/ProyectoItem';
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
	const { allProjects } = useContext(ProjectsContext);
	return (
		<ProyectosCtn className="section">
			<h2>Proyectos</h2>
			<div className="description-text">
				<p>
					Proyectos de alumnos coordinados por docentes o de forma
					independiente. Participaciones en ferias tecnologicas, competiciones,
					exposiciones y más.
				</p>
			</div>
			<div className="grid-between">
				{allProjects.map((el, i) => (
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
