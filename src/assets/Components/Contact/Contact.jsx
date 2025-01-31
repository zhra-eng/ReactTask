import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container pt-3">
        <div className="contact">
          <div className="text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              contact section
            </h2>
            <div className="d-flex justify-content-center align-items-center ">
              <div className="line me-3 "></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3 "></div>
            </div>
          </div>
          <form className="w-75 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid ">
            {/* <label htmlFor="userName" className="top position-relative top-0 ">
              userName :
            </label> */}
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="userName"
              className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
            />
            {/* <label htmlFor="userAge" className="top position-relative top-0">
              userAge :
            </label> */}
            <input
              type="text"
              id="userAge"
              name="userAge"
              placeholder="userAge"
              className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
            />
            {/* <label htmlFor="userEmail" className="top position-relative top-0">
              userEmail :
            </label> */}
            <input
              type="text"
              id="userEmail"
              name="userEmail"
              placeholder="userEmail"
              className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
            />
            {/* <label htmlFor="userPassword" className="top position-relative top-0">
              userPassword :
            </label> */}
            <input
              type="text"
              id="userPassword"
              name="userPassword"
              placeholder="userPassword"
              className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"
            />
            <button className="btn mt-4 text-white"> send Message </button>
          </form>
        </div>
      </div>
    </>
  );
}
