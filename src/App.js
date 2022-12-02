import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import MainRouter from './MainRouter.jsx';


function App() {
	return (
		<Router>
			<Navbar/>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<MainRouter/>
			</div>
		</Router>
	);
}

export default App;
