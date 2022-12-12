import styled from 'styled-components';

const NovedadesCtn = styled.section`
	text-align: center;
	.sectionTitle {
		color: var(--blue);
	}
	iframe {
		width: 90%;
		margin-bottom: 10px;
	}
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		iframe {
			width: 100%;
		}
	}
	@media only screen and (min-width: 1500px) {
		iframe {
			height: 600px;
		}
		.biggerFont {
			font-size: 28px;
		}
	}
`;
export default function Novedades() {
	return (
		<NovedadesCtn className="section">
			<h3 className="sectionTitle biggerFont">
				FORMULARIO DE INSCRIPCIÓN 2023
			</h3>
			<iframe
				src="https://drive.google.com/file/d/1iFfrrdG9SsRK_NiKY5HsNjZi1Dpp9__i/preview"
				width="640"
				height="480"
				allow="autoplay"
				title="FORMULARIO DE INSCRIPCION 2023"
				loading="lazy"
			></iframe>
			<br />
			<br />
			<br />
			<h3 className="sectionTitle biggerFont">
				FORMULARIO DE INSCRIPCIÓN DE 2DO A 6TO AÑO
			</h3>
			<iframe
				src="https://drive.google.com/file/d/12LXTVO6ZgRqF67veFBgpgxUYdsCfLsRV/preview"
				width="640"
				height="480"
				allow="autoplay"
				title="FORMULARIO DE INSCRIPCIÓN DE 2DO A 6TO AÑO"
				loading="lazy"
			></iframe>
		</NovedadesCtn>
	);
}
