import { useState } from 'react';
import styled from 'styled-components';
const faqData = [
	{
		question: '¿Cuándo es la inscripción a 1° año?',
		answer:
			'La inscripción a 1° año es en febrero. Hay que acercarse a regencia y entregar la documentacion correspondiente. Será avisado en la pagina de facebook del colegio cualquier incoveniente que pudiese ocurrir.',
	},
	{
		question: '¿Cuando es la inscripción de 2to a 6to año?',
		answer:
			'Para los años de 2° a 6°, la inscripción se realiza al finalizar el ciclo lectivo, a partir del mes de diciembre. Recordemos que al pasar de año, se tiene asegurada la vacante. ',
	},
	{
		question: '¿Se puede elegir turno?',
		answer:
			'El turno de teoría es asignado al ingresar a primer año y se mantiene a lo largo de la trayectoria dependiendo de la especialidad que elijas.',
	},
	{
		question: '¿Cuándo empiezan las clases?',
		answer:
			'Según la agenda educativa del Ministerio de Educación de la Ciudad de Buenos Aires.',
	},
	{
		question: '¿Cómo se tramita el certificado de alumno regular? ',
		answer:
			'El alumno simplemente tendrá que pedirsela a su preceptor indicando a quien debe ser extendido.',
	},
	{
		question: '¿Cuando es la mesa de examen de previos y completar estudios?',
		answer:
			'Según la agenda educativa del Ministerio de la Ciudad de buenos aires, hay 3 instancias para previos, febrero, julio y diciembre. Para completar estudios depende de la cantidad de asignaturas que adeudes.',
	},
	{
		question: '¿Cómo me anoto en Beca Ciudad?',
		answer:
			'A traves de la web https://becasciudad.bue.edu.ar/ en las fechas de inscripcion correspondies; se estaran comunicando tal fechas a traves del facebook de la escuela.',
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
				button {
					background: none;
					border: none;
					span {
						padding: 10px 5px;
					}
				}
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
					font-size: 18px;
				}
				&.selected {
					display: block;
				}
			}
		}
	}
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		width: 100%;
		.accordionWrapper {
			.accordionItem {
				.question h4 {
					font-size: 18px;
				}
				.answer p {
					font-size: 16px;
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
					Si tenes otra duda podes consultar de forma presencial en regencia o
					por mail.
				</p>
			</div>
			<div className="accordionWrapper">
				{faqData.map(({ question, answer }, i) => (
					<div key={i} className="accordionItem">
						<div className="question" onClick={() => handleAnswer(i)}>
							<h4 className={`${selected === i ? 'selected' : ''}`}>
								{question}
							</h4>
							<button>
								<span> {selected === i ? '-' : '+'} </span>
							</button>
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
