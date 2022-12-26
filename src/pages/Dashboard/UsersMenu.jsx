import { Squash as Hamburger } from "hamburger-react";
import { useEffect } from "react";
import { Button, Container, Image, Spinner } from "react-bootstrap";
import { PencilFill, PersonFillAdd, TrashFill } from "react-bootstrap-icons";
import { useOutletContext } from "react-router-dom";
import Logo from "../../assets/images/binair-blue-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { retriveUsers } from "./../../redux/slices/userSlice";
import Loader from "react-loader-advanced";
import moment from "moment/moment";

const UsersMenu = () => {
  const { loading, status, userById, message, users, totalPages, currentPage } =
    useSelector((state) => state.user);

  const dispatch = useDispatch();
  console.info(users);

  useEffect(() => {
    dispatch(retriveUsers(0));
  }, []);

  const [isToggled, setIsToggled] = useOutletContext();
  return (
    <Loader
      show={loading}
      message={
        <>
          <Spinner animation="border" variant="info" size="xl" />
        </>
      }
      className={"w-100"}
    >
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
            <h2 className="fs-4 m-0 text-white">Users</h2>
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
                  <PersonFillAdd size="20" />{" "}
                  <p className="m-0 p-0 d-flex align-items-center justify-content-center">
                    ADD NEW
                  </p>
                </div>
              </Button>
              <table className="table bg-white table-hover text-secondary mt-4">
                <thead>
                  <tr>
                    <th scope="col">Users</th>
                    <th scope="col">Sign At</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="d-flex ">
                          <div
                            className={"d-flex users-photo border rounded me-2"}
                          >
                            <Image fluid src={user.profile_image} />
                          </div>
                          <div className="users-description d-flex flex-column ">
                            <strong className="text-black">
                              {user.firstname}
                              &nbsp;
                              {user.lastname}
                            </strong>
                            {user.email}
                          </div>
                        </div>
                      </td>
                      <td>{moment(user.createdAt).format("DD MMM YYYY")}</td>
                      <td>{user.role}</td>
                      <td>
                        <Button variant="primary">
                          <PencilFill />
                        </Button>{" "}
                        <Button variant="danger">
                          <TrashFill />
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default UsersMenu;
