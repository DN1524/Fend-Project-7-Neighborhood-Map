import React, { Component } from 'react';
import './App.css'
import MapContainer from "./components/Map";
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  render() {

    initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.878114, lng: -87.629798},
        zoom: 10
      });
    }

    return (
      <div className="App">
        <div id="map"></div>

        <NavBar />
      </div>
    );
  }
}

export default App;
