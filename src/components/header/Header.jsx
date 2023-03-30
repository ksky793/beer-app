import { Link } from 'react-router-dom';
// styles
import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='wrapper'>
				<div className='header__content'>
					<h1 className='header__content__title'>
						A PLACE FOR <br /> A<span> GOOD </span>Taste
					</h1>
					<p className='header__content__description'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
						eos fugit non illum similique dolor voluptate molestias quam nulla
						repellat?
					</p>
					<Link to='/beers'>
						<button className='btn btn--our-products'>OUR PRODUCTS</button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
