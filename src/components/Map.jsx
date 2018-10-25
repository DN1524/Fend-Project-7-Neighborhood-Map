import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component  {
	render() {
		// const style = {
		// 	width: "75%",
		// 	height: "100%",
		// 	margin: "0",
		// 	padding: "0"
		// }

		return (
			<Map 
				className="map"
				google={this.props.google} 
				zoom={10}
				initialCenter={{
					lat: 41.878114,
					lng: -87.629798
				}}
				>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
  // apiKey: ("YOUR_MAP_KEY")
})(MapContainer)
