import React from 'react';
import './index.css';
import Header from './components/Header';
import Section from './components/Section';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Section />
			</div>
		</Router>
	);
}

export default App;
