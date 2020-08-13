import React from "react";
import { useLocalStore } from "mobx-react";
import VehicleMakeTable from "../Components/VehicleMakeTable";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    makes: [
      {
        id: 1,
        name: "Ford Motor Company",
        abrv: "Ford",
      },
      {
        id: 2,
        name: "Bayerische Motoren Werke AG",
        abrv: "BMW",
      },
      {
        id: 3,
        name: "Volkwagen",
        abrv: "VW",
      },
      {
        id: 4,
        name: "Lamborghini S.p.A.",
        abrv: "Lamborghini",
      },
      {
        id: 5,
        name: "Volvo Group",
        abrv: "Volvo",
      },
      {
        id: 6,
        name: "Mercedes-Benz",
        abrv: "Mercedes",
      },
      {
        id: 7,
        name: "Adam Opel AG",
        abrv: "Opel",
      },
      {
        id: 8,
        name: "Hyundai Motor Company",
        abrv: "Hyundai",
      },
      {
        id: 9,
        name: "Chevrolet",
        abrv: "Chevy",
      },
      {
        id: 10,
        name: "Dr. Ing. h. c. F. Porsche AG",
        abrv: "Porche",
      },
    ],
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const VehicleMakeList = () => {
  const store = React.useContext(StoreContext);

  return <VehicleMakeTable tableData={store.makes} />;
};

export default function VehicleMake() {
  return (
    <StoreProvider>
      <div className="tableView">
        <VehicleMakeList />
      </div>
    </StoreProvider>
  );
}
