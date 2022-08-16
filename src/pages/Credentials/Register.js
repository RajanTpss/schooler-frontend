import { Field, Form, Formik } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

function App() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    age: Yup.number().required("age is required"),
    phoneNumber : Yup.number()
    .max(10, 'Must be of 10 digits')
    .min(9, 'Must be of 10 digits')
    .required("Phone number is required"),
    Gender: Yup.string()
      // .oneOf([Yup.ref("password"), null], "Password must match")
      .ensure()
      .required("Gender is required"),
  });
  return (
    <>
      <div className="App">
        <h1>FORM</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            phoneNumber : "",
            Gender: "",
          }}
          validationSchema={validate}
        >
          {(formik) => (
            <div>
              {console.log(formik.values)}
              <Form className="m-5 p-5">
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Age" name="age" type="number" />
                <TextField label="Phone Number" name="phoneNumber" type="number" />
                <Field as="select" name="Gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Field>
                <button className="btn btn-dark mt-3" type="submit">
                  Register
                </button>
                <button className="btn btn-dark mt-3" type="reset">
                  Reset
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default App;
