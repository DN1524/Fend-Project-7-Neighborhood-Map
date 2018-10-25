import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import SideBar from "./SideBar";
import $ from 'jquery';

class NavBar extends Component  {
	state = {
    open: true
  }
  // syncs the boolean of this.state and the burgerMenu.
  handleClick = () => {
  	this.setState({open: this.state.open ? false : true})
  	if (this.state.open === false) {
  		$(".sidebar").removeClass("hidden");
  	} else {
  		$(".sidebar").addClass("hidden");
  	}
  }
	render() {
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
				<SideBar 
					state={this.state} 
					results={this.props.results} 
					markers={this.state.markers}
					updateVenues={this.props.updateVenues}
				/>
			</div>
		)
	}
}

export default NavBar;