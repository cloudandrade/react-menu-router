import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Nav() {
	let [toggle, setToggle] = useState(false);

	let menuToggle = () => {
		setToggle(!toggle);
	};

	return (
		<>
			<ul className={toggle ? 'toggle' : ''}>
				<li onClick={toggle ? () => menuToggle() : null}>
					<Link to="/">Home</Link>
				</li>
				<li onClick={toggle ? () => menuToggle() : null}>
					<Link to="/blog">Blog</Link>
				</li>
				<li onClick={toggle ? () => menuToggle() : null}>
					<Link to="/contact">Contact</Link>
				</li>
				<li onClick={toggle ? () => menuToggle() : null}>
					<Link to="/about">About</Link>
				</li>
				<li onClick={toggle ? () => menuToggle() : null}>
					<Link to="/login">Login / Register</Link>
				</li>
				<li className="close" onClick={menuToggle}>
					X
				</li>
			</ul>
			<div className="menu" onClick={menuToggle}>
				Menu
			</div>
		</>
	);
}

export default Nav;
