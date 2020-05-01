import React, { useRef, useEffect, useState } from 'react';

const MovieListItem = ({ movie }) => {
	const imgRef = useRef(null);
	const [imgCheck, setImgCheck] = useState(false);

	useEffect(() => {
		if (
			imgRef.current &&
			imgRef.current.complete &&
			imgRef.current.naturalHeight !== 0
		) {
			setImgCheck(true);
		}
	}, [imgRef]);

	useEffect(() => {
		console.log('load');
		setImgCheck(true);
	}, [imgCheck]);

	return imgCheck ? (
		<div key={movie.imdbID} className='MovieListItem'>
			<div className='MovieListItem-poster'>
				<img ref={imgRef} src={movie.Poster} alt={movie.Title} />
			</div>
			<div className='MovieListItem-details-aside'>
				<p className='MovieListItem-details-aside-title'>
					{movie.Title}
				</p>
				<p className='MovieListItem-details-aside-year'>{movie.Year}</p>
			</div>
		</div>
	) : null;
};

export default MovieListItem;
