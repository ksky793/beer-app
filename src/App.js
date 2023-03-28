// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainLayout from './layouts/MainLayout';
// routes
import RoutesConfig from './routes/routes';

function App() {
	const navbar = <Navbar />;
	const footer = <Footer />;
	const content = <RoutesConfig />;

	return (
		<div className='App'>
			<MainLayout navbar={navbar} content={content} footer={footer} />
		</div>
	);
}

export default App;
