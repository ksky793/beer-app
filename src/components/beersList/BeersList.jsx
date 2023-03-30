import { Link } from 'react-router-dom';
// components
import BeerCard from './beerCard/BeerCard';
// styles
import './BeersList.scss';

const BeersList = (props) => {
	return (
		<div className='beers'>
			{props.results.map((beer) => (
				<Link to={`/beers/${beer.id}`} key={beer.id} className='beers__beer'>
					<BeerCard {...beer} />
				</Link>
			))}
		</div>
	);
};

export default BeersList;
