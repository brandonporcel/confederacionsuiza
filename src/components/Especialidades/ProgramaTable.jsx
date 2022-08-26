import React from 'react';
import styled from 'styled-components';
const Table = styled.div`
	text-align: center;
	margin: 20px 0;

	.thead {
		background: var(--blue);
		padding: 10px;
		width: 300px;
		color: var(--white);
		font-weight: 500;
		&:hover {
			background: var(--blue-hover);
		}
	}
	ul {
		li {
			padding: 10px;
			display: block;
			border: 2px solid var(--blue);
			border-top-color: transparent;
			text-transform: capitalize;
			color: var(--gray);
			width: 300px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
	}
`;
export default function ProgramaTable({ ano, materias, programas }) {
	return (
		<Table>
			<a href={programas} target="_blank" rel="noreferrer">
				<div className="thead">{ano} Año</div>
			</a>
			<ul>
				{materias.map((materia, index) => (
					<li key={index}>{materia}</li>
				))}
			</ul>
		</Table>
	);
}
