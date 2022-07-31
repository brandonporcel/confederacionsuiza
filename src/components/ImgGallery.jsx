import { useState } from 'react';
import styled from 'styled-components';
const GalleryCtn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px 0 10px;
	.galleryImgCtn {
		height: 400px;
		width: 500px;

		position: relative;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: contain;
			display: none;
		}
		img.active {
			display: initial;
		}
	}

	.dots-slider {
		ul {
			li {
				padding: 5px;
				margin-right: 10px;
				display: inline-block;
				cursor: pointer;
				font-size: 20px;
				color: var(--blue);
				opacity: 0.25;

				&.active {
					opacity: 1;
				}
			}
		}
	}
`;
const galleryImages = [
	{
		id: 0,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'http://4.bp.blogspot.com/_yX4lBoSwV0c/STgc03_q9oI/AAAAAAAAAHU/lnsPTnSL3HY/s320/EDIFICIO_2.JPG',
	},
	{
		id: 1,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'http://1.bp.blogspot.com/_SrsBWUoWIYs/TFrzE84N1AI/AAAAAAAABKs/xcnuKfa0YxQ/s1600/Confederaci%C3%B3n+Suiza+2.jpg',
	},
	{
		id: 2,
		title: 'confederacion suiza imagen institucional',
		active: null,
		url: 'https://elegircolegio.com/images/made/images/remote/https_calidad.elegircolegio.com/images/uploads/colegios/F_020086500_370_161_ffffff_bor3_319ad0_tl_27_br_27_s.jpg',
	},
];

export default function ImgGallery() {
	const [galleryImage, setGalleryImage] = useState(1);
	const changeImage = (e) => {
		setGalleryImage(e.target.getAttribute('data-id'));
	};
	return (
		<GalleryCtn>
			<div className="galleryImgCtn">
				<img
					className={'galleryImg active'}
					src={galleryImages[galleryImage].url}
					alt={galleryImages[galleryImage].title}
				/>
			</div>
			<div className="dots-slider">
				<ul className="dots-list">
					{galleryImages.map(({ id }) => (
						<li
							key={id}
							data-id={id}
							className={`sliderDot ${
								id === galleryImages[galleryImage].id ? 'active' : ''
							}`}
							onClick={changeImage}
						>
							•
						</li>
					))}
				</ul>
			</div>
		</GalleryCtn>
	);
}
