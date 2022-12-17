import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";

const MainMenu = () => {
  const [isToggled, setIsToggled] = useOutletContext();

  return (
    <div id="page-content-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
          <Container className="bg-white rounded me-2 p-0">
            <Hamburger
              size={22}
              toggled={isToggled}
              toggle={() => {
                setIsToggled(!isToggled);
              }}
              style={{ margin: 0 }}
            />
          </Container>

          <h2 className="fs-4 m-0 text-white">Dashboard</h2>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle second-text fw-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user me-2" />
                John Doe
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid px-4">
        <div className="row g-3 my-2">
          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">720</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">4920</h3>
                <p className="fs-5">Sales</p>
              </div>
              <i className="fas fa-hand-holding-usd fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">3899</h3>
                <p className="fs-5">Delivery</p>
              </div>
              <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>

          <div className="col-md-3">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">%25</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3" />
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default MainMenu;
