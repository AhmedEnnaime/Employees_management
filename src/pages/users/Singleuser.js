import axios from "axios";
import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Singleuser.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

// function withParams(Component) {
//   return props => <Component {...props} params={useParams()} />;
// }

class Singleuser extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone_number: "",
    address: "",
    nationality: "",
    numEdentification: "",
    cin: "",
    sex: "",
    birthday: "",
    birth_place: "",
    civil_state: "",
    npassport: "",
    departement: "",
    role: "",
    nbEnfants: "",
    diplomes: "",
    formation: "",
    contrat_name: "",
    poste_occupied: "",
    contrat_type: "",
    end_date: "",
    work_hours_week: "",
    monthly_salary: "",
    status: "",
    company: "",
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
        formation: res.data.employees.formation,
        contrat_name: res.data.employees.contrat_name,
        poste_occupied: res.data.employees.poste_occupied,
        contrat_type: res.data.employees.contrat_type,
        end_date: res.data.employees.end_date,
        work_hours_week: res.data.employees.work_hours_week,
        monthly_salary: res.data.employees.monthly_salary,
        status: res.data.employees.status,
        company: res.data.employees.company,
      });
    }
  }

  render() {
    return (
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <Link to={`/users/update/${this.props.id}`}>
                <div className="editButton">Edit</div>
              </Link>
              <h1 className="title">Information Employe</h1>
              <div className="item">
                <img src={logo} alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">{this.state.name}</h1>
                  <h3 className="itemTitle">
                    BC-Num : {this.state.numEdentification}
                  </h3>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{this.state.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">{this.state.phone_number}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">{this.state.address}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Lieu de Naissance : </span>
                    <span className="itemValue">{this.state.birth_place}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Etat Civile : </span>
                    <span className="itemValue">{this.state.civil_state}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date de Naissance : </span>
                    <span className="itemValue">{this.state.birthday}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Nationnality : </span>
                    <span className="itemValue">{this.state.nationality}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">CIN : </span>
                    <span className="itemValue">{this.state.cin}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Numero de Passport : </span>
                    <span className="itemValue">{this.state.cin}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Etat Civil : </span>
                    <span className="itemValue">{this.state.civil_state}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Departement : </span>
                    <span className="itemValue">{this.state.departement}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Poste : </span>
                    <span className="itemValue">{this.state.role}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Nombre des enfants : </span>
                    <span className="itemValue">{this.state.nbEnfants}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Diplomes : </span>
                    <span className="itemValue">{this.state.diplomes}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Derniere Formation : </span>
                    <span className="itemValue">{this.state.formation}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Contrat : </span>
                    <span className="itemValue">{this.state.status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Link to={`/contrats/update/${this.props.id}`}>
                <div className="editButton">Edit</div>
              </Link>
              <h1 className="title">Information Contrat</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">Contrat</h1>
                  <h3 className="itemTitle">
                    Contrat-Reference : {this.state.contrat_name}
                  </h3>
                  <div className="detailItem">
                    <span className="itemKey">Poste : </span>
                    <span className="itemValue"> {this.state.role}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Type :</span>
                    <span className="itemValue">{this.state.contrat_type}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date de debut contrat :</span>
                    <span className="itemValue">{this.state.debut_date}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Date de fin contrat :</span>
                    <span className="itemValue"> {this.state.end_date}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Heurs par semaine : </span>
                    <span className="itemValue">
                      {this.state.work_hours_week}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Salaire de base : </span>
                    <span className="itemValue">
                      {this.state.monthly_salary}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Etat : </span>
                    <span className="itemValue"> {this.state.status}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Entreprise : </span>
                    <span className="itemValue"> {this.state.company}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Derniere paiments</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Singleuser;
