import React from 'react';
import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';

export default function DesafioEco() {
	return (
		<ProjectContainer
			title="Desafio Eco Edición 2013"
			mainImg="./images/proyectos/desafioeco2013/eco_auto.webp"
			when="2013"
			specialty="a"
		>
			<SubTitleAndDescription
				title="Descripción"
				specialClass="subtitleClassProject"
				w="100"
			>
				<p>
					El desafío ECO es una competencia en el que los alumnos de escuelas
					técnicas de todo el país. El mismo consiste en que un grupo
					seleccionado de estudiantes diseñen y construyan, con la guía de sus
					profesores y el asesoramiento de técnicos, un automóvil eléctrico,
					alimentado por baterías y capaz de recorrer la mayor distancia posible
					en un tiempo máximo de dos horas.
				</p>
				<br />
				<p>
					En 2013 los alumnos de automotores participaron en el evento,
					patrocinados por Ajedio Asesores quien permitió la conformación del
					vehículo 18. Después de meses de arduo trabajo el auto está listo y se
					puso en marcha en la primera vuelta. Después de varias vueltas
					recorridas, debido a un pequeño accidente nos dejó fuera de la
					competencia.
				</p>
			</SubTitleAndDescription>
			<SubTitleAndDescription
				title="Mas información"
				specialClass="subtitleClassProject"
				w="100"
			>
				<ul>
					<li>
						<a
							className="linktoa"
							href="http://www.ejido-asesores.com/patrocinio-de-la-escuela-tecnica-n-26-confederacion-suiza-en-el-desafio-eco/"
							rel="noreferrer"
							target="_blank"
						>
							Patrocinio de la Escuela Técnica N° 26 “Confederación Suiza” en el
							“Desafío Eco” | Ejido Asesores (ejido-asesores.com)
						</a>
					</li>
					<br />
					<li>
						<a
							className="linktoa"
							href="https://www.facebook.com/tecnica26/posts/517570254994235/"
							rel="noreferrer"
							target="_blank"
						>
							(20+) Escuela Técnica Confederación Suiza - Publicaciones |
							Facebook
						</a>
					</li>
					<br />
					<li>
						<a
							className="linktoa"
							href="https://fundacionypf.org/Paginas/noticias/Desaf%C3%ADo_ECO_YPF.aspx"
							rel="noreferrer"
							target="_blank"
						>
							Desafío_ECO_YPF (fundacionypf.org)
						</a>
					</li>
				</ul>
			</SubTitleAndDescription>
		</ProjectContainer>
	);
}
