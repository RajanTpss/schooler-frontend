import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const CDEdit = () => {
  const idd = localStorage.getItem("id");
  const {id} = useParams()
  const [state, setState]= useState("");
  const navigate = useNavigate()

  const fetchData = () => {
    axios.get(`/admin/class/${idd}/${id}`).then((response) => {
      console.log("response", response.data);
      setState(response.data.data)
    }).catch(error => toast(error.message));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Class Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Name of Class"
          Value={state.name}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          Value={state.description}
        ></textarea>
      </div>
      <button className="btn btn-dark">Submit</button>
      <ToastContainer />
    </>
  );
};

export default CDEdit;
