import React,{useContext} from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { myContext } from '../App';

const Mainnavbar = () => {
  const {state,dispatch}=useContext(myContext)
  if(state){
    return(
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Friends Enterprises</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
              <Link to="/" className='links'>Home</Link>
              <Link to="about" className='links'>About</Link>
              <Link to="contact" className='links'>Contact</Link>
              <Link to="/logout" className='links'>Logout</Link>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }else{
    return(
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Friends Enterprises</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
              <Link to="/" className='links'>Home</Link>
              <Link to="about" className='links'>About</Link>
              <Link to="contact" className='links'>Contact</Link>
              <Link to="/login" className='links'>Login</Link>
              <Link to="/signup" className='links'>Signup</Link>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Mainnavbar