import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/binair-logo.svg";
import english_flag from "../assets/images/english-flag.svg";
import indo_flag from "../assets/images/indo-flag.svg";
import "../assets/styles/header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${sticky ? "sticky" : ""}`}
        >
          <Container>
            <Navbar.Brand>
              <Nav.Link href="/">
                {" "}
                <img src={logo} alt="logo" />{" "}
              </Nav.Link>
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
                    <NavLink to="/">
                      <img src={logo} alt="logo" />
                    </NavLink>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3 ">
                  <NavLink to="/flight" className="pb-3 text-secondary">
                    Penerbangan
                  </NavLink>
                  <NavLink to="/promo" className="pb-3 text-secondary">
                    Promo
                  </NavLink>
                  {/* <NavLink to="/booking" className="pb-3 text-secondary">
                    Pemesanan
                  </NavLink> */}
                </Nav>
                <div className="">
                  
                  {/* <NavDropdown title="IDR" className="nav-dropdown me-3 mt-2">
                    <NavDropdown.Item>US</NavDropdown.Item>
                    <NavDropdown.Item>IDR</NavDropdown.Item>
                  </NavDropdown> */}
                   <NavDropdown
                    title={<span><i class="ri-user-3-line me-1 ri-1x"></i>Noviyana</span>}
                    className="nav-dropdown me-3 mt-2"
                  >
                    <NavDropdown.Item>
                      <i class="remix-icon ri-user-3-line"></i>
                      <span className="ml-2 profile-item">Profil</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i class="remix-icon ri-key-2-line"></i>
                      <span className="ml-2">Ubah Password</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i class="remix-icon ri-contacts-book-line"></i>
                      <span className="ml-2">Daftar Kontak</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i class="remix-icon ri-list-check"></i>
                      <span className="ml-2">Daftar Traveler</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i class="remix-icon ri-calendar-check-line"></i>
                      <span className="ml-2">Daftar Pesanan</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i class="remix-icon ri-link"></i>
                      <span className="ml-2">Akun Terhubung</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i class="remix-icon ri-logout-box-r-line"></i>
                      <span className="ml-2">Keluar</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                  <Button href="/auth" className="btn btn-light button-login">
                    Login
                  </Button>
                 
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
