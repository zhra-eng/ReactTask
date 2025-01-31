import React from "react";

export default function About() {
  return (
    <>
      <div className="about ">
        <div className="text-center text-white pt-4">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            about component
          </h2>
          <div className="d-flex justify-content-center align-items-center ">
            <div className="line me-3 text-white"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 text-white"></div>
          </div>
        </div>
        <div className="container text-white py-4 px-5">
          <div className="row px-4">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
