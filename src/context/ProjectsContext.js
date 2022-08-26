const { createContext } = require('react');
let allProjects = [
	{
		title: 'Flecha Cosmica',
		link: '/flechacosmica',
		description:
			'Alumnos de 13 a 15 años de la escuela se quedaron con el primer puesto del torneo Nacional First Lego League (FLL) 2018 y lograron la clasificacion al torneo mundial de Robotica que se llevo a cabo en Houston, Estados Unidos del 17 al 20 de abril de 2019.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/56509914_1513882648754057_1057467346806898688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ahxS_K82gtYAX-9nPcI&_nc_ht=scontent.feze17-1.fna&oh=00_AT9BF2UDXIeKAHhUyacT7iHWdDOJV1FuUvw6f4qlCPALlQ&oe=6308054A',
		year: '2018',
		specialty: '💻',
	},
	{
		title: 'Copa Robotica 2019',
		link: '/coparobotica',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et',
		thumbnail:
			'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/22152958/Edited-La-Escuela-T%C3%A9cnica-N.%C2%B026-%E2%80%9CConfederaci%C3%B3n-Suiza%E2%80%9D-ganadores-copa-rob%C3%B3tica-8.jpg',
		year: '2022',
		specialty: '💻',
	},
	{
		title: 'Desafio Eco',
		link: '/desafioeco',
		description: 'Autos electricos god.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/41653800_1793791497406001_4809665611133091840_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=jhD1qmiU1UgAX-5ZZIy&_nc_ht=scontent.feze17-1.fna&oh=00_AT-6kYbyKAGXLj65ahDDbxsZs7RP1jHxjulFmq3lpnZQew&oe=6306D02B',
		year: '2019',
		specialty: '🚗',
	},
	{
		title: 'Huerta',
		link: '/huerta',
		description: 'los chicos hicieron una huerta en el 2do piso!',
		thumbnail: './images/proyectos/huerta.jpg',
		year: '2021 - ',
		specialty: '📚',
	},
	{
		title: 'micro en Minecraft',
		link: '/minecraftmicro',
		description:
			'El estudiante Gaspar Chu luego de las clases de taller de computación creó un microprocesador en Minecraft',
		thumbnail:
			'https://img3.schoolandcollegelistings.com/013/713/3933146630137133.jpg',
		year: '2021',
		specialty: '📚',
	},
	{
		title: 'revista suiza',
		link: '/revistasuiza2008',
		description:
			'El Blog fue producto de un proyecto institucional promovido por el PROMSE (Programa de Mejoramiento del Sistema Educativo).',
		thumbnail:
			'https://1.bp.blogspot.com/_yX4lBoSwV0c/STgle7hfH7I/AAAAAAAAAIs/I4wa_FD3eQ8/s320/logo+E26.bmp',
		year: '2008',
		specialty: '🚗💻',
	},
	{
		title: 'Lo que no te dicen del amor ',
		link: '/loquenotedicendelamor',
		description: 'Para la feria de ciencias...',
		thumbnail:
			'https://scontent.feze10-1.fna.fbcdn.net/v/t1.6435-9/67251868_2250149821770164_4120072190437621760_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=57u-a-JN5NIAX8jUP5K&_nc_ht=scontent.feze10-1.fna&oh=00_AT825WPOJ9_ePrvJsjzPVmOAyn-wJDp_aGTO9oP2wIAgbQ&oe=63109B94',
		year: '2018',
		specialty: '🚗💻',
	},
	{
		title: 'FFL 2019 - Convergencia 26',
		link: '/ffl2019',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et',
		thumbnail: './images/proyectos/fll2018.jpg',
		year: '2018',
		specialty: '💻',
	},
	{
		title: 'cansat argentina',
		link: '/cansat',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et',
		thumbnail: './images/proyectos/cansat.jpg',
		year: '2022',
		specialty: '💻',
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
