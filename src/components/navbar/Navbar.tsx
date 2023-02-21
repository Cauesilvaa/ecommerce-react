import './Navbar.css'
import React from 'react'
import imgLogo from '../../assets/img-login.jpg'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary class-navbar">
  <div className="container-fluid">
    <img src={imgLogo} alt="" className='class-img'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Início</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
      </ul>
      <form className="d-flex search-navbar" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar