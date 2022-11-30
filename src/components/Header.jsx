import React, {useState, useEffect} from "react";
import {Navbar, Nav, Container, NavDropdown, Button, Offcanvas }from "react-bootstrap";
import logo from "../assets/images/binair-logo.svg";
import english_flag from "../assets/images/english-flag.svg";
import indo_flag from "../assets/images/indo-flag.svg";
import "../assets/styles/header.css";


const Header = () => {
  const [sticky, setSticky] = useState(false);
  
  useEffect( () => { 
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
  return (
       <>
       
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`${sticky ? "sticky" : ""}`}>
          <Container>
            <Navbar.Brand>
            <Nav.Link href="/" > <img src={logo} alt="logo" /> </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 <Navbar.Brand>
                    <Nav.Link href="/" > <img src={logo} alt="logo" /> </Nav.Link>
                    </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link href="/flight" className="text-secondary">Penerbangan</Nav.Link>
                  <Nav.Link href="/promo" className="text-secondary">Promo</Nav.Link>
                  <Nav.Link href="/booking" className="text-secondary">Pemesanan</Nav.Link>
                </Nav>
                <div className="">
                    <NavDropdown title="Language" className="nav-dropdown me-3 mt-2" >
                    <NavDropdown.Item>
                      <img src={english_flag} width="20" alt="flag" />
                      <span className="ml-2"> English</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <img src={indo_flag} width="20" alt="flag" />
                      <span className="ml-2"> Indonesia</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="IDR" className="nav-dropdown me-3 mt-2">
                    <NavDropdown.Item>US</NavDropdown.Item>
                    <NavDropdown.Item>IDR</NavDropdown.Item>
                  </NavDropdown>
                  <Button href="/auth" className="btn btn-light button-login">Login</Button> 
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
