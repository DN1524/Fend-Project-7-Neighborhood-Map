import React, { Component } from 'react';
import './App.css'
import MapContainer from "./components/Map";
import LocationFilter from "./components/LocationFilter"
import ListView from "./components/ListView";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
        <LocationFilter />
        <ListView />
      </div>
    );
  }
}

export default App;
