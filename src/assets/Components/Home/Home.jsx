import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import image from "../../../assets/avataaars.svg";

export default function Home() {
  return (
    <div className="home  ">
      <div className="text-center">
        <img src={image} alt="" className="mb-3   " />
        <div className="text-center py-4 text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            start Framework
          </h2>
          <div className="d-flex justify-content-center align-items-center ">
            <div className="line me-3 text-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 text-white"></div>
          </div>
        </div>
        <div className="text-white">Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
