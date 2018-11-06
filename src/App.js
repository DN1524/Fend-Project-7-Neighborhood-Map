import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import axios from "axios";

class App extends Component {
    state = {
      venues: [], // DO NOT CHANGE THIS STATE WHEN FILLED WITH VENUES!!!
      filteredVenues: [],
      markers: [],
      markersID: [],
      listsID: [],
      map: {},
      infoWindow: {}
    }

  componentWillMount() {
    this.getVenues();
    console.log("TESTING....")
  }

  filterSearch = (query) => {
  return (x) => {
    return x.venue.name.toLowerCase().includes(query.toLowerCase()) ||
    x.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
    x.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase())
     || !query;
    }
  }

  getVenues = () => {
    const venuesURL = 'https://api.foursquare.com/v2/venues/explore?client_id=3DTFRRBJ2R33GOU1XLL1EIXSYASEF3MSVDAACVHOHLN4U4LV&client_secret=CXVCVX0JTCD1VLNVPP1TQ3L1UKDJVQB1L5ANDRASIRPS2RYH&v=20180323&near=Chicago,IL&query=food';

    axios.get(venuesURL)
      .then(res => {
        this.setState({ venues: res.data.response.groups[0].items }, this.renderMap())
        // console.log(res.data.response.groups[0].items)
      })
      .catch(err => {
        console.log(err);
      })
  }

  // updateMarkers = () => {
  //   if(this.state.markers.length !== filteredVenues.length) {
  //     this.state.markers.forEach(marker => {
  //       marker.setMap(null);
  //       infowindow.close();
  //       console.log("Close Marker")
  //     })
        
  //   } else {
  //     this.state.markers.forEach(marker => {
  //       marker.setMap(map)
  //     })
  //     console.log("Open marker?")
  //   }
  // }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 41.878114, lng: -87.629798},
      zoom: 11
    });

    this.setState({ map: map })

    console.log(this.state.map, "1")
    console.log(map, "2")

    const infowindow = new window.google.maps.InfoWindow();
    // const query = this.NavBar.SideBar.state.query; // Component Refs
    // const filteredVenues = this.NavBar.SideBar.state.filteredVenues; // Component Refs
    let venues = this.state.venues
    let markers = [];

    venues.map((ven, id) => {
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

      let marker = new window.google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title,
        id: venueAttr.id,
        animation: window.google.maps.Animation.DROP
      })

      // console.log(ven)

      markers.push(marker);

      marker.addListener("click", () => {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
        console.log(infowindow);
      });

      this.setState({ infoWindow: infowindow })
      this.setState({ markers: markers })
    })
  }

  renderMap = () => {
    loadScript("https:maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  render() {
    return (
      <main>
        <div id="map"></div>
        {this.state.venues.length > 0 && this.state.markers.length ?
          <NavBar
            ref={(child) => {this.NavBar = child}}
            results={this.state.venues}
            markers={this.state.markers}
            listsID={this.state.listsID}
            filteredVenues={this.state.filteredVenues}
            map={this.state.map}
            infoWindow={this.state.infoWindow}
          /> : console.log("Retreiving venues & markers...")
        }
      </main>
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

export default App;
