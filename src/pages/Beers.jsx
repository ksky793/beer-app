import { useEffect, useState } from 'react';

import axios from 'axios';
import BeersList from '../components/beersList/BeersList';
import PaginationControls from '../components/paginationControls/PaginationControls';
import Spinner from '../components/spinner/Spinner';

const Beers = () => {
	const [loading, setLoading] = useState(false);

	const [results, setResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isError, setIsError] = useState(false);
	const [totalPages, setTotalPages] = useState();

	useEffect(() => {
		const fetchBeers = async () => {
			setLoading(true);
			try {
				const res = await axios.get(`https://api.punkapi.com/v2/beers`);
				console.log(res.data);

				setResults(res.data);

				const totalPages = Math.ceil(res.data.length / 12);

				setTotalPages(totalPages);
				setLoading(false);
			} catch (err) {
				setLoading(false);
				setIsError(true);
			}
		};
		fetchBeers();
	}, []);

	const startIndex = (currentPage - 1) * 12;
	const endIndex = startIndex + 12;
	const currentResults = results.slice(startIndex, endIndex);

	return (
		<div className='beers-page wrapper p--70 '>
			<h1 className='page__title beers-page__title'>Beers</h1>
			{/* błąd pobierania */}
			{isError && <p className='invalid-control'>Fetching Error</p>}

			{!isError && (
				<Spinner loading={loading}>
					<BeersList results={currentResults} />
					<PaginationControls
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages}
					/>
				</Spinner>
			)}
		</div>
	);
};

export default Beers;
