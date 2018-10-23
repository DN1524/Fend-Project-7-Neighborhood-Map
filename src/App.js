import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: []
    }
    this.updateVenues = this.updateVenues.bind(this);
  }

  updateVenues = (e) => {
    // e.preventDefault();
    this.setState({ venues: e })
    console.log(this.state.venues)
  }

  componentDidMount() {
    this.getVenues()
  }

  getVenues = () => {
    const venuesURL = 'https://api.foursquare.com/v2/venues/explore?client_id=3DTFRRBJ2R33GOU1XLL1EIXSYASEF3MSVDAACVHOHLN4U4LV&client_secret=CXVCVX0JTCD1VLNVPP1TQ3L1UKDJVQB1L5ANDRASIRPS2RYH&v=20180323&near=Chicago,IL&query=food';


    axios.get(venuesURL)
      .then(res => {
        this.updateVenues(res.data.response.groups[0].items, this.renderMap())
        // console.log(res.data.response.groups[0].items)
      })
      .catch(err => {
        console.log(err);
      })
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 41.878114, lng: -87.629798},
      zoom: 11
    });

    let venues = this.state.venues
    const infowindow = new window.google.maps.InfoWindow();

    venues.map(ven => {
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

      marker.addListener("click", () => {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      });
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
        
        <NavBar results={this.state.venues} updateVenues={this.updateVenues} />
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
