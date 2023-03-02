import './Navbar.css'
import React from 'react'
import imgLogo from '../../assets/img-login.jpg'
import { BsFillCartFill } from "react-icons/bs";

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router';

const NavbarComponent = () => {

  const navigate = useNavigate()

  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary class-navbar" bg="light" expand="lg">
  <div className="container-fluid">
    <img src={imgLogo} alt="" className='class-img'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 class-color-text">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="" onClick={()=> navigate('/home')}>Início</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contato</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Minha conta</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#"> <BsFillCartFill /> </a>
        </li>
      </ul>
      <form className="d-flex search-navbar" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    {/* <Navbar expand="lg" className='class-nav'>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    </div>
  )
}

export default NavbarComponent