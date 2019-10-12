import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

class Map extends Component {
  state = {
    lng: this.props.longitude || 0,
    lat: this.props.latitude || 0,
    zoom: this.props.zoom || 13
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div ref={el => (this.mapContainer = el)} className="mapContainer" />
    );
  }
}

export default Map;
