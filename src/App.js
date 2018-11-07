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
    this.setState({ filteredVenues: this.filterVenues(this.state.venues, "") })
  }

  filterSearch = (query) => {
  return (x) => {
    return x.venue.name.toLowerCase().includes(query.toLowerCase()) ||
    x.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
    x.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase())
     || !query;
    }
  }

  filterVenues = (venues, query) => {
    return venues.filter(venue =>
      venue.venue.name.toLowerCase().includes(query.toLowerCase()) ||
      venue.venue.location.address.toLowerCase().includes(query.toLowerCase()) ||
      venue.venue.location.formattedAddress[1].toLowerCase().includes(query.toLowerCase())
      || !query)
  }

  updateQuery = (query) => {
    this.setState({ filteredVenues: this.filterVenues(this.state.venues, query) })
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

  render() {
    return (
      <main>
        <NavBar
          ref={(child) => {this.NavBar = child}}
          results={this.state.venues}
          markers={this.state.markers}
          filterSearch={this.filterSearch}
          filterVenues={this.updateQuery}
          filteredVenues={this.state.filteredVenues}
        />

        {this.state.venues.length > 0 ?
          <MapContainer
          venues={this.state.venues}
          />
          : console.log("Wating on venues")
        }
      </main>
    );
  }
}

export default App;
