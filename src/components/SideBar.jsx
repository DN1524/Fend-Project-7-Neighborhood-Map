import React, { Component } from 'react';
import Results from "./Results";

// function filterSearch(query) {
// 	return function(x) {
// 		return x.venue.name.toLowerCase().includes(query.toLowerCase()) ||
// 		x.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
// 		x.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase())
// 		 || !query;
// 	}
// }

class SideBar extends Component  {
	state = {
		filteredVenues: [],
		query: "",
		filteredVenuesIDs: []
	}

	// componentDidMount() {
	// 	let markerIDs;
	// 	let venueIDs;

	// 	markerIDs = this.state.filteredVenues.map(fv => {
	// 		return fv.venue.id;
	// 	})

	// 	venueIDs = this.props.markers.map(marker => {
	// 		return marker.id
	// 	})
		

	// 	console.log(markerIDs, venueIDs)
	// }

	componentWillMount() {
		console.log(this.props.results)
		console.log(this.props.markers)

		this.setState({ filteredVenues: this.props.results })

		// console.log(this.state.filteredVenues);
	}

	filterMarkers = (id) => {
		return (x) => {
			return x.id.includes(id) || !id;
		}
	}

	updateQuery = (query) => {
		let markers = this.props.markers;
		let filteredVenues = this.state.filteredVenues;

		this.setState({ query: query });

		this.setState({ filteredVenues: this.props.results.filter(this.filterSearch(query)) })

		// console.log(markers, filteredVenues);
		this.setState({
			filteredVenuesIDs: filteredVenues.map(fv => {
				return fv.venue.id
			})
		})

		console.log(this.state.filteredVenues);


		markers.forEach(marker => {
			this.state.filteredVenuesIDs.forEach(venueID => {
				if(marker.id !== venueID) {
					marker.setMap(null)
				} else {
					marker.setMap(this.props.map)
				}
			})	
		})
	}

	filterSearch = (query) => {
	return (x) => {
		return x.venue.name.toLowerCase().includes(query.toLowerCase()) ||
		x.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
		x.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase())
		 || !query;
		}
	}

	render() {
		const query = this.state.query;
		const results = this.props.results;
		const filteredResults = this.state.filteredVenues

		return(
			<div className="sidebar-container">
				{/*console.log("SideBar is rendering...", this.props.results)*/}
				<section className="sidebar">
					<input 
						className="text-box" 
						type="text" 
						placeholder="Search" 
						onChange={e => this.updateQuery(e.target.value)}
						value={this.state.query}
						>
	      	</input>
	      	<div className="results-container">
						<ul className="list-results">
						{results.length > 0 ? 
							filteredResults.map((res, key) =>
							// this.state.filteredVenues.map((res, key) =>
								<li key={key} data-key={res.venue.id} className="results">
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
