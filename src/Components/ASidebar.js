import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const ASidebar = () => {
  console.log("Teacher Sidebar");
  return (
    <>
      <div className="wrapper ">
        <nav id="sidebar">
          <div className="sidebar-header p-4 mb-5 text-white">
            <h4>Admin</h4>
          </div>

          <ul className="list-unstyled components">
            <Link
              className="text-dark text-decoration-none ps-4 text-white"
              to="/"
            >
              Profile
            </Link>
            <div className="accordion-item my-5">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed shadow-none Accord border-none me-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {" "}
                  Employees
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse text-white"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#flush-headingOne"
              >
                <div className="accordion-body text-dark">
                  <Link className="text-dark text-decoration-none" to="/list">
                    Teacher
                  </Link>
                </div>
                <div className="accordion-body text-dark">
                  <Link className="text-dark text-decoration-none" to="/create">
                    Other Emp.
                  </Link>
                </div>
              </div>
            </div>
            <li></li>
            <li>
              <div className="accordion-item mb-5">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed shadow-none Accord border-none me-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    {" "}
                    Students
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse text-white"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#flush-headingTwo"
                >
                  <div className="accordion-body text-dark">
                    <Link
                      className="text-dark text-decoration-none"
                      to={`/Opted`}
                    >
                      Elementary
                    </Link>
                  </div>
                  <div className="accordion-body text-dark">
                    <Link
                      className="text-dark text-decoration-none"
                      to="/AttendanceS"
                    >
                      Middle
                    </Link>
                  </div>
                  <div className="accordion-body text-dark">
                    <Link
                      className="text-dark text-decoration-none"
                      to="/AttendanceS"
                    >
                      High
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li className="mt-5">
              <Link
                className="text-dark text-decoration-none ps-4 text-white"
                to="/Attendance"
              >
                Attendence
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ASidebar;
