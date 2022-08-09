import React from 'react';
import styled from 'styled-components';
import ProgramaTable from './ProgramaTable';
const ProgramasTablasCtn = styled.div`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	max-width: 850px;
	margin-bottom: 20px;
`;
export default function ProgramasTablas({ materias }) {
	return (
		<ProgramasTablasCtn>
			<p>
				Las materias que tendran que cursar los alumnos son las siguientes.
				Clickeando en el año podran ver el programa curricular de cada año y
				cada materia.
			</p>
			{materias.map(({ ano, materias, programas }, i) => (
				<ProgramaTable
					key={i}
					ano={ano}
					materias={materias}
					programas={programas}
				/>
			))}
		</ProgramasTablasCtn>
	);
}
