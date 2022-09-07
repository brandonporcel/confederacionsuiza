const { createContext } = require('react');
const contactData = {
	number: '11 4931-1947',
	mainMail: 'det_26_de6@bue.edu.ar',
	regencia: 'regencia@et26.edu.ar',
};
const ContactContext = createContext();
const ContactProvider = ({ children }) => {
	// const { number, mainMail, regencia } = contactData;
	const data = { contactData };
	return (
		<ContactContext.Provider value={data}>{children}</ContactContext.Provider>
	);
};
export { ContactProvider };
export default ContactContext;
