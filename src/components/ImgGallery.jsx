import { useState } from 'react';
import styled from 'styled-components';
const GalleryCtn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 0 10px;
	.galleryImgCtn {
		min-height: 400px;
		max-height: min-content;
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
		/* button {
			background: none;
			border: none;
			color: inherit;
			padding: 10px;
		} */
	}
`;

export default function ImgGallery({ galleryImages }) {
	const [galleryImage, setGalleryImage] = useState(1);
	const [loaded, setLoaded] = useState(false);

	const changeImage = (e) => {
		setGalleryImage(e.target.getAttribute('data-id'));
	};

	return (
		<GalleryCtn>
			<div
				className="galleryImgCtn"
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{galleryImages[galleryImage].type ? (
					<video width="400" controls muted>
						<source src={galleryImages[galleryImage].url} type="video/mp4" />
						Your browser does not support HTML video.
					</video>
				) : (
					<img
						src={galleryImages[galleryImage].url}
						title={galleryImages[galleryImage].title}
						alt={galleryImages[galleryImage].title}
						className={'galleryImg active'}
						onLoad={() => setLoaded(true)}
					/>
				)}

				{loaded === false && 'Cargaando...'}
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
							{/* <button>•</button> */}•
						</li>
					))}
				</ul>
			</div>
		</GalleryCtn>
	);
}
