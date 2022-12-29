import { Squash as Hamburger } from "hamburger-react";
import React, { useEffect, useState } from "react";
import { Button, Container, Pagination, Spinner, Modal } from "react-bootstrap";
import {
  ArrowDownUp,
  ArrowRight,
  PencilFill,
  Plus,
  TrashFill,
} from "react-bootstrap-icons";
import Loader from "react-loader-advanced";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import {
  retriveTickets,
  removeTickets,
  deleteTikcet,
} from "../../redux/slices/ticketSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav";


const TicketsMenu = () => {
  const { loading, status, message, ticket, totalPages, currentPage } =
    useSelector((state) => state.ticket);

  const dispatch = useDispatch();

  const [msg, setMsg] = useState(message);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handlePageChange = (page) => {
    dispatch(
      retriveTickets({
        params: {
          from: "",
          to: "",
          type: "",
          date: "",
          willFly: false,
          page,
        },
      })
    );
  };

  const handleDelete = () => {
    dispatch(removeTickets(id));
    dispatch(deleteTikcet(id));
    toast.success("Ticket Successfully Deleted!");
    setShow((prev) => !prev);
  };

  useEffect(() => {
    dispatch(
      retriveTickets({
        params: {
          from: "",
          to: "",
          type: "",
          date: "",
          willFly: false,
          page: 0,
        },
      })
    );
  }, [dispatch]);

  const [isToggled, setIsToggled] = useOutletContext();

  useEffect(() => {
    if (msg == "ticket created") {
      toast.success("Ticket Successfully Created!");
    }
  }, [msg]);

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
          Woohoo, are u sure you want to delete this ticket ?
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
      <div id="page-content-wrapper">
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
        <Nav
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          title={"Tickets"}
        />

        <div className="container-fluid px-4 m-2">
          <div
            className="row my-2 p-4 bg-white rounded shadow-sm"
            style={{ minHeight: "80vh" }}
          >
            <div className="col">
              <Link to="add" style={{ width: "fit" }}>
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
              <div style={{minHeight: "80vh"}}>
                <table className="table bg-white table-hover text-secondary mt-4">
                  <thead>
                    <tr>
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
                      <tr
                        key={item.id}
                        style={{ maxHeight: "100px", height: "100px" }}
                      >
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
                                  {item.type === "oneway" ? (
                                    <ArrowRight />
                                  ) : (
                                    <ArrowDownUp className="rotate" />
                                  )}
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
                        <td>
                          {new Date(item.date_start).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                            }
                          ) +
                            " - " +
                            new Date(item.date_end).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                        </td>
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
                          <Link to={`edit/${item.id}`}>
                            <Button variant="primary" className="mx-1">
                              <PencilFill />
                            </Button>
                          </Link>
                          <Button
                            variant="danger"
                            onClick={() => {
                              setId(item.id);
                              setShow((prev) => !prev);
                            }}
                          >
                            <TrashFill />
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

export default TicketsMenu;
