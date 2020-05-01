import React, { useRef } from 'react';

const MovieListItem = ({ movie }) => {
	return (
		<div key={movie.imdbID} className='MovieListItem'>
			<div className='MovieListItem-poster'>
				<img src={movie.Poster} alt={movie.Title} />
			</div>
			<div className='MovieListItem-details-aside'>
				<p className='MovieListItem-details-aside-title'>
					{movie.Title}
				</p>
				<p className='MovieListItem-details-aside-year'>{movie.Year}</p>
			</div>
		</div>
	);
};

export default MovieListItem;
