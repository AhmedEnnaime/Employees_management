import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="employe" number={2} />
          <Widget type="contrat" number={0} />
          <Widget type="paiments" number={0} />
        </div>
      </div>
    </div>
  );
}
