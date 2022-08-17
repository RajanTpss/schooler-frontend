import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import SignIn from "./pages/Credentials/SignIn";
import Register from "./pages/Credentials/Register";
import Protectedd from "./pages/Credentials/Protectedd";
import Protected from "./pages/Credentials/Protected";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
// import VideoPlayer from "./pages/Credentials/VideoPlayer";

const App = () => {

  let token = JSON.parse(localStorage.getItem("token"));

  axios.defaults.baseURL = "http://192.168.1.172:5001/api/";
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Protected Component={Layout} />} />
        <Route path="/Signin"  element={<Protectedd Component={SignIn} />}  />
        <Route path="/Register" element={<Register />} />
        {/* <Route path = '/Video' element={<VideoPlayer />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
