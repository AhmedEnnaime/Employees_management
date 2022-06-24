import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import "./Newuser.scss";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import swal from "sweetalert";
class Newuser extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    address: "",
    nationality: "",
    cin: "",
    sex: "",
    birthday: "",
    birth_place: "",
    civil_state: "",
    npassport: "",
    nbEnfants: "",
    diplomes: "",
    formation: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  saveEmployee = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const res = await axios.post(
      `http://127.0.0.1:8000/api/add-salarie`,
      this.state
    );
    this.setState({
      name: "",
      email: "",
      phone_number: "",
      address: "",
      nationality: "",
      cin: "",
      sex: "",
      birthday: "",
      birth_place: "",
      civil_state: "",
      npassport: "",
      nbEnfants: "",
      diplomes: "",
      formation: "",
    });

    if (res.data.success === true) {
      swal({
        title: "Employe Ajouter",
        text: "Vous avez ajouter un employe",
        icon: "success",
        button: "OK",
      });
      // this.setState({
      //   name: "",
      //   email: "",
      //   phone_number: "",
      //   address: "",
      //   nationality: "",
      //   cin: "",
      //   sex: "",
      //   birthday: "",
      //   birth_place: "",
      //   civil_state: "",
      //   numEdentification: "",
      //   departement: "",
      //   diplomes: "",
      // });
    } else {
      alert("Server Erreur");
    }
  };
  render() {
    return (
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1 className="datatableTitle">Ajouter l'Employe</h1>
            <Link to="/users" className="link">
              <ArrowBackIcon />
            </Link>
          </div>
          <div className="bottom">
            <div className="left">
              <GroupAddIcon className="icon" />
            </div>
            <div className="right">
              <form onSubmit={this.saveEmployee}>
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
                  {/* <select onChange={this.handleInput} name="sex">
                    <option value={this.state.sex}>Homme</option>
                    <option value={this.state.sex}>Femme</option>
                  </select> */}
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
                <button type="submit">Sauver</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newuser;
