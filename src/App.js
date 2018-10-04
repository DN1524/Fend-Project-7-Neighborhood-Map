import React, { Component } from 'react';
import './App.css'
import MapContainer from "./components/Map";
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  render() {
    const style = {
      height: "91.3%"
    }

    return (
      <div className="App" style={style}>
      <NavBar />

        <MapContainer />
        <SideBar />
      </div>
    );
  }
}

export default App;
