import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Search from './Search';
import Context from '../context/context';
import MovieList from './MovieList';
import { omdbApiKey } from '../config';

function App() {
	const [apiSearchString, setApiSearchString] = useState('');
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			const res = await axios.get(
				`http://www.omdbapi.com/?s=${apiSearchString}&apikey=${omdbApiKey}`
			);
			console.log(res);
			setMovies(res.data.Response === 'True' ? res.data.Search : []);
		};
		fetchMovies();
	}, [apiSearchString]);

	return (
		<Context.Provider
			value={{
				apiSearchString: apiSearchString,
				setApiSearchString: setApiSearchString,
				movies: movies,
				setMovies: setMovies,
			}}
		>
			<div className='App'>
				<div className='App-header'>
					Search for your favorite Movies.
				</div>
				<Search />
				<MovieList />
			</div>
		</Context.Provider>
	);
}

export default App;
