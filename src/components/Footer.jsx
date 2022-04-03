import React from 'react'
import '../styling/Footer.css'

export default function Footer() {
  return (
    <footer className="position-relative text-muted ">
        <section className="d-flex justify-content-center pb-1 ">


          <div className="text-white mt-5">
            <a href="mailto: huangben32@gmail.com" aria-label="mail button" className="me-4 text-reset ms-3"><i className="bi bi-envelope" /></a>
            <a href="https://github.com/RuiQiHuang1832" aria-label="github button" className="me-4 text-reset"><i className="bi bi-github" /></a>
            <a href="https://www.linkedin.com/in/rui-qi-huang-528a43220/" aria-label="linkedin Button" className="me-4 text-reset"><i className="bi bi-linkedin" /></a>
            <a className="me-4 text-reset" href="https://google.com" aria-label="discord button"><i className="bi bi-discord" /></a>
          </div>
        </section>
       
        <section>
          <div style={{ color: 'white' }} className="text-center p-2">
            © 2022 Copyright. All Rights Reserved.
          </div>
        </section>

      </footer>
  )
}
