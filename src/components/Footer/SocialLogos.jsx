import React from 'react';
import Facebook from '../svg/Facebook';
import Instagram from '../svg/Instagram';
import Linkedin from '../svg/Linkedin';
import Youtube from '../svg/Youtube';
import styled from 'styled-components';
const SocialCtn = styled.div`
	gap: 10px;
	display: grid;
	grid-template-columns: repeat(4, 30px);
	/* a {
		height: min-content;
		width: min-content;
		svg {
			width: 20px;
			height: 20px;
			margin-right: 10px;
		} */
	/* } */
`;
export default function SocialLogos({ color, specialClass }) {
	return (
		<SocialCtn className={`${specialClass ? specialClass : ''}`}>
			<a
				href="https://www.facebook.com/tecnica26/"
				target={'_blank'}
				rel="noreferrer"
				aria-label="Facebook Escuela Tecnica confederacion suiza"
			>
				<Facebook color={color} />
			</a>
			<a
				href="https://instagram.com/lasuizacompu"
				target={'_blank'}
				rel="noreferrer"
				aria-label="Instagram Escuela Tecnica confederacion suiza"
			>
				<Instagram color={color} />
			</a>
			<a
				href="https://www.youtube.com/channel/UCTKTGa96qO3ESC1t2JqzfzQ"
				target={'_blank'}
				rel="noreferrer"
				aria-label="Youtube Escuela Tecnica confederacion suiza"
			>
				<Youtube color={color} />
			</a>
			<a
				href="https://www.linkedin.com/school/et26suiza/"
				target={'_blank'}
				rel="noreferrer"
				aria-label="Linkedin Escuela Tecnica confederacion suiza"
			>
				<Linkedin color={color} />
			</a>
		</SocialCtn>
	);
}
