import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Newuser.scss";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

class EditUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    nationality: "",
    cin: "",
    sex: "",
    birthday: "",
    birth_place: "",
    civil_state: "",
    npassport: "",
    role: "",
    nbEnfants: "",
    diplomes: "",
    formation: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/salaries/${this.props.id}`
    );
    if (res.data.success === true) {
      this.setState({
        name: res.data.employees.name,
        email: res.data.employees.email,
        phone_number: res.data.employees.phone_number,
        address: res.data.employees.address,
        nationality: res.data.employees.nationality,
        numEdentification: res.data.employees.numEdentification,
        cin: res.data.employees.cin,
        sex: res.data.employees.sex,
        birthday: res.data.employees.birthday,
        birth_place: res.data.employees.birth_place,
        civil_state: res.data.employees.civil_state,
        npassport: res.data.employees.npassport,
        departement: res.data.employees.departement,
        role: res.data.employees.role,
        nbEnfants: res.data.employees.nbEnfants,
        diplomes: res.data.employees.diplomes,
        status: res.data.employees.status,
        formation: res.data.employees.formation,
      });
    }
  }
  updateEmploye = async (e) => {
    e.preventDefault();
    // let data = JSON.stringify(this.state);
    console.log(this.state);

    let data = JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address,
      nationality: this.state.nationality,
      numEdentification: this.state.numEdentification,
      cin: this.state.cin,
      sex: this.state.sex,
      birthday: this.state.birthday,
      birth_place: this.state.birth_place,
      civil_state: this.state.civil_state,
      npassport: this.state.npassport,
      departement: this.state.departement,
      role: this.state.role,
      nbEnfants: this.state.nbEnfants,
      diplomes: this.state.diplomes,
      status: this.state.status,
      formation: this.state.formation,
    });

    const res = await axios.put(
      `http://127.0.0.1:8000/api/salaries/${this.props.id}`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    document.getElementById("update-btn").innerText = "En attente ....";
    if (res.data.success === true) {
      document.getElementById("update-btn").innerText = "Modifier";
      alert("User Edited");
    } else {
      alert("Server Erreur");
    }
  };

  // saveEmployee = async (e) => {
  //   e.preventDefault();

  //   const res = await axios.post(
  //     `http://127.0.0.1:8000/api/update-salaries/${this.props.id}`,
  //     this.state
  //   );
  //   this.setState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     phone_number: "",
  //     address: "",
  //     nationality: "",
  //     cin: "",
  //     sex: "",
  //     birthday: "",
  //     birth_place: "",
  //     civil_state: "",
  //     npassport: "",
  //     role: "",
  //     nbEnfants: "",
  //     diplomes: "",
  //     formation: "",
  //   });

  //   if (res.data.success === true) {
  //     alert("User Created");
  //     this.setState({
  //       name: "",
  //       email: "",
  //       password: "",
  //       phone_number: "",
  //       address: "",
  //       nationality: "",
  //       cin: "",
  //       sex: "",
  //       birthday: "",
  //       birth_place: "",
  //       civil_state: "",
  //       numEdentification: "",
  //       departement: "",
  //       diplomes: "",
  //     });
  //   } else {
  //     alert("Server Erreur");
  //   }
  // };

  render() {
    return (
      <div>
        <div className="new">
          <Sidebar />
          <div className="newContainer">
            <Navbar />
            <div className="top">
              <h1 className="datatableTitle">Modifier l'employe</h1>
              <Link to={`/users/${this.props.id}`} className="link">
                <ArrowBackIcon />
              </Link>
            </div>
            <div className="bottom">
              <div className="left">
                <EditIcon className="icon" />
              </div>
              <div className="right">
                <form onSubmit={this.updateEmploye}>
                  <div className="formInput">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.handleInput}
                      value={this.state.name}
                    />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleInput}
                      value={this.state.email}
                    />
                  </div>
                  {/* <div className="formInput">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleInput}
                      value={this.state.password}
                    />
                  </div> */}
                  <div className="formInput">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone_number"
                      onChange={this.handleInput}
                      value={this.state.phone_number}
                    />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      onChange={this.handleInput}
                      value={this.state.address}
                    />
                  </div>
                  <div className="formInput">
                    <label>Diplomes : </label>
                    <input
                      type="text"
                      name="diplomes"
                      onChange={this.handleInput}
                      value={this.state.diplomes}
                    />
                  </div>
                  <div className="formInput">
                    <label>Derniere Formation : </label>
                    <input
                      type="text"
                      name="formation"
                      onChange={this.handleInput}
                      value={this.state.formation}
                    />
                  </div>
                  <div className="formInput">
                    <label>Nationality</label>
                    <input
                      type="text"
                      name="nationality"
                      onChange={this.handleInput}
                      value={this.state.nationality}
                    />
                  </div>
                  <div className="formInput">
                    <label>Cin</label>
                    <input
                      type="text"
                      name="cin"
                      onChange={this.handleInput}
                      value={this.state.cin}
                    />
                  </div>
                  <div className="formInput">
                    <label>Sex</label>
                    <input
                      type="text"
                      name="sex"
                      onChange={this.handleInput}
                      value={this.state.sex}
                    />
                  </div>
                  <div className="formInput">
                    <label>Date de Naissance</label>
                    <input
                      type="date"
                      name="birthday"
                      onChange={this.handleInput}
                      value={this.state.birthday}
                    />
                  </div>
                  <div className="formInput">
                    <label>Lieu de naissance</label>
                    <input
                      type="text"
                      name="birth_place"
                      onChange={this.handleInput}
                      value={this.state.birth_place}
                    />
                  </div>
                  <div className="formInput">
                    <label>Etat Civil</label>
                    <input
                      type="civil_state"
                      name="civil_state"
                      onChange={this.handleInput}
                      value={this.state.civil_state}
                    />
                  </div>
                  <div className="formInput">
                    <label>Numero d'identification</label>
                    <input
                      type="text"
                      name="numEdentification"
                      onChange={this.handleInput}
                      value={this.state.numEdentification}
                    />
                  </div>
                  <div className="formInput">
                    <label>Numero de passport</label>
                    <input
                      type="text"
                      name="npassport"
                      onChange={this.handleInput}
                      value={this.state.npassport}
                    />
                  </div>
                  <div className="formInput">
                    <label>Poste</label>
                    <input
                      type="text"
                      name="role"
                      onChange={this.handleInput}
                      value={this.state.role}
                    />
                  </div>
                  <div className="formInput">
                    <label>Departement</label>
                    <input
                      type="text"
                      name="departement"
                      onChange={this.handleInput}
                      value={this.state.departement}
                    />
                  </div>
                  <div className="formInput">
                    <label>Nombre des enfants</label>
                    <input
                      type="number"
                      min={0}
                      name="nbEnfants"
                      onChange={this.handleInput}
                      value={this.state.nbEnfants}
                    />
                  </div>
                  <button type="submit" id="update-btn">
                    Modifier
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditUser;
