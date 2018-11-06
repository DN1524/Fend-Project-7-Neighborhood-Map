import React, { Component } from 'react';
import Results from "./Results";

function filterSearch(query) {
	return function(x) {
		return x.venue.name.toLowerCase().includes(query.toLowerCase()) ||
		x.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
		x.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase())
		 || !query;
	}
}

class SideBar extends Component  {
	state = {
		query: ""
	}

	updateQuery = (query) => {
		this.setState ({ query: query })

	}

	render() {
		const query = this.state.query;
		const results = this.props.results;

		return(
			<div className="sidebar-container">
				<section className="sidebar">
					<input 
						className="text-box" 
						type="text" 
						placeholder="Search" 
						onChange={e => this.updateQuery(e.target.value)}>
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
						{results.length > 0 ? 
							results.filter(this.props.filterSearch(query)).map((res) => 
								<li key={res.venue.id}>
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