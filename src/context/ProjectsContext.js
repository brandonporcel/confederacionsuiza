const { createContext } = require('react');
let allProjects = [
	{
		title: 'Flecha Cosmica',
		link: '/flechacosmica',
		description:
			'Los estudiantes de la Escuela Técnica 26 Confederación Suiza de Balvanera fueron seleccionados entre 320 mil participantes de todo el mundo.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/56509914_1513882648754057_1057467346806898688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ahxS_K82gtYAX-9nPcI&_nc_ht=scontent.feze17-1.fna&oh=00_AT9BF2UDXIeKAHhUyacT7iHWdDOJV1FuUvw6f4qlCPALlQ&oe=6308054A',
		year: '2019',
		specialty: '💻',
	},
	{
		title: 'Eco Auto',
		link: '/ecoauto2019',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et.',
		thumbnail:
			'https://scontent.feze17-1.fna.fbcdn.net/v/t1.6435-9/41653800_1793791497406001_4809665611133091840_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=jhD1qmiU1UgAX-5ZZIy&_nc_ht=scontent.feze17-1.fna&oh=00_AT-6kYbyKAGXLj65ahDDbxsZs7RP1jHxjulFmq3lpnZQew&oe=6306D02B',
		year: '2019',
		specialty: '🚗',
	},
	{
		title: 'Huerta',
		link: '/huerta',
		description: 'los chicos hicieron una huerta en el 2do piso!',
		thumbnail:
			'https://imgserver1.fierro.com.ar/get/thumb/360/513/XCI-10578=9789875384057.jpg',
		year: '2021 - ',
		specialty: '📚',
	},
	{
		title: 'micro en Minecraft',
		link: '/minecraftmicro',
		description:
			'Creó un micro en Minecraft. Por cada par de bits, se utiliza un "full adder", el cual suma ambos bits y si es necesario agrega un +1 al siguiente full adder. Esto representa lo que hacemos nosotros con la suma vertical al "llevarnos una".',
		thumbnail:
			'https://img3.schoolandcollegelistings.com/013/713/3933146630137133.jpg',
		year: '2021',
		specialty: '📚',
	},
	{
		title: 'revista suiza',
		link: '/revistasuiza2008',
		description:
			'Este blog es producto de un proyecto institucional promovido por el PROMSE. Aquí volcaremos todas aquellas producciones realizadas por los alumnos de la Escuela Técnica nº 26, "Confederación Suiza", que hayan sido apreciadas tanto por los alumnos como por los docentes.PROPS',
		thumbnail:
			'https://1.bp.blogspot.com/_yX4lBoSwV0c/STgle7hfH7I/AAAAAAAAAIs/I4wa_FD3eQ8/s320/logo+E26.bmp',
		year: '2008',
		specialty: '🚗💻',
	},
	{
		title: 'Lo que no te dicen del amor ',
		link: '/loquenotedicendelamor',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et',
		thumbnail:
			'https://scontent.feze10-1.fna.fbcdn.net/v/t1.6435-9/67251868_2250149821770164_4120072190437621760_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=57u-a-JN5NIAX8jUP5K&_nc_ht=scontent.feze10-1.fna&oh=00_AT825WPOJ9_ePrvJsjzPVmOAyn-wJDp_aGTO9oP2wIAgbQ&oe=63109B94',
		year: '2018',
		specialty: '🚗💻',
	},
	{
		title: 'FFL 2018 ',
		link: '/ffl2018',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra eros, odio est arcu ipsum, risus pellentesque et',
		thumbnail: './images/proyectos/fll2018.jpg',
		year: '2018',
		specialty: '💻',
	},
	{
		title: 'cansat ',
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
