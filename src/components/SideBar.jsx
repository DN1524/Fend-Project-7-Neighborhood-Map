import React, { Component } from 'react';
import Results from "./Results";

class SideBar extends Component  {
	state = {
		results: []
	}

	render() {
		return(
			<div className="sidebar-container">
				<section className="sidebar">
					<input className="text-box" type="text" placeholder="Search">
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
							<Results />
						</ul>
					</div>
				</section>
			</div>
		)
	}
}

export default SideBar;