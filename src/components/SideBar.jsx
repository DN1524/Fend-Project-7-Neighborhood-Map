import React, { Component } from 'react';
import Results from "./Results";

class SideBar extends Component  {
	render() {
		return(
			<div className="sidebar-container">
				<section className="sidebar">
					<input className="text-box" type="text" placeholder="Search">
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
							{this.props.results.length > 0 ? 
								this.props.results.map((res) => 
									<Results key={res.venue.name}/>) : 
									<p className="no-results">No results available</p>
							}
						</ul>
					</div>
				</section>
			</div>
		)
	}
}

export default SideBar;