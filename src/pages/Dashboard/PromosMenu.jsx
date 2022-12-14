import { Squash as Hamburger } from "hamburger-react";
import { Button, Container } from "react-bootstrap";
import {
  Plus
} from "react-bootstrap-icons";
import { useOutletContext } from "react-router-dom";

const PromosMenu = () => {
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
          <h2 className="fs-4 m-0 text-white">Promos</h2>
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
                  <th scope="col">ID Transactions</th>
                  <th scope="col">Amounts</th>
                  <th scope="col">Method</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>148c2ffd-d19c-4aca-b7f6-410adbd8147</td>
                  <td>Rp 750.000</td>
                  <td>Transfer Bank</td>
                  <td>
                    <span className="badge text-bg-success">complete</span>
                  </td>
                  <td>2022-11-30 11:52:14.928+07</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromosMenu;
