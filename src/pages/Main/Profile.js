import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "../Credentials/TextField";
import * as Yup from "yup";
import anonymous from "../../assets/anonymous.png";
import moment from "moment";
import axios from "axios";

const Profile = () => {
  const [file, setFile] = useState();

  const id = localStorage.getItem("id");
  console.log("id",id);
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),

    mob: Yup.number().required("Phone number is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date is required"),
    address: Yup.string().required("Address is required"),
  });


  const handleSubmit = (values) => {
    console.log('values', file)
    const data = new FormData();
    // data.append('name', file.name);
     data.append('image', file);
    data.append('firstName', values?.firstName);
    data.append('dob', moment(values.dob)?.format('DD/MM/YYYY'));
    data.append('lastName', values?.lastName);
    data.append('mob', values?.mob);
    data.append('gender', values?.gender);
    data.append('address', values?.address);
    axios.post(`/profile`, data).then((response) => {
      console.log(response);
    });
  };

  const fileSelector = (event) => {
    console.log('event', event)
     setFile(event.target.files[0]);
    // var formData = new FormData();
    // formData.append("file", event.target.files[0]);
    // console.log(formData.getAll('file'));
    // setFile(formData);
    // console.log("formData",formData.get("file"));
  };

  return (
    <>
      
        <Formik
          initialValues={{
            image: anonymous,
            firstName: "",
            lastName: "",
            mob: "",
            gender: "",
            dob: "",
            address: "",
          }}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <div>
              <Form className="m-5 p-5">
                <input
                  type="file"
                  name="image"
                  onChange={(e) => fileSelector(e)}
                />
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />


                <TextField label="DOB" name="dob" type="date" />
                <TextField label="Address" name="address" type="text" />
                <TextField label="Phone Number" name="mob" type="number" />
                <Field as="select" name="gender">
                  <option>Option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
                <div className="">
                  <button
                    className="btn btn-dark mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    type="button"
                  >
                    Edit
                  </button>
                </div>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to save these changes?
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
    
    </>
  );
};

export default Profile;
