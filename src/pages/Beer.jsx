import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BeerCard from '../components/beersList/beerCard/BeerCard';
import axios from 'axios';
import { useState } from 'react';
import Spinner from '../components/spinner/Spinner';
const Beer = () => {
	const { beerId } = useParams();
	const [loading, setLoading] = useState(true);
	const [beerData, setBeerData] = useState({});

	useEffect(() => {
		const fetchBeerById = async () => {
			try {
				const res = await axios.get(
					`https://api.punkapi.com/v2/beers/${beerId}`
				);
				setBeerData(res.data[0]);
				setLoading(false);
			} catch (err) {
				setLoading(false);
			}
		};
		fetchBeerById();
	}, []);

	return (
		<div className='beer-page wrapper p--70'>
			<Spinner loading={loading}>
				<div className=' '>
					<BeerCard {...beerData} isFullDetailed />
				</div>
			</Spinner>
		</div>
	);
};

export default Beer;
