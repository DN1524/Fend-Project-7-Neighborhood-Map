import React, { Component } from 'react';

class Results extends Component {
	render() {
		return(
			<li>
				{this.props.results.length > 0 ?
					this.props.results.map(res =>
					<React.Fragment>
						<p className="res-title">{res.venue.name}</p>
			  		<p className="res-address">{res.venue.location.address}</p>
			  		<p className="res-address">{res.venue.location.formattedAddress[1]}</p>
			  		<p className="res-address">{res.venue.location.formattedAddress[2]}</p> 
			  	</React.Fragment>): "No venue information"}
			</li>
		)
	}
}

export default Results;