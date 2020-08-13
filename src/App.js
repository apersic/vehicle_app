import React from "react";
import "./App.scss";
import VehicleMake from './Stores/VehicleMake';
import VehicleModel from './Stores/VehicleModel'

export default function App() {
  return (
      <div className="App">
        <div className="navBar">
          <h1>Vehicles</h1>
        </div>
        <div className="viewWrapper">
          <VehicleMake />
          <br/>
          <VehicleModel />
        </div>
      </div>
  );
}
