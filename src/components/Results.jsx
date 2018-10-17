import React, { Component } from 'react';

class Results extends Component {
	render() {
		return(
			<li>
				{this.props.results.length > 0 ?
					<React.Fragment>
						<p className="res-title">{this.props.results[0].venue.name}</p>
			  		<p className="res-address">{this.props.results[0].venue.location.address}</p>
			  		<p className="res-address">{this.props.results[0].venue.location.formattedAddress[1]}</p>
			  		<p className="res-address">{this.props.results[0].venue.location.formattedAddress[2]}</p> 
			  	</React.Fragment>: ""}
			</li>
		)
	}
}

export default Results;