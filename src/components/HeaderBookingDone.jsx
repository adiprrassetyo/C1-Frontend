import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Offcanvas,
} from "react-bootstrap";
// import { jwt } from "jsonwebtoken";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/binair-logo.svg";
import english_flag from "../assets/images/english-flag.svg";
import indo_flag from "../assets/images/indo-flag.svg";
import "../assets/styles/headerBooking.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const HeaderBookingDone = () => {
    const [sticky, setSticky] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

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
              <Link to="/">
                {" "}
                <img src={logo} alt="logo" />{" "}
              </Link>
            </Navbar.Brand>
            <Nav className="flex-grow-1 pe-3 ">
                    <ul className="bar-timeline">
                        <li className="active">Pesanan</li>
                        <li className="active">Pembayaran</li>
                        <li className="active">Selesai</li>
                    </ul>
                </Nav>
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
              <Offcanvas.Body className="justify-content-end">
                
                <div className="d-flex justify-content-center align-items-center">
                  <NavLink to="/auth" className="m-0 p-0">
                    <Button
                      className={
                        user
                          ? "btn btn-light button-login d-none"
                          : "btn btn-light button-login"
                      }
                    >
                      Login
                    </Button>
                  </NavLink>

                  <NavDropdown
                    title={
                      <span className="d-flex justify-content-center align-items-center">
                        <i className="ri-user-3-line me-1 ri-1x"></i>
                        {user?.firstname}
                      </span>
                    }
                    className={user ? `nav-dropdown` : `nav-dropdown d-none`}
                    // noCarret
                  >
                    <NavDropdown.Item>
                      <i className="remix-icon ri-user-3-line"></i>
                      <span className="ml-2 profile-item">Profil</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i className="remix-icon ri-key-2-line"></i>
                      <span className="ml-2">Ubah Password</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i className="remix-icon ri-contacts-book-line"></i>
                      <span className="ml-2">Daftar Kontak</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i className="remix-icon ri-list-check"></i>
                      <span className="ml-2">Daftar Traveler</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i className="remix-icon ri-calendar-check-line"></i>
                      <span className="ml-2">Daftar Pesanan</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i className="remix-icon ri-link"></i>
                      <span className="ml-2">Akun Terhubung</span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        // setDataUser({});
                        dispatch(logout());
                      }}
                    >
                      <i className="remix-icon ri-logout-box-r-line"></i>
                      <span className="ml-2">Keluar</span>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
}

export default HeaderBookingDone;