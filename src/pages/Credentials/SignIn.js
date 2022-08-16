import { Field, Form, Formik } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState("");
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("n", values);
    axios.post("/login", values).then((response) => {
      console.log("login response", response);
      setData(response.data.data);
      setToken(response.data.token);
      setStatus(response.status);
      setId(response.data.data.id);
    });
  };

  if (status === 200) {
    localStorage.setItem("role", JSON.stringify(data.role));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("id", JSON.stringify(id));

    navigate("/");
  } else {
    console.log("Error");
  }

  console.log(data);

  // http://localhost:5000/api/login
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <>
            <Form>
              <section className="background-radial-gradient overflow-hidden container-fluid">
                <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                  <div className="row gx-lg-5 align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <h1 className="my-5 display-5 fw-bold ls-tight text-white">
                        The best offer <br />
                        <span>for your business</span>
                      </h1>
                      <p className="mb-4 opacity-70 text-white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Temporibus, expedita iusto veniam atque, magni
                        tempora mollitia dolorum consequatur nulla, neque
                        debitis eos reprehenderit quasi ab ipsum nisi dolorem
                        modi. Quos?
                      </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                      <div
                        id="radius-shape-1"
                        className="position-absolute rounded-circle shadow-5-strong"
                      ></div>
                      <div
                        id="radius-shape-2"
                        className="position-absolute shadow-5-strong"
                      ></div>

                      <div className="card bg-glass">
                        <div className="card-body px-4 py-5 px-md-5">
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form3Example3"
                              className="form-control"
                              {...formik.getFieldProps("email")}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3"
                            >
                              Email address
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              id="form3Example4"
                              className="form-control"
                              type={showPassword ? "text" : "password"}
                              {...formik.getFieldProps("password")}
                            />
                            {showPassword ? (
                              <i
                                className="bi bi-eye-slash-fill icon"
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                  console.log("clicked");
                                }}
                              ></i>
                            ) : (
                              <i
                                className="bi bi-eye-fill icon"
                                onClick={() => {
                                  setShowPassword(!showPassword);
                                  console.log("clicked");
                                }}
                              ></i>
                            )}
                            <label
                              className="form-label"
                              htmlFor="form3Example4"
                            >
                              Password
                            </label>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                          >
                            Sign In
                          </button>

                          <div className="text-center">
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </button>

                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-google"></i>
                            </button>

                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-twitter"></i>
                            </button>

                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <i className="fab fa-github"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}

export default App;
