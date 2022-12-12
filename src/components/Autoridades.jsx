import React from 'react';
import styled from 'styled-components';
const autoridades = [
	{
		nombre: 'pablo conrado',
		cargo: 'rector',
	},
	{
		nombre: 'maría de los angeles galeazzi',
		cargo: 'vice-rectora',
	},
	{
		nombre: 'sandro armesto',
		cargo: 'regente TM',
	},
	{
		nombre: 'pablo los arcos',
		cargo: 'regente TT',
	},
	{
		nombre: 'claudio chapela',
		cargo: 'regente TN',
	},
	{
		nombre: 'enrique leivas',
		cargo: 'Jefe gral. de Enseñanza Práctica',
	},
	{
		nombre: 'Viviana Alonso',
		cargo: 'asesora pedagógica TM',
	},
	{
		nombre: 'Julieta González',
		cargo: 'Psicopedagoga TT',
	},
	{
		nombre: 'betina altieri',
		cargo: 'psicóloga',
	},
];
const AutoridadesCtn = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	margin-bottom: 20px;
	.autoridad-item {
		padding: 10px;

		min-width: 200px;
		text-align: center;
		text-transform: capitalize;
		h5 {
			font-size: 18px;
			margin-bottom: 10px;
			color: rgba(4, 17, 29, 0.9);
			font-weight: 600;
		}
		span {
			color: var(--gray);
		}
	}
`;
export default function Autoridades() {
	return (
		<AutoridadesCtn>
			{autoridades.map(({ nombre, cargo }, i) => (
				<div className="autoridad-item" key={i}>
					<h5>{nombre}</h5>
					<span>{cargo}</span>
				</div>
			))}
		</AutoridadesCtn>
	);
}
