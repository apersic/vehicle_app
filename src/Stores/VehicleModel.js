import React from "react";
import { useLocalStore } from "mobx-react";
import VehicleModelTable from "../Components/VehicleModelTable";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    models: [
      {
        id: 1,
        makeId: 2,
        name: "X5",
        abrv: "BMW",
      },
      {
        id: 2,
        makeId: 2,
        name: "320d",
        abrv: "BMW",
      },
      {
        id: 3,
        makeId: 2,
        name: "X3",
        abrv: "BMW",
      },
      {
        id: 4,
        makeId: 4,
        name: "Aventador",
        abrv: "Lamborghini",
      },
      {
        id: 5,
        makeId: 4,
        name: "Huracan",
        abrv: "Lamborghini",
      },
      {
        id: 6,
        makeId: 4,
        name: "Urus",
        abrv: "Lamborghini",
      },
      {
        id: 7,
        makeId: 7,
        name: "Mokka",
        abrv: "Opel",
      },
      {
        id: 8,
        makeId: 7,
        name: "Corsa",
        abrv: "Opel",
      },
      {
        id: 9,
        makeId: 7,
        name: "Insignia",
        abrv: "Opel",
      },
      {
        id: 10,
        makeId: 9,
        name: "Camaro",
        abrv: "Chevy",
      },
      {
        id: 11,
        makeId: 9,
        name: "Equinox",
        abrv: "Chevy",
      },
      {
        id: 12,
        makeId: 9,
        name: "Corvette Stingray",
        abrv: "Chevy",
      },
    ],
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const VehicleModelList = () => {
    const store = React.useContext(StoreContext);

    return(<VehicleModelTable tableData={store.models} />)
}

export default function VehicleModel() {
    return(
        <StoreProvider>
            <div className="tableView">
                <VehicleModelList />
            </div>
        </StoreProvider>
    )
}
