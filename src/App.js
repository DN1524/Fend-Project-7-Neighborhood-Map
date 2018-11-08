import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues: [], // Venues without infoWindow and markers
      newVenues: [], // Venues with infoWindow and markers
      filteredVenues: [], // Venues being filtered
      query: ""   
    }
  }

  componentDidMount() {
    this.getVenues()
  }

  updateQuery = (query) => {
    this.setState ({ query: query })
    // Filters both venue results and markers
    const filteredVenues = this.state.newVenues.filter(venue => {
      if (venue.venue.name.toLowerCase().includes(query.toLowerCase()) ||
          venue.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
          venue.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase()) ||
          !query) {

        venue.marker.setVisible(true);
        return venue

      } else {
        venue.marker.setVisible(false);
        venue.infowindow.close()
      }
    })

    this.setState({ filteredVenues })
  }

  // Grabs URL for the Google map
  renderMap = () => {
    loadScript("https:maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 41.878114, lng: -87.629798},
      zoom: 11
    });

    let venues = this.state.venues

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

      const marker = new window.google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title,
        id: venueAttr.id,
        animation: window.google.maps.Animation.DROP
      });
      // Allows access to the markers through the NewVenues state
      ven.marker = marker

      let infowindow = new window.google.maps.InfoWindow();
      infowindow.setContent(contentString);
      // Allows access to the infoWindows through the NewVenues state
      ven.infowindow = infowindow

      marker.addListener("click", () => {
        this.handleClick(infowindow, map, marker)
      });

      return ven
    })
    this.setState({ newVenues: venueMapInfo, filteredVenues: venueMapInfo })
    console.log(this.state.filteredVenues)
  }

  handleClick = (infowindow, map, marker) => {
    const venues = this.state.newVenues

    //closes previous infoWindow and stops 
    //marker animation when new marker is selected.
    venues.forEach(ven => {
      ven.infowindow.close()
      ven.marker.setAnimation(null);
    })

    infowindow.open(map, marker)
    marker.setAnimation(window.google.maps.Animation.BOUNCE);

  }
  // Fetches venues from FourSqaure with Axios
  getVenues = () => {
    const venuesURL = 'https://api.foursquare.com/v2/venues/explore?client_id=3DTFRRBJ2R33GOU1XLL1EIXSYASEF3MSVDAACVHOHLN4U4LV&client_secret=CXVCVX0JTCD1VLNVPP1TQ3L1UKDJVQB1L5ANDRASIRPS2RYH&v=20180323&near=Chicago,IL&query=food';

    axios.get(venuesURL)
      .then(res => {
        this.setState({ venues: res.data.response.groups[0].items }, this.renderMap())
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
        <NavBar
          filterSearch={this.filterSearch}
          results={this.state.filteredVenues}
          markers={this.state.markers}
          updateQuery={this.updateQuery}
          query={this.state.query}
          handleClick={this.handleClick}
        />
      </main>
    );
  }
}
// Allows access to use Google Maps such as the map
// itself, makers, and infoWindows
function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
