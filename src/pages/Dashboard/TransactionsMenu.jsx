import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Modal, Pagination } from "react-bootstrap";
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
import {
  removeTrans,
  deleteTrans,
  retriveTransAdmin,
} from "../../redux/slices/transactionSlice";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Nav from "./Nav";

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

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleDelete = () => {
    dispatch(removeTrans(id));
    dispatch(deleteTrans(id));
    toast.success("Transaction Successfully Deleted!");
    setShow((prev) => !prev);
  };

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
      <Modal show={show} onHide={() => setShow((prev) => !prev)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, are u sure you want to delete this transaction ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow((prev) => !prev)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div id="page-content-wrapper">
        <Nav isToggled={isToggled} setIsToggled={setIsToggled} title={"Transaction"} />

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
              <div style={{ minHeight: "80vh" }}>
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
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions?.map((trans) => (
                      <tr style={{ height: 100 }}>
                        <td>{trans.id}</td>
                        <td>
                          {trans.user.firstname + " " + trans.user.lastname}
                        </td>
                        <td>{`${trans.ticket?.from} - ${trans.ticket?.to} ${trans.ticket?.type} ticket `}</td>
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
                        <td>
                          <Button variant="danger">
                            <TrashFill
                              onClick={() => {
                                setId(trans.id);
                                setShow((prev) => !prev);
                              }}
                            />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex mx-auto align-items-center justify-content-center">
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
      </div>
    </Loader>
  );
};

export default TransactionsMenu;
