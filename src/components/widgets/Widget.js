import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaidIcon from "@mui/icons-material/Paid";

const Widget = ({ type, amount, number, name }) => {
  let data;

  //temporary

  switch (type) {
    case "employe":
      data = {
        title: "EMPLOYES",
        name: name,
        number: number,
        isMoney: false,
        link: "Voir tout les employes",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "contrat":
      data = {
        title: "CONTRATS",
        number: number,
        isMoney: false,
        calculable: true,
        link: "Voir tout les contrats",
        icon: (
          <AssignmentIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "paiments":
      data = {
        title: "PAIMENTS",
        number: number,
        isMoney: true,
        amount: amount,
        calculable: true,
        link: "Voir tout les paiments",
        icon: (
          <PaidIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="title">{data.name}</span>
        <span className="counter">
          {data.title} : {data.number}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
