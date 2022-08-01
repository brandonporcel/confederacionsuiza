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