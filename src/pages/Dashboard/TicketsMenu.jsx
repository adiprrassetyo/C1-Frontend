import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  ArrowRight,
  EyeFill,
  PencilFill,
  Plus,
  TrashFill,
  ArrowDownUp,
} from "react-bootstrap-icons";
import { useOutletContext } from "react-router-dom";

const TicketsMenu = () => {
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
          <h2 className="fs-4 m-0 text-white">Tickets</h2>
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
      <div className="container-fluid px-4 m-2">
        <div className="row my-2 p-4 bg-white rounded shadow-sm">
          <div className="col">
            <Button
              variant="success"
              className="d-flex align-items-center justify-content-center m-0"
            >
              <div
                className="d-flex gap-2 align-items-center m-0 p-0"
                style={{ fontSize: 12 }}
              >
                <Plus size="20" />{" "}
                <p className="m-0 p-0 d-flex align-items-center justify-content-center">
                  ADD NEW
                </p>
              </div>
            </Button>
            <table className="table bg-white table-hover text-secondary mt-4">
              <thead>
                <tr>
                  <th scope="col">Tickets</th>
                  <th scope="col">Type</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                      className=" rounded w-50"
                    >
                      <div className="d-flex flex-column justify-content-center align-items-start">
                        <div>
                          <span className="text-black fw-bold">Jakarta</span>{" "}
                          (Bandara Soekarno Hatta)
                        </div>
                        <center><ArrowDownUp /></center>
                        <div>
                          <span className="text-black fw-bold">Surabaya</span>{" "}
                          (Bandara Juanda)
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>One Way</td>
                  <td>25</td>
                  <td>
                    <span className="badge text-bg-success">Available</span>
                  </td>
                  <td>
                    <Button
                      data-bs-toggle="collapse"
                      data-bs-target="#r1"
                      variant="warning"
                    >
                      <EyeFill />
                    </Button>
                    <Button variant="primary" className="mx-1">
                      <PencilFill />
                    </Button>
                    <Button variant="danger">
                      <TrashFill />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsMenu;
