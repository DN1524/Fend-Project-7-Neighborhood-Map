import React, { Component } from 'react';
import MapContainer from "./Map";

class SideBar extends Component  {
	render() {
		return(
			<div className="sidebar-container">
				<section className="sidebar">
					<input className="text-box" type="text" placeholder="Search">
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
							<li>Some Text</li>
							<li>Some Text</li>
							<li>Some Text</li>
						</ul>
					</div>
				</section>
			</div>
		)
	}
}

export default SideBar;