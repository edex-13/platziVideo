import React from 'react';
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
const App = () => (
	<React.Fragment>
		<Header />
		<Searcher/>
		<Categories title="Mi lista">
			<Carousel>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
				<CarouselItem/>
			</Carousel>
		</Categories>
		<Footer/>
	</React.Fragment>
);
export default App;
