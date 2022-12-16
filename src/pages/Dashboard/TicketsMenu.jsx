import { Squash as Hamburger } from "hamburger-react";
import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import {
  ArrowRight,
  EyeFill,
  PencilFill,
  Plus,
  TrashFill,
  ArrowDownUp,
} from "react-bootstrap-icons";
import { useOutletContext } from "react-router-dom";
import Arrow from "../../assets/images/Vector.svg";
import { useSelector, useDispatch } from "react-redux";
import { retriveTickets } from "../../redux/slices/ticketSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TicketsMenu = () => {
  const { loading, status, message, ticket } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      retriveTickets({
        params: {
          from: "",
          to: "",
          type: "",
          date: "",
          willFly: false,
        },
      })
    );
  }, []);

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

      {loading ? (
        <div className="container-fluid px-4 m-2 d-flex justify-content-center align-item-center">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <div className="container-fluid px-4 m-2">
          <div className="row my-2 p-4 bg-white rounded shadow-sm">
            <div className="col">
              <Link to="add-tickets" style={{ width: "fit" }}>
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
              </Link>
              <table className="table bg-white table-hover text-secondary mt-4">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Tickets</th>
                    <th scope="col">Flight Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ticket.map((item, i) => (
                    <tr key={item.id}>
                      <td>{i + 1}</td>
                      <td>
                        <div className=" rounded">
                          <div className="d-flex flex-column justify-content-center align-items-start">
                            <div className="d-flex">
                              <div style={{ maxWidth: "200px" }}>
                                <h3>
                                  <strong>{item.from}</strong>
                                </h3>
                                <p>{item.airport_from}</p>
                              </div>
                              <span className="mx-4">
                                <img src={Arrow} alt="" />
                              </span>
                              <div style={{ maxWidth: "200px" }}>
                                <h3>
                                  <strong>{item.to}</strong>
                                </h3>
                                <p>
                                  {item.airport_to} <br />{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.date}</td>
                      <td>{item.type}</td>
                      <td>{item.curr_stock}</td>
                      <td>
                        {item.available ? (
                          <span className="badge text-bg-success">
                            Available
                          </span>
                        ) : (
                          <span className="badge text-bg-danger">
                            Unailable
                          </span>
                        )}
                      </td>
                      <td>
                        <Link to={`edit-tickets/${item.id}`}>
                          <Button variant="primary" className="mx-1">
                            <PencilFill />
                          </Button>
                        </Link>
                        <Button variant="danger">
                          <TrashFill />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsMenu;
