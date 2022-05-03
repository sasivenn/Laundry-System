import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './About'
import Services from './services'
import App from './App';
import Home from './Home';
import Contact from './contact';
import Login from './login';
function Header() {
	return (
		<React.Fragment>
			<header class="header-navbar">
				<Link to="/" class="logo"><img src="images/logo1.png" /></Link>
				<input class="menu-btn" type="checkbox" id="menu-btn" />
				<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
				<ul class="menu">
					<li><Link to="/"> Home </Link></li>
					<li><Link to="/about"> About Us </Link></li>
					<li><Link to="/services"> Services </Link></li>
					<li><a href="https://blog.rxn8893.uta.cloud/blog/"> Blog </a></li>
					<li><Link to="/contact"> Contact </Link></li>
					<li><Link to="/login"> Login </Link></li>
				</ul>
			</header>
		</React.Fragment>
	);
}
export default Header;