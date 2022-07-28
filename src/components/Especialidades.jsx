import React from 'react';
import styled from 'styled-components';
import EspecialidadItem from './EspecialidadItem';
const especialidades = [
	{
		thumbnail:
			'https://www.buenosaires.gob.ar/sites/gcaba/files/secundaria_del_futuro.jpeg',
		title: 'Ciclo Básico',
		description:
			'El Ciclo Básico Común es una herramienta articuladora para que todos los alumnos lleguen al primer',
	},
	{
		thumbnail: './images/automotoresthumbnail.jpg',
		title: 'Automotores',
		description:
			'El técnico en automotores se desempeña en los procesos de compra y/o venta de productos del área automotriz, establece las características técnicas de la compra, interpretando los objetivos y funciones de las distintas partes, componentes y sistemas del automotor',
	},
	{
		thumbnail: 'https://econojournal.com.ar/cntnt/uploads/2019/01/3.jpg',
		title: 'Computación',
		description:
			'Un técnico en computación e informática puede desempeñarse en el diseño y desarrollo de sistemas informáticos, aplicaciones y base de datos, entre otros',
	},
];
const EspecialidadesCtn = styled.section`
	/* height: 100vh; */
	/* background: red; */
	padding: 50px 100px;
	.sectionTitle {
		text-align: center;
		margin-bottom: 50px;
		color: var(--titles-color);
	}
	.specialtyCtn {
		display: flex;
		justify-content: space-between;
		margin-bottom: 50px;
		.specialtyItem {
			background: red;
			margin-bottom: 20px;
		}
	}
`;
export default function Especialidades() {
	return (
		<EspecialidadesCtn id="especialidades">
			<h2 className="sectionTitle">1er Ciclo y Especialidades</h2>
			<div className="specialtyCtn">
				{especialidades.map((el, i) => (
					<EspecialidadItem
						key={i}
						title={el.title}
						description={el.description}
						thumbnail={el.thumbnail}
					/>
				))}
			</div>
		</EspecialidadesCtn>
	);
}
