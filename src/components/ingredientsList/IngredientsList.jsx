import './IngredientsList.scss';
const IngredientsList = (props) => {
	return (
		<div className='ingredients'>
			<h4 className='ingredients__name'>{props.name}:</h4>
			<ul>
				{props.ingredients.map((el, index) => {
					const fullIngredient = `${el.name} - ${el.amount.value} ${el.amount.unit}`;
					return <li key={index}>{fullIngredient}</li>;
				})}
			</ul>
		</div>
	);
};

export default IngredientsList;
