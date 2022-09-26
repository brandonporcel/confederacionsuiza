const { createContext } = require('react');
const contactData = {
	number: '11 4931-1947',
	mainMail: 'det_26_de6@bue.edu.ar',
	regencia: 'regencia@et26.edu.ar',
};
const socialLinks = {
	facebook: 'https://www.facebook.com/tecnica26',
	instagram: 'https://instagram.com/lasuizacompu',
	youtube: 'https://www.youtube.com/channel/UCTKTGa96qO3ESC1t2JqzfzQ',
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
