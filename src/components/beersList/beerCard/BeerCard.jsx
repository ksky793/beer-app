// styles
import { useEffect } from 'react';
import IngredientsList from '../../ingredientsList/IngredientsList';
import './BeerCard.scss';
const BeerCard = (props) => {
	const { malt, yeast, hops } = props.ingredients;

	return (
		<div className={`beer-card ${!props.isFullDetailed && 'card'}`}>
			<div className='beer-card__image'>
				<img src={props.image_url} alt={props.name} />
			</div>
			<div
				className={`beer-card__details ${
					props.isFullDetailed && 'beer-card__details--more-info'
				}`}
			>
				<h2 className='beer-card__details__name'>{props.name}</h2>
				<p className='beer-card__details__tagline'>{props.tagline}</p>

				{props.isFullDetailed && (
					<>
						<p className='beer-card__details__type'>
							Description: <span>{props.description}</span>
						</p>
						<p className='beer-card__details__type'>
							Abv: <span>{props.abv}</span>
						</p>
						<p className='beer-card__details__type'>
							Ibu: <span>{props.ibu}</span>
						</p>
						<div className='beer-card__details__ingredients'>
							<h3 className='beer-card__details__type'>Ingredients</h3>
							<hr />
							<h4 className='ingredients__name'>
								Yeast: <span>{yeast}</span>
							</h4>
							<IngredientsList ingredients={malt} name='Malt' />
							<IngredientsList ingredients={hops} name='Hops' />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default BeerCard;
