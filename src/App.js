import React from "react";
import "./App.scss";
import VehicleMake from './Stores/VehicleMake';
import VehicleModel from './Stores/VehicleModel'

export default function App() {
  return (
      <div className="App">
        <VehicleMake />
        <br/>
        <VehicleModel />
      </div>
  );
}
