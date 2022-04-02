import React from 'react';
import "../styling/Navbar.css"

export default function Navbar() {

    const fontSize = {
        fontSize: '18px',
      };

  return (
    <div className="">
        <nav id="navBackgroundColor" className="navbar navbar-expand-lg navbar-dark pt-5 ">
          <span className="container">
            <button id="btnprops" className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#collapsethis">
              <div style={{ fontSize: '27px' }}>
                {/** being edited with css + bs. need to include d-flex,else not editable in css */}
                <i id="navbaricontop" className="d-flex bi bi-dash-lg" />
                <i id="navbariconmid" className="d-flex bi bi-dash-lg" />
                <i id="navbariconbot" className="d-flex bi bi-dash-lg" />

              </div>

            </button>
            {/** for mobile */}
            <h2 className="navbar-brand ms-5  fs-3 fw-bold d-block d-lg-none">
              <span className="text-white ">Rui Huang</span>
            </h2>

            <div className="collapse navbar-collapse justify-content-between" id="collapsethis" style={fontSize}>
              {/** for desktop */}
            
              <div className="navbar-nav ">

                <a href="/" className="nav-link text-muted fw-bold p-md-0 p-sm-0 p-0 mt-3 mt-lg-0 mt-xl-0 ">home</a>
                <a href="#aboutpage" className="nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  ">about me</a>
                <a href="#projectspage" className="nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0  "> projects</a>
                <a href="/members" className="nav-link text-muted ms-xl-5 ms-lg-5  fw-bold p-md-0 p-sm-0 p-0 me-5 ">skills</a>
                {/** for mobile   */}
              
              </div>
              <h2 className=" ms-5 fs-3 fw-light d-none d-lg-block ">
                <span className="text-white ">rui huang</span>
              </h2>
              

            </div>

          </span>
        </nav>
      </div>
  )
}
