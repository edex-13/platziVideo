import React from 'react';

import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/images/play-icon.png'
import plusIcon from '../assets/images/plus-icon.png'
const CarouselItem = ({ cover, title="Error", year, contentRating, duration }) => (
	<div className="carousel-item">
		<img
			className="carousel-item__img"
			src={cover} alt={`Imagen del video ${title}`} 
		/>
		<div className="carousel-item__details">
			<div>
				<img className="carousel-item__details--img" src={playIcon} alt="Play" />
				<img className="carousel-item__details--img" src={plusIcon} alt="Plus" />
			</div>
			<p className="carousel-item__details--title">{title}</p>
			<p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
		</div>
	</div>
);

export default CarouselItem;
