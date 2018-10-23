import React, { Component } from 'react';
import Results from "./Results";

class SideBar extends Component  {
	state = {
		query: ""
	}

	updateQuery = (query) => {
		this.setState ({ query: query })
		console.log(this.state.query);
	}

	render() {
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
						{this.props.results.length > 0 ? 
							this.props.results.map((res) => 
								<li key={res.venue.name}>
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