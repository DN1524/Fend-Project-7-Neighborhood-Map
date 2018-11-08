import React, { Component } from 'react';
import Results from "./Results";

class SideBar extends Component  {
	render() {
		const query = this.props.query;
		const results = this.props.results;

		return(
			<div className="sidebar-container">
				<section className="sidebar">
					<input 
						className="text-box" 
						type="text" 
						placeholder="Search" 
						onChange={e => this.props.updateQuery(e.target.value)}>
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
						{results.length > 0 ? 
							results.map((res, key) => 
								<li key={key} onClick={() => {this.props.handleClick(res.infowindow, res.marker.map, res.marker)}}>
									<p className="res-title">{res.venue.name}</p>
						  		<p className="res-address">{res.venue.location.address}</p>
						  		<p className="res-address">{res.venue.location.formattedAddress[1]}</p>
						  		<p className="res-address">{res.venue.location.formattedAddress[2]}</p> 
				  			</li>
				  		) : <p className="no-results">No results available</p>
						}
						</ul>
						
					</div>
				</section>
			</div>
		)
	}
}

export default SideBar;