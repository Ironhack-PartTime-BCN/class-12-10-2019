import React, { Component } from "react";

class GetCoordinates extends Component {
  state = {
    loading: true,
    latitude: 0,
    longitude: 0
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log("works!", position.coords);
          this.setState({
            loading: false,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        error => {
          this.setState({
            loading: false
          });
          console.log(error);
        }
      );
    } else {
      /* geolocation IS NOT available */
      console.log("geolocation IS NOT available");
    }
  }

  render() {
    const { latitude, longitude, loading } = this.state;
    const { children } = this.props;
    console.log("render", this.state);
    if (loading) {
      return <div>Loading</div>;
    } else {
      return <div>{children(latitude, longitude)}</div>;
    }
  }
}

export default GetCoordinates;
