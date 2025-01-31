import React from 'react'
import port1 from "../../../assets/poert1.png"
import port2 from "../../../assets/port2.png"
import port3 from "../../../assets/port3.png"
export default function Portfolio() {
  return (
  <>
  <div className="portfolio">
    <div className="text-center ">
      <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>portfolio component</h2>
      <div className="d-flex justify-content-center align-items-center ">
            <div className="line me-3 text-black"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line ms-3 text-black"></div>
          </div>
    </div>
    <div className="container pt-4">
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="image rounded-3 position-relative overflow-hidden">
            <img src={port1} alt="" className='w-100 rounded-3' />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="image rounded-3 position-relative overflow-hidden">
            <img src={port2} alt="" className='w-100 rounded-3' />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="image rounded-3 position-relative overflow-hidden">
            <img src={port3} alt="" className='w-100 rounded-3' />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="image rounded-3 position-relative overflow-hidden">
            <img src={port1} alt="" className='w-100 rounded-3' />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="image rounded-3 position-relative overflow-hidden">
            <img src={port2} alt="" className='w-100 rounded-3' />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="image rounded-3 position-relative overflow-hidden">
            <img src={port3} alt="" className='w-100 rounded-3' />
            <div className="layer position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center">
              <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="lightBoxContainer position-fixed w-100 h-100 start-0 top-0 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none">
    
      <img src={port1} alt=""  />
    
  </div>
  </>
  )
}
