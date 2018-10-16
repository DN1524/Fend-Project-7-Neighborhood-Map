import React, { Component } from 'react';
import NavBar from "./NavBar"

class Results extends Component {
	state = {
		results: []
	}

	render() {
		return(
			<li>
				<p className="res-title">Title of the place!</p>
      	<p className="res-address">Address Line 1</p>
      	<p className="res-address">Address Line 2</p>
      	<p className="res-address">Address Line 3</p>
			</li>
		)
	}
}

export default Results;

// {setTimeout(() => {
// 	console.log(this.props.results[0].venue.name)
// },1000)}