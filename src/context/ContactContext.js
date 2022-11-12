const { createContext } = require('react');
const contactData = {
	telefono: '11 4931-1947',
	regencia: 'regencia@et26.edu.ar',
	secretaría: 'det_26_de6@bue.edu.ar',
	cooperadora: 'coopedelasuiza@gmail.com',
	'Departamento de Orientación al Estudiante': 'doe@et26.edu.ar',
	taller: 'et26.tallersuiza@gmail.com',
	computación: {
		contact: 'computacion@et26.edu.ar',
		coordinador: 'Pablo Fiscella',
	},
	automotores: {
		contact: 'automotores@et26.edu.ar',
		coordinador: 'Nombre Apellido',
	},
};
const socialLinks = {
	facebook: 'https://www.facebook.com/tecnica26',
	instagram: 'https://instagram.com/lasuizacompu',
	youtube: 'https://www.youtube.com/c/tecnica26',
	linkedin: 'https://www.linkedin.com/school/et26suiza',
};
const ContactContext = createContext();
const ContactProvider = ({ children }) => {
	const data = { contactData, socialLinks };
	return (
		<ContactContext.Provider value={data}>{children}</ContactContext.Provider>
	);
};
export { ContactProvider };
export default ContactContext;
