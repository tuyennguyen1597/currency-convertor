import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Container } from '@material-ui/core'
import './App.css';
import Convertor from './components/Convertor';


function App() {
	return (
		<Container maxWidth='md' className='container'>
			<Router>y
				<Routes>
					<Route path='/' Component={Convertor}></Route>
				</Routes>
			</Router>
		</Container>
	);
}

export default App;
