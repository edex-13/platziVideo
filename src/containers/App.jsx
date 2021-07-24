import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from "../hooks/useInitialState";
const App = () => {
	const API = 'http://localhost:8080/initialState'
	const initialState =useInitialState(API);
	console.log(initialState);
	return (
		<React.Fragment>
			<Header />
			<Searcher />
			<Categories title="Mi lista">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>
			<Categories title="Tendencia">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>
			<Categories title="Originales De Platzi Video">
				<Carousel>
					<CarouselItem />
				</Carousel>
			</Categories>
		</React.Fragment>
	);
};
export default App;
