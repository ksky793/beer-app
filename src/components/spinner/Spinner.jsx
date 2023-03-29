import { FaSpinner } from 'react-icons/fa';
const Spinner = (props) => {
	if (props.loading) {
		return <FaSpinner className='spinner' />;
	}
	return props.children;
};

export default Spinner;
