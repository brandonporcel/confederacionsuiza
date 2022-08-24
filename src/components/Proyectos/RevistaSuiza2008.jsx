import React from 'react';
import ProjectContainer from '../ProjectContainer';
import SubTitleAndDescription from '../SubTitleAndDescription';

export default function RevistaSuiza2008() {
	return (
		<div>
			<ProjectContainer
				title="Blog 2008: Entrevistas y la historia del colegio"
				when="2008"
				specialty="c"
				mainImg="https://1.bp.blogspot.com/_yX4lBoSwV0c/STgle7hfH7I/AAAAAAAAAIs/I4wa_FD3eQ8/s320/logo+E26.bmp"
			>
				<SubTitleAndDescription
					title="descripción"
					specialClass="subtitleClassProject"
					w="100"
				>
					<p>
						El{' '}
						<a
							href="https://larevistadela26.blogspot.com/"
							target="_blank"
							rel="noreferrer"
							className="linktoa"
						>
							Blog
						</a>{' '}
						fue producto de un proyecto institucional promovido por el PROMSE
						(Programa de Mejoramiento del Sistema Educativo). Allí se volcaron
						todas aquellas producciones realizadas por los alumnos de la Escuela
						Técnica nº 26, "Confederación Suiza", que hayan sido apreciadas
						tanto por los alumnos como por los docentes.
					</p>
					<br />
					<p>
						Lo que destaca en el blog son los trabajos de investigacion sobre la
						escuela. Los chicos de 3°2 hicieron una recopilacion de informacion
						sobre el colegio por medio de entrevistas a distintas autoridades
						del colegio.
					</p>
					<br />
					<h4>La Historia de la E.T. 26 “Confederación Suiza” Ayer y Hoy</h4>
					<p>
						"Este proyecto de investigación de historia oral tiene como objetivo
						principal lograr que los alumnos, especialmente de una escuela
						técnica se sientan motivados por la historia, en este caso de la
						historia de su escuela en base a testimonios orales, es decir
						experiencias de vida de los ex alumnos y docentes de la casa,
						recuperadas por los ellos, constituidos en entrevistadores. La
						Recopilación de datos facilitará la construcción de la historia
						pasada de la Escuela y la observación y datos actuales servirán para
						mostrar la Escuela de hoy con sus proyectos y especialidades". Se
						dice en la página.
					</p>
					<br />
					<p>Los links correspondientes:</p>
					<ul className="ulLsit">
						<li>
							El blog, en cuestion:{' '}
							<a
								href="https://larevistadela26.blogspot.com/"
								target="_blank"
								rel="noreferrer"
								className="linktoa"
							>
								larevistadela26.blogspot.com
							</a>
						</li>
						<li>
							Información más detallada del proyecto de investigación:{' '}
							<a
								href="https://proyectosdela26.blogspot.com/"
								target="_blank"
								rel="noreferrer"
								className="linktoa"
							>
								proyectosdela26.blogspot.com
							</a>
						</li>
						<li>
							<a
								href="https://historiadeayer2626.blogspot.com/"
								target="_blank"
								rel="noreferrer"
								className="linktoa"
							>
								LA ET Nº 26 “ AYER”
							</a>
						</li>
						<li>
							<a
								href="https://historiadelaet26.blogspot.com//"
								target="_blank"
								rel="noreferrer"
								className="linktoa"
							>
								HISTORIA DE LA ESCUELA TÉCNICA 26 "HOY"
							</a>
						</li>
					</ul>
				</SubTitleAndDescription>
			</ProjectContainer>
		</div>
	);
}
