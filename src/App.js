import React from "react";
import Card from "./components/Card";
import Map from "./components/Map";
import GPS from "./components/GPS";
import PrintCoordinates from "./components/PrintCoordinates";
import withGPS from "./components/withGPS";
import GetCoordinates from "./components/GetCoordinates";

const WithGPS = withGPS(Map);
const WithPrintCoordinates = withGPS(PrintCoordinates);

function App() {
  return (
    <div>
      <Card title="normal">
        <GPS />
      </Card>
      <Card title="HOC Map">
        <WithGPS />
      </Card>
      <Card title="HOC Print">
        <WithPrintCoordinates />
      </Card>
      <Card title="RPC Map">
        <GetCoordinates>
          {(latitude, longitude) => {
            console.log("render props callback");
            return <Map latitude={latitude} longitude={longitude} />;
          }}
        </GetCoordinates>
      </Card>
      <Card title="RPC Print">
        <GetCoordinates>
          {(latitude, longitude) => {
            console.log("render props callback");
            return (
              <PrintCoordinates latitude={latitude} longitude={longitude} />
            );
          }}
        </GetCoordinates>
      </Card>
    </div>
  );
}

export default App;
