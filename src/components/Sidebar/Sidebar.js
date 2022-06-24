import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import RuleIcon from "@mui/icons-material/Rule";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GavelIcon from "@mui/icons-material/Gavel";
import PaidIcon from "@mui/icons-material/Paid";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">E-R-P</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">PRINCIPAL</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Employes</span>
            </li>
          </Link>
          <Link to="/contrats" style={{ textDecoration: "none" }}>
            <li>
              <AssignmentIcon className="icon" />
              <span>Contrats</span>
            </li>
          </Link>
          <Link to="/paiments" style={{ textDecoration: "none" }}>
            <li>
              <PaidIcon className="icon" />
              <span>Fiches de paie</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
