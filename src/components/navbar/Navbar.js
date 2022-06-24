import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div></div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src={logo} alt="bc-skills img" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
