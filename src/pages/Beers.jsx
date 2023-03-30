import { useEffect, useState } from 'react';

import axios from 'axios';
import BeersList from '../components/beersList/BeersList';
import PaginationControls from '../components/paginationControls/PaginationControls';
import Spinner from '../components/spinner/Spinner';

const Beers = () => {
	const [loading, setLoading] = useState(false);

	const [results, setResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [resultsPerPage, setResultsPerPage] = useState(12);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchBeers = async () => {
			setLoading(true);
			try {
				const res = await axios.get(
					`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${resultsPerPage}`
				);
				setResults(res.data);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				setIsError(true);
			}
		};
		fetchBeers();
	}, [currentPage, resultsPerPage]);
	
	return (
		<div className='beers-page wrapper p--70 '>
			<h1 className='page__title beers-page__title'>Beers</h1>
			{/* błąd pobierania */}
			{isError && <p className='invalid-control'>Fetching Error</p>}

			{!isError && (
				<Spinner loading={loading}>
					<BeersList results={results} />
					<PaginationControls
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						resultsPerPage={resultsPerPage}
					/>
				</Spinner>
			)}
		</div>
	);
};

export default Beers;
