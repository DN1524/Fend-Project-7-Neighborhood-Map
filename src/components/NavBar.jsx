import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SideBar from "./SideBar"

class NavBar extends Component  {
	state = {
    open: true
  }

  handleClick = () => {
  	this.setState({open: this.state.open ? false : true})
  }

	render() {
		console.log(this.props)
		return(
			<div className="ui-container">
				<nav className="navbar">
					<h1>PlaceHolder</h1>
					<div className="hamburger-container">
						<HamburgerMenu
							isOpen={this.state.open}
							menuClicked={this.handleClick.bind(this)}
							strokeWidth={4}
							height={22}
						/>
					</div>
				</nav>
				<SideBar />
			</div>
		)
	}
}

export default NavBar;