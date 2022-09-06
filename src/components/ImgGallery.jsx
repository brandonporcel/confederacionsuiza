import { useState } from 'react';
import styled from 'styled-components';

const GalleryCtn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 0 10px;
	padding: 0 20px;
	.galleryImgCtn {
		min-height: 400px;
		max-height: min-content;
		max-width: 500px;
		min-width: 100%;

		position: relative;

		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: contain;
			display: none;
		}
		video {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		img.active {
			display: initial;
		}
		button {
			background: var(--blue);
			/* padding: 10px; */

			height: 40px;
			width: 40px;
			border: none;
			border-radius: 50%;
			font-weight: bold;
			font-size: 22px;
			color: var(--white);
			z-index: 20;
			cursor: pointer;
			margin: 0 5px;
			&:hover {
				background: var(--blue-hover);
			}
		}
	}

	.dots-slider {
		ul {
			li {
				margin-right: 5px;
				display: inline-block;
				cursor: pointer;
				font-size: 20px;
				color: var(--blue);
				opacity: 0.5;
				width: 30px;
				text-align: center;

				&:hover {
					opacity: 1;
				}
				&.active {
					opacity: 1;
				}
			}
		}
		button {
			background: none;
			color: inherit;
			border: none;
			padding: 0;
			font: inherit;
			cursor: pointer;
			width: 100%;
		}
	}
	@media only screen and (min-width: 320px) and (max-width: 675px) {
		margin-top: 10px;
		.galleryImgCtn {
			min-height: 300px;
		}
	}
`;

export default function ImgGallery({ galleryImages }) {
	const [galleryImage, setGalleryImage] = useState(1);

	const changeImage = (e) => {
		setGalleryImage(parseInt(e.target.getAttribute('data-id')));
	};
	const prevImg = () => {
		galleryImage === 0
			? setGalleryImage(galleryImages.length - 1)
			: setGalleryImage((galleryImage) => galleryImage - 1);
		console.log(galleryImages.length, galleryImage);
	};
	const nextImg = () => {
		galleryImage === galleryImages.length - 1
			? setGalleryImage(0)
			: setGalleryImage((galleryImage) => galleryImage + 1);
	};
	return (
		<GalleryCtn>
			<div className="galleryImgCtn">
				{galleryImages[galleryImage].type ? (
					<video width="400" controls muted>
						<source src={galleryImages[galleryImage].url} type="video/mp4" />
						Your browser does not support HTML video.
					</video>
				) : (
					<img
						src={galleryImages[galleryImage].url}
						alt={galleryImages[galleryImage].title}
						className={'galleryImg active'}
					/>
				)}
				<button onClick={prevImg}>
					<svg
						style={{ transform: 'rotate(180deg)' }}
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
					>
						<path
							d="M8.21545 1L14.1209 7.30189L8.21545 13.6038"
							stroke="var(--white)"
							strokeWidth="1.8"
						/>
						<path
							d="M0 7.30183H14.1209"
							stroke="var(--white)"
							strokeWidth="1.8"
						/>
					</svg>
				</button>
				<button onClick={nextImg}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="15"
						viewBox="0 0 16 15"
						fill="none"
					>
						<path
							d="M8.21545 1L14.1209 7.30189L8.21545 13.6038"
							stroke="var(--white)"
							strokeWidth="1.8"
						/>
						<path
							d="M0 7.30183H14.1209"
							stroke="var(--white)"
							strokeWidth="1.8"
						/>
					</svg>
				</button>
			</div>

			<div className="dots-slider">
				<ul className="dots-list">
					{galleryImages.map(({ id }) => (
						<li
							key={id}
							className={`sliderDot ${
								id === galleryImages[galleryImage].id ? 'active' : ''
							}`}
						>
							<button data-id={id} onClick={changeImage}>
								•
							</button>
						</li>
					))}
				</ul>
			</div>
		</GalleryCtn>
	);
}
