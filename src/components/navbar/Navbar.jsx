import { Link } from 'react-router-dom';
import { useState } from 'react';
// icons
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// styles
import './Navbar.scss';
const Navbar = () => {
	const navList = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Beers',
			link: '/beers',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
		{
			name: 'About',
			link: '/about',
		},
	];

	const [showNavbar, setShowNavbar] = useState(false);

	const toggleNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const handleClickItem = () => {
		if (showNavbar) {
			setShowNavbar(false);
		}
	};
	return (
		<nav className='navbar'>
			<div className='wrapper'>
				<div className='navbar__logo'>
					<Link to='/' className='navbar__logo__text'>
						Beer<span>Mania+</span>
					</Link>
				</div>
				<ul className={`navbar__links ${showNavbar && 'navbar__links--open'}`}>
					{navList.map((el, index) => (
						<li className='navbar__links__link' key={index}>
							<Link to={el.link} onClick={handleClickItem}>
								{el.name}
							</Link>
						</li>
					))}
				</ul>
				<div className='navbar__icon' onClick={toggleNavbar}>
					{showNavbar ? (
						<AiOutlineClose className='ic' />
					) : (
						<FaBars className='ic navbar__menu' />
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
