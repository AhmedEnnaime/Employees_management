import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
// import DataTable from './Datatable'
// import DataTable from './Datatable'
// import DenseTable from './DensTable'
import "../users/List.scss";
// import Paytable from "./Paytable";
import Pdf from "./pdf";

function ListPay() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Pdf />
      </div>
    </div>
  );
}

export default ListPay;
