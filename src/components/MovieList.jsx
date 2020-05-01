import React, { useContext } from 'react';

import Context from '../context/context';
import MovieListItem from './MovieListItem';
import './MovieListItem.css';

const MovieList = () => {
	const ctx = useContext(Context);

	const gridStyles = {
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '33% 33% 33%',
        gridRowGap: '2rem',
        boxSizing: 'border-box'
	};

	return (
		<div style={gridStyles}>
			{ctx.movies.map((m) => {
				console.log(m);
				return <MovieListItem movie={m} />;
			})}
		</div>
	);
};

export default MovieList;