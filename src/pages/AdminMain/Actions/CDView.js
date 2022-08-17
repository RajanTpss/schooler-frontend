import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const CDView = () => {
  const idd = localStorage.getItem("id");
  const { id } = useParams();
  const [state, setState] = useState("");
  const [subject, setSubject] = useState([]);
  const [data, setData] = useState({
    classId:id,
  });
  const navigate = useNavigate();

  const fetchData = () => {
    axios.get(`/admin/class/${idd}/${id}`).then((response) => {
      setState(response.data.data);
    });
  };

  const fetchSubject = () => {
    axios.get(`/admin/subject/${id}`).then((response) => {
      console.log("response", response.data);
      setSubject(response.data.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchSubject();
  }, []);

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  }
  console.log(data)
  const handleSubject = (event)  => {
    event.preventDefault();
    axios.post(`/admin/subject`, data).then((response) => {
      console.log("response", response.data);
  }).catch(error => toast(error.message));
}
  return (
    <>
      <p>
        <b>ClassName : </b>
        {state.name}
      </p>
      <p>
        <b>Description : </b>
        {state.description}
      </p>

      <hr></hr>
      <div className="m-3">
        <h4>Subjects</h4>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Subject Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {subject?.map((sub) => {
            return (
              <>
                <tr>
                  <th scope="row">{sub.id}</th>
                  <td>{sub.name}</td>
                  <td>{sub.description}</td>
                  <td>
                    <i
                      className="bi bi-eye me-3"
                      onClick={() => {
                        navigate(`/SDDelete/:id`);
                      }}
                    ></i>
                    <i
                      className="bi bi-pencil me-3"
                      onClick={() => {
                        navigate(`/SDDelete/:id`);
                      }}
                    ></i>
                    <i className="bi bi-trash3"></i>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <hr></hr>
      <form onSubmit={handleSubject}>
        <div className="m-3">
          <h4>Add Subject</h4>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Name of Class"
            name='name'
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name='description'
            onChange={(event) => handleChange(event)}
          ></textarea>
        </div>
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default CDView;
