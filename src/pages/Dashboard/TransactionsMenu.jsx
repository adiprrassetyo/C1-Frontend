import { Squash as Hamburger } from "hamburger-react";
import { useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import {
  ArrowDownUp,
  EyeFill,
  PencilFill,
  Plus,
  TrashFill,
} from "react-bootstrap-icons";
import { useOutletContext } from "react-router-dom";
import Loader from "react-loader-advanced";
import moment from "moment";
import { retriveTransAdmin } from "../../redux/slices/transactionSlice";
import { useSelector, useDispatch } from "react-redux";

const TransactionsMenu = () => {
  const {
    loading,
    status,
    transactionById,
    message,
    transactions,
    totalPages,
    currentPage,
  } = useSelector((state) => state.transaction);
  const [isToggled, setIsToggled] = useOutletContext();

  const dispatch = useDispatch();
  const handlePageChange = (page) => {
    dispatch(retriveTransAdmin(page));
  };

  useEffect(() => {
    dispatch(retriveTransAdmin(0));
  }, []);

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
            <h2 className="fs-4 m-0 text-white">Transactions</h2>
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
          <div
            className="row my-2 p-4 bg-white rounded shadow-sm"
            style={{ minHeight: "80vh" }}
          >
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
                    <th scope="col">Buyer</th>
                    <th scope="col">Item</th>
                    <th scope="col">Amounts</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Method</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions?.map((trans) => (
                    <tr style={{ height: 100 }}>
                      <td>{trans.id}</td>
                      <td>
                        {trans.user.firstname + " " + trans.user.lastname}
                      </td>
                      <td>{`${trans.ticket.from} - ${trans.ticket.to} ${trans.ticket.type} ticket `}</td>
                      <td>{`${trans.amounts} `}</td>
                      <td>
                        <center>{`${
                          trans.quantity.adult + trans.quantity.child
                        }`}</center>
                      </td>
                      <td>{`${trans.payment_method}   `}</td>
                      <td>
                        {trans.status === "PAYMENT SUCCESS" ? (
                          <span className="badge text-bg-success">
                            {trans.status}
                          </span>
                        ) : (
                          <span className="badge text-bg-warning">
                            {trans.status}
                          </span>
                        )}
                      </td>
                      <td>{moment(trans.updatedAt).format("DD MMM YYYY")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {totalPages > 1 ? (
                <Pagination>
                  <Pagination.First onClick={() => handlePageChange(0)} />
                  <Pagination.Prev
                    onClick={() =>
                      handlePageChange(
                        currentPage < 1 ? currentPage : currentPage - 1
                      )
                    }
                  />
                  {Array.from(Array(totalPages).keys()).map((page) => (
                    <Pagination.Item
                      key={page}
                      active={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() =>
                      handlePageChange(
                        currentPage > totalPages - 1
                          ? currentPage
                          : currentPage + 1
                      )
                    }
                  />
                  <Pagination.Last
                    onClick={() => handlePageChange(totalPages - 1)}
                  />
                </Pagination>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default TransactionsMenu;
