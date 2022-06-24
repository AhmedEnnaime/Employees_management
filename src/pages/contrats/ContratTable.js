import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import "./contrattable.scss";
import axios from "axios";
// import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import Widget from "../../components/widgets/Widget";

class DenseTable extends Component {
  state = {
    contrats: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/contrats");
    if (res.data.success === true) {
      this.setState({
        contrats: res.data.contrats,
        loading: false,
      });
    }
  }

  deleteSalarie = async (e, id) => {
    const thidClickedFunda = e.currentTarget;
    thidClickedFunda.disabled = true;
    const res = await axios.delete(`http://127.0.0.1:8000/api/contrat/${id}`);
    if (res.data.success === true) {
      thidClickedFunda.closest("tr").remove();
      thidClickedFunda.disabled = false;
      console.log(res.data.message);
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
      datatable = this.state.contrats.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.employee}</TableCell>
          <TableCell>{row.created_at}</TableCell>
          <TableCell>{row.type}</TableCell>
          <TableCell>{row.monthly_salary} DH</TableCell>
          <TableCell>{row.annual_salary} DH</TableCell>
          <TableCell>{row.poste}</TableCell>
          <TableCell className="action">
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
      <>
        <div className="widgets">
          <Widget type="employe" name="Taha Dibesse" number={2} />
          <Widget type="employe" name="Yahya" number={2} />
        </div>
        <div className="datatable">
          <TableContainer component={Paper}>
            <h1 className="datatableTitle">
              Ajouter un nouveau contrat
              <Link to="/contrats/new" className="link">
                <AssignmentIcon />
              </Link>
            </h1>
            <Table aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Reference</TableCell>
                  <TableCell>Employe</TableCell>
                  <TableCell>Creer en : </TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Salaie de base</TableCell>
                  <TableCell>Salaie Annuelle</TableCell>
                  <TableCell>Poste</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{datatable}</TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
}

export default DenseTable;
