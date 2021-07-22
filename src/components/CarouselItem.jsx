import React from 'react';

import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/images/play-icon.png'
import plusIcon from '../assets/images/plus-icon.png'
const CarouselItem = () => (
	<div className="carousel-item">
		<img
			className="carousel-item__img"
			src="https://images.pexels.com/photos/6497758/pexels-photo-6497758.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
			alt="Imagen"
		/>
		<div className="carousel-item__details">
			<div>
				<img className="carousel-item__details--img" src={playIcon} alt="Play" />
				<img className="carousel-item__details--img" src={plusIcon} alt="Plus" />
			</div>
			<p className="carousel-item__details--title">Titulo descriptivo</p>
			<p className="carousel-item__details--subtitle">Subtitulo descriptivo</p>
		</div>
	</div>
);

export default CarouselItem;
