import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Content from "../pages/Main/Content";
import TSidebar from "../Components/TSidebar";
import './layout.css';
import ASidebar from "../Components/ASidebar";

const Layout = () => {
  const rolee = localStorage.getItem('role');
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-2 sidebar">
          {
            rolee==='"student"' && <Sidebar />
          }
          {
            rolee==='"teacher"' && <TSidebar />
          }
          {
            rolee==='"admin"' && <ASidebar />
          }
          
          
        </div>
        <div className="col-10 main m-0 p-0">
          <div className="header shadow">
          <Header />
          </div>
          <div className="m-5">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
