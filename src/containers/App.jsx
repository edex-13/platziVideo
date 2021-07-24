import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
const App = () => {
	const API = 'http://localhost:8080/initialState';
	const initialState = useInitialState(API);
	console.log(initialState.mylist);
	return (
		<React.Fragment>
			<Header />
			<Searcher />
			{initialState.mylist?.length > 0 && (
				<Categories title="Mi lista">
					<Carousel>
						{initialState.mylist?.map((item) => (
							<CarouselItem key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}
			<Categories title="Tendencia">
				<Carousel>
					{initialState.trends?.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
			<Categories title="Originales De Platzi Video">
				<Carousel>
					{initialState.originals?.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
		</React.Fragment>
	);
};
export default App;
