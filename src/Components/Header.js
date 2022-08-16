import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    navigate('/Signin');
  }
  return (
    <>
      <ul className="nav justify-content-center border-bottom">
        <li className="nav-item">
          <Link className="nav-link active text-dark m-3 text-white" to="/About">
            About Us
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle m-3 text-dark text-decoration-none text-white"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Admission
          </Link>
          <ul className="dropdown-menu border-radius shadow" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="#">
                Admission Procedure
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Fee Structure
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Withdrawal
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark m-3 text-white" to="#">
            News & Events
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle m-3 text-dark text-decoration-none text-white"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Academic
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle m-3 text-dark text-decoration-none text-white"
            to="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Awards & Achievement
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="#">
                Action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Another action
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to ="#">
                Something else here
              </Link>
            </li>
          </ul>
        </li>
             <button type="button m-2 p-2" className="btn btn text-white" onClick={() => handleLogout()}>Logout</button>
      </ul>
    </>
  );
};

export default Header;
