import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg d-flex flex-wrap fixed-top py-4">
      <div className="container">
        <Link to="" className='navbar-brand text-white text-uppercase fw-bolder fs-2'>Start Framework </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id='navbarNavDropdown'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item me-3'>
              <NavLink to="about" className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2'>about</NavLink>
            </li>
            <li className='nav-item me-3'>
              <NavLink to="portfolio" className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2'>portfolio</NavLink>
            </li>
            <li className='nav-item me-3'>
              <NavLink to="contact" className='nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2'>contact</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
    </>
  )
}
