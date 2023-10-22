import { TbMathIntegralX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [buttonActive, setButtonActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  const enableNavbar = () => {
    setButtonActive((current) => !current);
    setNavbarActive((current) => !current);
  };
  const disableNavbar = () => {
    setButtonActive(false);
    setNavbarActive(false);
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={disableNavbar}>
            <TbMathIntegralX />
            <span>Tables Statistiques</span>
          </Link>
        </div>
        <ul className={navbarActive ? "links active" : "links"}>
          <li>
            <Link to="/loi-normale" onClick={disableNavbar}>
              Loi Normale
            </Link>
          </li>
          <li>
            <Link to="/loi-du-student" onClick={disableNavbar}>
              Loi du Student
            </Link>
          </li>
        </ul>
        <div
          className={buttonActive ? "button active" : "button"}
          onClick={enableNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
