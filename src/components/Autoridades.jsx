import React from 'react';
import styled from 'styled-components';
const autoridades = [
	{
		nombre: 'pablo conrado',
		cargo: 'rector',
	},
	{
		nombre: 'alicia sanchez',
		cargo: 'vice-rectora',
	},
	{
		nombre: 'maria galeazzi',
		cargo: 'regente tm',
	},
	{
		nombre: 'pablo los arcos',
		cargo: 'regente tt',
	},
	{
		nombre: 'maria cassinelli',
		cargo: 'regente tn',
	},
	{
		nombre: 'enrique leiva',
		cargo: 'subgerente',
	},
	{
		nombre: 'pablo fiscella',
		cargo: 'Jefe Gral. Practicas',
	},
	{
		nombre: 'Javier Rodriguez',
		cargo: 'secretaria',
	},
];
const AutoridadesCtn = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
	margin-bottom: 20px;
	.autoridad-item {
		padding: 10px 20px;
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
					<h5>{nombre} </h5>
					<span>{cargo}</span>
				</div>
			))}
		</AutoridadesCtn>
	);
}
