import styled from 'styled-components';
const BannerCtn = styled.div`
	width: 100%;
	position: relative;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export default function Banner({ img, height }) {
	return (
		<BannerCtn style={{ height: `${height ? height : '300px'} ` }}>
			<img src={img} alt="banner escuela tecnica confederacion suiza" />
		</BannerCtn>
	);
}
