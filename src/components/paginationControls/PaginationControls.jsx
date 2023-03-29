// icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
// styles
import './PaginationControls.scss';

const PaginationControls = ({
	currentPage,
	setCurrentPage,
	resultsPerPage,
}) => {
	const handleClick = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className='pagination-control'>
			{currentPage > 1 && (
				<button
					onClick={() => handleClick(currentPage - 1)}
					className='btn btn--pagination-arrow'
				>
					<AiOutlineArrowLeft />
				</button>
			)}

			<div className='btn btn--pagination-value'>
				<span>{currentPage}</span>
			</div>
			{currentPage < resultsPerPage && (
				<button
					onClick={() => handleClick(currentPage + 1)}
					className='btn pagination-control__button'
				>
					<AiOutlineArrowRight />
				</button>
			)}
		</div>
	);
};

export default PaginationControls;
