import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

class NavBar extends Component  {
	render() {
		return(
			<nav className="navbar">
				<h1>PlaceHolder</h1>
				<div className="hamburger-container">
					<HamburgerMenu
						strokeWidth={4}
						height={22}
					/>
				</div>
			</nav>
		)
	}
}

export default NavBar;