import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./details.css";
import { ToastContainer, toast } from 'react-toastify';

// import image from '../../../src/assets/anonymous.png';

const Details = () => {
  const [openMenu, setOpenMenu] = useState("information");
  const [mdata, setmData] = useState({});

  const rolee = localStorage.getItem("role");
  const id = localStorage.getItem("id");
  const baseURL = "http://192.168.1.172:5001/";

  const fetchData = () => {
    axios.get(`/profile/${id}`).then(({ data }) => {
      setmData({ ...data.data, picture: data.data.image });
    }).catch(error => toast(error.message));
  };

  useEffect(() => {
    fetchData();
  }, []);


  console.log(mdata)
  

  return (
    <>
    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">Profile</li>
  </ol>
</nav>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img rounded-circle">
                {mdata?.picture && (
                  <img src={`${baseURL}${mdata.picture}`} alt="" />
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h4>{`${mdata.firstName} ${mdata.lastName}`}</h4>
                {rolee === '"student"' && <h5>Student</h5>}
                {rolee === '"teacher"' && <h5>Teacher</h5>}
                {rolee === '"admin"' && <h5>Admin</h5>}
              </div>
            </div>
          </div>
          <div className="row"></div>
        </form>
      </div>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-6">
              <div className="profile-head">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li
                    className="nav-item"
                    onClick={() => {
                      setOpenMenu("information");
                    }}
                  >
                    <a
                      className={
                        openMenu === "information"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Information
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setOpenMenu("about");
                    }}
                  >
                    <a
                      className={
                        openMenu === "about" ? "nav-link active" : "nav-link"
                      }
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                {openMenu === "information" ? (
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6 ">
                        <p>{`${mdata.firstName} ${mdata.lastName}`}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Mobile</label>
                      </div>
                      <div className="col-md-6">
                        <p>{mdata.mob}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <p>{mdata.gender}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Address</label>
                      </div>
                      <div className="col-md-6">
                        <p>{mdata.address}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>DOB</label>
                      </div>
                      <div className="col-md-6">
                        <p>{moment(mdata.dob).format("l")}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )}
                {openMenu === "about" ? (
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User</label>
                      </div>
                      <div className="col-md-6">
                        <p>Ishaan</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Ishaan Gautam</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>ISHAANGAUTAM@gmail.com</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Details;
