import axios from "axios";
import React, { useState } from "react";

const ClassesCreate = () => {
  const idd =JSON.parse( localStorage.getItem("id"));
  console.log(idd);
  const [state, setState] = useState({
    userId:idd,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    console.log(idd);
    event.preventDefault();
    axios.post("/admin/class", state).then((response) => {
      console.log("response", response);
    });
  };

  return (
    <>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active">Classes</li>
    <li class="breadcrumb-item active" aria-current="page">Create</li>
  </ol>
</nav>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Class Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            onChange={(event) => handleChange(event)}
            placeholder="Name of Class"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="description"
            onChange={(event) => handleChange(event)}
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ClassesCreate;
