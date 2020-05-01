import { createContext } from 'react';

export default createContext({
	movies: [],
	setMovies: () => {},
	apiSearchString: '',
	setApiSearchString: () => {},
});
