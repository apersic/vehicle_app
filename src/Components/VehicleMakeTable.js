import React from "react";

export default function VehicleMakeTable(props) {
  const itemsList = props.tableData;

  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Abreviation</td>
        </tr>
      </thead>
      <tbody>
        {itemsList.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.abrv}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
