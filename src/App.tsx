import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';

import { Container } from '@material-ui/core'
import './App.css';
import Convertor from './components/Convertor';


function App() {
	return (
		<Provider store={store}>
			<Container maxWidth='md' className='container'>
				{/* <Router>
					<Routes>
						<Route path='/' Component={Convertor}></Route>
					</Routes>
				</Router> */}
				<Convertor/>
			</Container>
		</Provider>
	);
}

export default App;
