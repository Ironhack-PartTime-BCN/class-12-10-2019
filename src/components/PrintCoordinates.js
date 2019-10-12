import React from "react";

const PrintCoordinates = ({ latitude, longitude }) => {
  return (
    <div>
      <p>
        latitude: {latitude} longitude: {longitude}
      </p>
    </div>
  );
};

export default PrintCoordinates;
