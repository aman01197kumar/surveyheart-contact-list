import Logo from "../../assets/Logo.png";
import "./styles.css";

export const Header = () => (
  <div className="header-container">
    <img src={Logo} className="logo" width="15%" alt="company-logo" />
  </div>
);
