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
					<h1 tabindex="0">Chicago Restaurants</h1>
					<div className="hamburger-container">
						<HamburgerMenu
							isOpen={this.state.open}
							menuClicked={this.handleClick.bind(this)}
							strokeWidth={4}
							height={22}
							color={"#B7B7B7FF"}
						/>
					</div>
				</nav>
				<SideBar 
					filterSearch={this.props.filterSearch}
					updateQuery={this.props.updateQuery}
					handleClick={this.props.handleClick}
					results={this.props.results} 
					markers={this.state.markers}
					query={this.props.query}
				/>
			</div>
		)
	}
}

export default NavBar;