import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const ClassesView = () => {
  const [state, setState] = useState([]);
  const id = localStorage.getItem("id");

  const navigate = useNavigate();
  const fetchData = () => {
    axios.get(`/admin/class/${id}`).then((response) => {
      console.log("response", response.data);
      setState(response.data.data);
    }).catch(error => toast(error.message));
  };
  console.log(state.id);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active">Classes</li>
    <li class="breadcrumb-item active" aria-current="page">View</li>
  </ol>
</nav>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Class Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {state?.map((sub) => {
          return (
            <>
              <tr>
                <td>{sub.name}</td>
                <td>{sub.description}</td>
                <td>
                  <i
                    className="bi bi-eye me-3"
                    onClick={() => {
                      navigate(`/CDView/${sub.id}`);
                    }}
                  ></i>
                  <i
                    className="bi bi-pencil me-3"
                    onClick={() => {
                      navigate(`/CDEdit/${sub.id}`);
                    }}
                  ></i>
                  <i
                    className="bi bi-trash3"
                    onClick={() => {
                      navigate(`/CDDelete/${sub.id}`);
                    }}
                  ></i>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
    <ToastContainer />
    </>
  );
};

export default ClassesView;
