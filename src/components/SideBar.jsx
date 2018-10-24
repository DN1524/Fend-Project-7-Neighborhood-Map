import React, { Component } from 'react';
import Results from "./Results";
import axios from "axios";

class SideBar extends Component  {
	state = {
		query: ""
	}

	updateQuery = (query) => {
		this.setState ({ query: query })

	}

	 getVenues = () => {
    const venuesURL = 'https://api.foursquare.com/v2/venues/explore?client_id=3DTFRRBJ2R33GOU1XLL1EIXSYASEF3MSVDAACVHOHLN4U4LV&client_secret=CXVCVX0JTCD1VLNVPP1TQ3L1UKDJVQB1L5ANDRASIRPS2RYH&v=20180323&near=Chicago,IL&query=food';

    axios.get(venuesURL)
      .then(res => {
      	if(this.props.results.length <= 0)  {
	        this.props.updateVenues(res.data.response.groups[0].items)
	        console.log("Retrieving Venues...");
				} else {
					console.log("There are already venues!");
				}
      })
      .catch(err => {
        console.log(err);
      })
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