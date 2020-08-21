import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import PaginationFactory from 'react-bootstrap-table2-paginator';

export default function VehicleMakeTable(props) {
  const itemsList = props.tableData;

  const columns = [
    { dataField: 'id', text:'ID'},
    { dataField: 'name', text:'Name'},
    { dataField: 'abrv', text:'Abreviation'},
  ]

  return (
    <BootstrapTable keyField='id' data={itemsList} columns={columns} pagination={PaginationFactory()} />
  );
}
