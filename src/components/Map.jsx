import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component  {
	render() {
		const style = {
			width: "75%",
			height: "100%"
		}

		return (
			<Map 
				className="map"
				google={this.props.google} 
				zoom={10}
				style={style}
				initialCenter={{
					lat: 41.878114,
					lng: -87.629798
				}}
				>
				{console.log(this.props.google)}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
  // apiKey: ("AIzaSyDqxmYDgJSpgCG4GCvkQCwTGre0Ve49HAE")
})(MapContainer)
