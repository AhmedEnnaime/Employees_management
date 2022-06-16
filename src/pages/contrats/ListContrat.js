import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import DataTable from './Datatable'
// import DataTable from './Datatable'
// import DenseTable from './DensTable'
import "../users/List.scss";
import ContratTable from "./ContratTable";

function Listusers() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ContratTable />
      </div>
    </div>
  );
}

export default Listusers;
