import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";
import "./datatable.scss";
import axios from "axios";
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import swal from "sweetalert";

// function createData(
//     name : string,
//     email : string,
//     password : string,
// ) {
//   return { name, email, password };
// }

// const rows = [
//   createData('Frozen yoghurt', 'dibesse@html.com', 1252525),

// ];

class DenseTable extends Component {
  state = {
    employees: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/salaries");
    if (res.data.success === true) {
      this.setState({
        employees: res.data.employees,
        loading: false,
      });
    }
  }

  deleteSalarie = async (e, id) => {
    const thidClickedFunda = e.currentTarget;
    const res = await axios.delete(`http://127.0.0.1:8000/api/salaries/${id}`);
    if (res.data.success === true) {
      thidClickedFunda.closest("tr").remove();
      swal({
        title: "Employe supprimer",
        text: "Vous avez supprimer un employe",
        icon: "warnning",
        dangerMode: true,
        button: "OK",
      });
    }
  };

  render() {
    var datatable = "";
    if (this.state.loading) {
      datatable = (
        <Table aria-label="a dense table">
          <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody colSpan={7}>
            <h2>Loading......</h2>
          </TableBody>
        </Table>
      );
    } else {
      datatable = this.state.employees.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.cin}</TableCell>
          <TableCell>{row.nationality}</TableCell>
          <TableCell>{row.departement}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell className="action">
            <Link
              to={`/users/${row.id}`}
              style={{ textDecoration: "none" }}
              key={row.id}
              className="viewButton"
            >
              <RemoveRedEyeIcon />
            </Link>
            <button
              onClick={(e) => this.deleteSalarie(e, row.id)}
              className="deleteButton"
            >
              <DeleteIcon />
            </button>
          </TableCell>
        </TableRow>
      ));
    }
    return (
      <div className="datatable">
        <TableContainer component={Paper}>
          <h1 className="datatableTitle">
            Ajouter un nouveau employe
            <Link to="/users/new" className="link">
              <PersonAddAltIcon />
            </Link>
          </h1>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nom Complet</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>CIN</TableCell>
                <TableCell>Nationnalite</TableCell>
                <TableCell>Departement</TableCell>
                <TableCell>Poste</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{datatable}</TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default DenseTable;
