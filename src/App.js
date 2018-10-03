import React, { Component } from 'react';
import './App.css'
import MapContainer from "./components/Map";
import ListView from "./components/ListView"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer />
        <ListView />
      </div>
    );
  }
}

export default App;
