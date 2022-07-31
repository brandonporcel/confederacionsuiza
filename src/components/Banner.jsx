import styled from 'styled-components';
const BannerCtn = styled.div`
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
export default function Banner({ img }) {
	return (
		<BannerCtn>
			<img src={img} alt="banner" />
		</BannerCtn>
	);
}
