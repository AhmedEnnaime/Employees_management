import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link } from "react-router-dom";
import "../users/datatable.scss";
import axios from "axios";
// import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from "@mui/icons-material/Print";
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

class Paytable extends Component {
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

  imprimer = async (e, id, status) => {
    if (status) {
    } else {
      swal({
        title: "Impossible",
        text: "Ce Employe n'a pas encore signer contrat",
        icon: "error",
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
          <TableCell>{row.numEdentification}</TableCell>
          <TableCell>{row.status ? "Oui" : "Non"}</TableCell>
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
              onClick={(e) => this.imprimer(e, row.id, row.status)}
              className="PrintButton"
            >
              <PrintIcon />
            </button>
          </TableCell>
        </TableRow>
      ));
    }
    return (
      <div className="datatable">
        <TableContainer component={Paper}>
          <h1 className="datatableTitle">
            Imprimer les fiches de paie
            <span className="tag">
              <PeopleAltIcon />
            </span>
          </h1>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Nom Complet</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>CIN</TableCell>
                <TableCell>Nationnalite</TableCell>
                <TableCell>Departement</TableCell>
                <TableCell>Matricule</TableCell>
                <TableCell>Contrat</TableCell>
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

export default Paytable;
