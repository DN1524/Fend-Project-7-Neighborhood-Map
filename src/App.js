import React, { Component } from 'react';
import './App.css'
import MapContainer from "./components/Map";
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class App extends Component {
  componentDidMount() {
    this.renderMap()
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 41.878114, lng: -87.629798},
      zoom: 10
    });
  }

  renderMap = () => {
    loadScript("https:maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=MYAPIKEY&v=3&callback=initMap")
    window.initMap = this.initMap
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}
// <NavBar />
function loadScript(url) {
  const index = window.document.getElementByTagName("script")[0];
  const script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
