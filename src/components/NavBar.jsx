import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class NavBar extends Component  {
	render() {
		return(
			<nav className="navbar">
				<h1>PlaceHolder</h1>
				<HamburgerMenu className="hamburger" />
			</nav>
		)
	}
}

export default NavBar;