import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component  {
	render() {
		return(
			<div id="map"></div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: //AIzaSyDqxmYDgJSpgCG4GCvkQCwTGre0Ve49HAE
})(MapContainer);