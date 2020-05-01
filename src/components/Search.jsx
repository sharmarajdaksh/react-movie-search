import React, { useState, useEffect, useContext } from 'react';
import './Search.css';
import Context from '../context/context';

const Search = () => {
	const ctx = useContext(Context);
	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		let d;

		if (d) {
			clearInterval(d);
		}

		if (searchString.length < 3) return;

		d = setTimeout(() => {
			// TODO: Execute API call
			ctx.setApiSearchString(searchString);
		}, 500);

		return () => {
			clearInterval(d);
		};
	}, [searchString, ctx]);

	return (
		<div>
			<div className='Search'>
				<input
					className='Search-input'
					onChange={(e) => setSearchString(e.target.value)}
					value={searchString}
				/>
			</div>
		</div>
	);
};

export default Search;
