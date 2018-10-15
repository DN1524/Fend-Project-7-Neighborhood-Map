import React, { Component } from 'react';
import NavBar from "./NavBar"

class Results extends Component {
	render() {
		return(
			<li>
				<p className="res-title">Title of Place</p>
      	<p className="res-address">Address Line 1</p>
      	<p className="res-address">Address Line 2</p>
      	<p className="res-address">Address Line 3</p>
			</li>
		)
	}
}

export default Results;