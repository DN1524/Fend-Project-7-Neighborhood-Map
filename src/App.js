import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import axios from "axios";
import MapContainer from "./components/Map"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      markers: [],
      filteredVenues: []
    }
  }

  componentDidMount() {
    this.getVenues()
  }

  filterSearch = (query) => {
  return function(x) {
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
        this.setState({ venues: res.data.response.groups[0].items })
        // console.log(res.data.response.groups[0].items)
      })
      .catch(err => {
        console.log(err);
      })
  }

  // initMap = () => {
  //   const map = new window.google.maps.Map(document.getElementById("map"), {
  //     center: {lat: 41.878114, lng: -87.629798},
  //     zoom: 11
  //   });

  //   let venues = this.state.venues
  //   const infowindow = new window.google.maps.InfoWindow();

  //   venues.map(ven => {
  //     const venueAttr = ven.venue
  //     const lat = venueAttr.location.lat;
  //     const lng = venueAttr.location.lng;
  //     const address = venueAttr.location.formattedAddress;
  //     const title = venueAttr.name;
      
  //     const contentString = `
  //     <p style="font-weight: bold; margin: 0; font-size: 14px;">${title}<p>
  //     <p style="margin: 0;">${venueAttr.location.address}</p>
  //     <p style="margin: 0;">${address[1]}</p>
  //     <p style="margin: 0;">${address[2]}</p>
  //     `
  //     // console.log(venueAttr.location.formattedAddress);
  //     const marker = new window.google.maps.Marker({
  //       position: {lat: lat, lng: lng},
  //       map: map,
  //       title: title,
  //       animation: window.google.maps.Animation.DROP
  //     });

  //     this.setState({ markers: marker });

  //     marker.addListener("click", () => {
  //       infowindow.setContent(contentString);
  //       infowindow.open(map, marker);
  //     });
  //   })
  // }

  // renderMap = () => {
  //   loadScript("https:maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=&v=3&callback=initMap")
  //   window.initMap = this.initMap
  // }

  render() {
    return (
      <main>
        <NavBar
          ref={(child) => {this.NavBar = child}}
          results={this.state.venues}
          markers={this.state.markers}
          filterSearch={this.filterSearch}
        />
      </main>
    );
  }
}
// <div id="map"></div>
// function loadScript(url) {
//   const index = window.document.getElementsByTagName("script")[0];
//   const script = window.document.createElement("script");
//   script.src = url;
//   script.async = true;
//   script.defer = true;
//   index.parentNode.insertBefore(script, index);
// }

export default App;
