import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component  {
	state = {
		newVenues: [],
		markers: [],
		filteredMarkers: []
	}

	componentDidMount() {
		this.renderMap()
	}

	renderMap = () => {
    loadScript("https:maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=&v=3&callback=initMap")
    window.initMap = this.initMap
  }

	initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 41.878114, lng: -87.629798},
      zoom: 11
    });

    // let markerArray = []
    let venues = this.props.venues
    // const infowindow = new window.google.maps.InfoWindow();

    let venueMapInfo = venues.map(ven => {
      const venueAttr = ven.venue
      const lat = venueAttr.location.lat;
      const lng = venueAttr.location.lng;
      const address = venueAttr.location.formattedAddress;
      const title = venueAttr.name;
      
      const contentString = `
      <p style="font-weight: bold; margin: 0; font-size: 14px;">${title}<p>
      <p style="margin: 0;">${venueAttr.location.address}</p>
      <p style="margin: 0;">${address[1]}</p>
      <p style="margin: 0;">${address[2]}</p>
      `
      // console.log(venueAttr.location.formattedAddress);
      const marker = new window.google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title,
        animation: window.google.maps.Animation.DROP
      });

      ven.marker = marker

      // markerArray.push(marker)

      // this.setState({ markers: markerArray });

      let infowindow = new window.google.maps.InfoWindow();
      infowindow.setContent(contentString);
      ven.infowindow = infowindow

      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });

      return ven
    })
    this.setState({ newVenues: venueMapInfo })
  }

	render() {
		return (
			<div id="map"></div>
		);
	}
}

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

// export default GoogleApiWrapper({
  // apiKey: ("YOUR_MAP_KEY")
// })(MapContainer)

export default MapContainer;
