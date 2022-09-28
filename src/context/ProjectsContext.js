const { createContext } = require('react');
let allProjects = [
	{
		title: 'Flecha Cósmica',
		link: '/flechacosmica',
		description:
			'Alumnos de 13 a 15 años de la escuela se quedaron con el primer puesto del torneo Nacional First Lego League (FLL) 2018 y lograron la clasificacion al torneo mundial de Robotica que se llevo a cabo en Houston, Estados Unidos del 17 al 20 de abril de 2019.',
		thumbnail: './images/proyectos/flechacosmica/flechacampeon.webp',
		year: '2018',
	},
	{
		title: 'Copa Robótica',
		link: '/coparobotica2019',
		description:
			'La Copa Robótica 2019 fue la etapa de clasificación local organizada por el Ministerio de Educación e Innovación y Educabot para elegir al equipo que participe en el mundial de First Global Challenge.',
		thumbnail: './images/proyectos/coparobotica2019/coparobotica2019.webp',
		year: '2019',
	},
	{
		title: 'Desafio Eco Edición 2013',
		link: '/desafioeco2003',
		description:
			'El desafío ECO es una competencia en el que los alumnos de escuelas técnicas de todo el país.',
		thumbnail: './images/proyectos/desafioeco2013/eco_auto.webp',
		year: '2013',
	},
	{
		title: 'Huerta',
		link: '/huerta',
		description: 'los chicos hicieron una huerta en el 2do piso!',
		thumbnail: './images/proyectos/huerta/huerta.jpg',
		year: '2021 - ',
	},

	{
		title: 'revista suiza',
		link: '/revistasuiza2008',
		description:
			'El Blog fue producto de un proyecto institucional promovido por el PROMSE (Programa de Mejoramiento del Sistema Educativo).',
		thumbnail:
			'https://1.bp.blogspot.com/_yX4lBoSwV0c/STgle7hfH7I/AAAAAAAAAIs/I4wa_FD3eQ8/s320/logo+E26.bmp',
		year: '2008',
	},

	{
		title: 'FFL 2019 - Convergencia 26',
		link: '/ffl2019',
		description:
			'FIRST® LEGO League es un programa internacional que fomenta el aprendizaje práctico de las STEM',
		thumbnail: './images/proyectos/fll2019/torneo-fll2019.png',
		year: '2019',
	},
	{
		title: 'cansat argentina',
		link: '/cansat',
		description:
			'CANSAT propone a estudiantes construir una carga útil, cuyo tamaño no supere al de una lata de gaseosa, (can = lata en inglés) y lanzarla en un cohete hasta una altitud aproximada de un kilómetro.',
		thumbnail: './images/proyectos/cansat/cansat.jpg',
		year: '2022',
	},
];

const ProjectsContext = createContext();
const ProjectsProvider = ({ children }) => {
	const firstThree = allProjects.slice(0, 3);

	const data = { allProjects, firstThree };
	return (
		<ProjectsContext.Provider value={data}>{children}</ProjectsContext.Provider>
	);
};
export { ProjectsProvider };
export default ProjectsContext;
