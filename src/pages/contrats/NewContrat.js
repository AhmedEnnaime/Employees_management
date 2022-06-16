import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import "./NewContrat.scss";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import swal from "sweetalert";

class NewContrat extends Component {
  state = {
    employees: [],
    contrat_name: "",
    poste_occupied: "",
    contrat_type: "",
    end_date: "",
    work_hours_week: "",
    monthly_salary: "",
    status: "",
    company: "",
    user_id: "",
  };

  async componentDidMount() {
    const res = await axios.get("http://127.0.0.1:8000/api/salaries");
    if (res.data.success === true) {
      this.setState({
        employees: res.data.employees,
      });
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveContrat = async (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      contrat_name: this.state.contrat_name,
      poste_occupied: this.state.poste_occupied,
      contrat_type: this.state.contrat_type,
      end_date: this.state.end_date,
      work_hours_week: this.state.work_hours_week,
      monthly_salary: this.state.monthly_salary,
      status: this.state.status,
      company: this.state.company,
      user_id: this.state.user_id,
    });

    const res = await axios.post(
      `http://127.0.0.1:8000/api/add-contrat`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.data.success === true) {
      swal({
        title: "Contrat Ajouter",
        text: "Vous avez ajouter un contrat",
        icon: "success",
        button: "OK",
      });
      this.setState({
        contrat_name: "",
        poste_occupied: "",
        contrat_type: "",
        end_date: "",
        work_hours_week: "",
        monthly_salary: "",
        annual_salary: "",
        status: "",
        company: "",
        user_id: "",
      });
    }
  };
  render() {
    var data = "";
    data = this.state.employees.map((row) => (
      <option
        name="user_id"
        required
        key={row.id}
        onChange={this.handleInput}
        value={row.id}
      >
        {row.name}
      </option>
    ));

    return (
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1 className="datatableTitle">Ajouter Contrat</h1>
            <Link to="/contrats" className="link">
              <ArrowBackIcon />
            </Link>
          </div>
          <div className="bottom">
            <div className="left">
              <AssignmentIcon className="icon" />
            </div>
            <div className="right">
              <form onSubmit={this.saveContrat}>
                <div className="formInput">
                  <label>Employe : </label>
                  <select required name="user_id" onChange={this.handleInput}>
                    <option>--Choisisssez l'employer--</option>
                    {data}
                  </select>
                </div>
                <div className="formInput">
                  <label>Reference</label>
                  <input
                    required
                    type="text"
                    name="contrat_name"
                    onChange={this.handleInput}
                    value={this.state.contrat_name}
                  />
                </div>
                <div className="formInput">
                  <label>Type</label>
                  <input
                    required
                    type="text"
                    name="contrat_type"
                    onChange={this.handleInput}
                    value={this.state.contrat_type}
                  />
                </div>
                <div className="formInput">
                  <label>Poste</label>
                  <input
                    required
                    type="text"
                    name="poste_occupied"
                    onChange={this.handleInput}
                    value={this.state.poste_occupied}
                  />
                </div>
                <div className="formInput">
                  <label>Fin de Contrat </label>
                  <input
                    required
                    type="date"
                    name="end_date"
                    onChange={this.handleInput}
                    value={this.state.end_date}
                  />
                </div>
                <div className="formInput">
                  <label>Heurs par semaine</label>
                  <input
                    required
                    type="number"
                    name="work_hours_week"
                    onChange={this.handleInput}
                    value={this.state.work_hours_week}
                  />
                </div>
                <div className="formInput">
                  <label>Salaire de base</label>
                  <input
                    required
                    type="text"
                    name="monthly_salary"
                    onChange={this.handleInput}
                    value={this.state.monthly_salary}
                  />
                </div>
                <div className="formInput">
                  <label>status : </label>
                  <input
                    required
                    type="text"
                    name="status"
                    onChange={this.handleInput}
                    value={this.state.status}
                  />
                  {/* <select name="status" onChange={this.handleInput}>
                    <option>--Status--</option>
                    <option value={this.state.status}>En cours</option>
                  </select> */}
                </div>
                <div className="formInput">
                  <label>Entreprise : </label>
                  <input
                    type="text"
                    name="company"
                    onChange={this.handleInput}
                    value={this.state.company}
                  />
                </div>

                <button type="submit">Sauver</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewContrat;
