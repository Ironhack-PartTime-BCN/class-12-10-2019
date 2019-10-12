import React, { Component } from "react";

const withGPS = Comp => {
  return class WithGPS extends Component {
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
      console.log("render");
      if (loading) {
        return <div>Loading</div>;
      } else {
        return (
          <Comp latitude={latitude} longitude={longitude} {...this.props} />
        );
      }
    }
  };
};

export default withGPS;
