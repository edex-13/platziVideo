import {useState, useEffect} from 'react';
const useInitialState = (API) => {
	const [videos, setvideos] = useState([]);
	useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => {
				setvideos(data);
			});
	}, []);
  return videos;
};
export default useInitialState;
