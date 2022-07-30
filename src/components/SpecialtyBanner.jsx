import styled from 'styled-components';
const Banner = styled.div`
	height: 300px;
	width: 100%;
	position: relative;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export default function SpecialtyBanner({ img }) {
	return (
		<Banner>
			<img src={img} alt="banner" />
		</Banner>
	);
}
