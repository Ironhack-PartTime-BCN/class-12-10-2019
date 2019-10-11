import React from "react";
import Card from "./components/Card";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <Card title="normal">
        <Map />
      </Card>
      <Card title="HOC">
        <Map />
      </Card>
      <Card title="RPC">
        <Map />
      </Card>
    </div>
  );
}

export default App;
