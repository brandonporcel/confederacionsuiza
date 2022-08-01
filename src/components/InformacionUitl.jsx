import { useState } from 'react';
import styled from 'styled-components';
const faqData = [
	{
		question: '¿Cuándo es la inscripción a 1° año?',
		answer:
			'El proyecto es una aplicación web que permite a los usuarios registrados de la Universidad Tecnológica de Panamá, realizar una solicitud de ayuda para una persona en particular, y que sea atendida por una persona de la Universidad Tecnológica de Panamá. El proyecto está desarrollado en ReactJS, con el framework de diseño de Material-UI, y se encuentra en desarrollo.',
	},
	{
		question: '¿Cuándo se elige la especialidad?',
		answer: 'El 1er año de inscripciones es el día 1 de marzo de 2020.',
	},
	{
		question: '¿Cuándo es la inscripción?',
		answer: 'El tiempo para inscribirse es de 1 mes.',
	},
	{
		question: '¿Se puede elegir turno?',
		answer: 'El documento que debe presentar es el siguiente:',
	},
	{
		question: '¿Cómo se consigue la constancia para boleto estudiantil? ',
		answer:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat expedita repellat aspernatur velit officiis a iure similique. Quia dolorem quidem minus fuga sunt nemo, exercitationem itaque doloremque eveniet hic.',
	},
	{
		question: '¿Cuando es la mesa de examen de previos y completar estudios?',
		answer:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugiat expedita repellat aspernatur velit officiis a iure similique. Quia dolorem quidem minus fuga sunt nemo, exercitationem itaque doloremque eveniet hic.',
	},
];

const InfUtilCtn = styled.div`
	text-align: center;
	width: 70%;
	margin: 0 auto;
	h2 {
		font-size: 34px;
		margin-bottom: 20px;
		color: var(--titles-color);
		text-transform: capitalize;
	}
	p {
		font-style: italic;
		color: var(--gray-secondary);
	}
	.accordionWrapper {
		padding: 10px;
		text-align: left;
		margin: 40px 0;
		.accordionItem {
			margin-top: 15px;
			padding-bottom: 10px;
			border-bottom: 1px solid var(--gray-line);
			.question {
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: pointer;
				h4 {
					font-weight: 400;
					font-size: 20px;
					&.selected {
						font-weight: 500;
					}
				}

				span {
					font-size: 24px;
					color: var(--gray-secondary);
				}
			}
			.answer {
				display: none;

				p {
					margin-top: 10px;
					font-style: initial;
					color: var(--gray);
				}
				&.selected {
					display: block;
				}
			}
		}
	}
`;
export default function InformacionUitl() {
	const [selected, setSelected] = useState(null);

	const handleAnswer = (i) => {
		// si habia un item seleccionado, se deselecciona(?)
		if (selected === i) setSelected();
		setSelected(i);
	};
	return (
		<InfUtilCtn className="section">
			<h2>Pregunas Frecuentes</h2>
			<div className="description-text">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugit
				</p>
			</div>
			<div className="accordionWrapper">
				{faqData.map(({ question, answer }, i) => (
					<div key={i} className="accordionItem">
						<div className="question" onClick={() => handleAnswer(i)}>
							<h4 className={`${selected === i ? 'selected' : ''}`}>
								{question}
							</h4>
							<span> {selected === i ? '-' : '+'} </span>
						</div>
						<div className={selected === i ? 'answer selected' : 'answer'}>
							<p>{answer}</p>
						</div>
					</div>
				))}
			</div>
		</InfUtilCtn>
	);
}
