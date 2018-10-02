import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component  {
	render() {
		return(
			<div className="map-container">
				<Map google={this.props.google} zoom={10}>

				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
  // apiKey: ("AIzaSyDqxmYDgJSpgCG4GCvkQCwTGre0Ve49HAE")
})(MapContainer)
