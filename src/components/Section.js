import React from 'react';
import Home from './section/Home';
import Blog from './section/Blog';
import Contact from './section/Contact';
import About from './section/About';
import Login from './section/Login';
import { Route } from 'react-router-dom';

// import { Container } from './styles';

function Section() {
	return (
		<section>
			<Route exact path="/" component={Home} />
			<Route path="/blog" component={Blog} />
			<Route path="/contact" component={Contact} />
			<Route path="/about" component={About} />
			<Route path="/login" component={Login} />
		</section>
	);
}

export default Section;
