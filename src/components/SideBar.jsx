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
						aria-label="Filter Chicago restaurants" 
						type="text" 
						value={query}
						placeholder="Search" 
						onChange={e => this.props.updateQuery(e.target.value)}>
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
						{/* Loads list items when the venues finally load */}
						{results.length > 0 ? 
							results.map((res, key) => {
								const name = res.venue.name;
								const map = res.marker.map;
								const marker = res.marker
								const infowindow = res.infowindow;
								const address = res.venue.location.address;
								const formattedAddress = res.venue.location.formattedAddress;
								
								return <button 
								className="venue-button" 
								key={key}
								onClick={() => {this.props.handleClick(infowindow, map, marker)}}>
									<li key={key} aria-label={name + address + formattedAddress[1]}>
										<p className="res-title">{name}</p>
							  		<p className="res-address">{address}</p>
							  		<p className="res-address">{formattedAddress[1]}</p>
							  		<p className="res-address">{formattedAddress[2]}</p> 
					  			</li>
					  		</button>	
				  			// If no venues are available, then a message of
				  			// "No results available" will display
				  		}) : <p className="no-results">No results available</p>
						}
						</ul>
					</div>
				</section>
			</div>
		) 
	}
}

export default SideBar;
