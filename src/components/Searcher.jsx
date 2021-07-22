import React from 'react';
import "../assets/styles/components/Searcher.scss";

const search_title_text = '¿Qué quieres ver hoy?'
const search_input_placeholder = 'Buscar...'
const Searcher = () => (
	<section className="search">
		<h2 className="search__title">{search_title_text}</h2>
		<input className="input" type="text" placeholder={search_input_placeholder} />
	</section>
);
export default Searcher;
