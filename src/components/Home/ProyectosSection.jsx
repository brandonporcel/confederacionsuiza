import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectsContext from '../../context/ProjectsContext';
import ProyectoItem from './ProyectoItem';

const ProyectosCtn = styled.section`
	text-align: center;
	.sectionTitle {
		span {
			color: var(--blue);
		}
	}
	.proyectos-ctn {
		padding: 0 5px;
		/* min-width: min-content; */
		/* max-width: 85%; */

		margin: 0 auto;
	}
	.seeMore {
		margin-top: 25px;
		display: inline-block;
		color: var(--blue);
		text-decoration: underline;
		font-size: 17px;
	}
`;
export default function ProyectosSection() {
	const { firstThree } = useContext(ProjectsContext);

	return (
		<ProyectosCtn id="proyectos" className="section tooLarge">
			<h3 className="sectionTitle">
				Proyectos de <span>los/as estudiantes</span>
			</h3>
			<div className="flexBetween overflowAuto gap20 proyectos-ctn">
				{firstThree.map((el, i) => (
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
