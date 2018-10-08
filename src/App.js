import React, { Component } from 'react';
import './App.css'
import MapContainer from "./components/Map";
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapContainer /> {/*Will move later*/}
        <NavBar />
        
      </div>
    );
  }
}

export default App;
