import { Routes, Route } from 'react-router-dom';
// pages
import HomePage from '../pages/Home';
import BeersPage from '../pages/Beers';
import BeerPage from '../pages/Beer';

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/beers' element={<BeersPage />} />
			<Route path='/beers/:beerId' element={<BeerPage />} />
		</Routes>
	);
};

export default RoutesConfig;
