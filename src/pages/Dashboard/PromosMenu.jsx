import { Squash as Hamburger } from "hamburger-react";
import {
  Button,
  Container,
  Image,
  Spinner,
  Pagination,
  Modal,
} from "react-bootstrap";
import { PencilFill, Plus, TrashFill } from "react-bootstrap-icons";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  retrivePromosAdmin,
  retrivePromos,
  removePromo,
  deletePromo,
} from "../../redux/slices/promoSlice";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Loader from "react-loader-advanced";
import { ToastContainer, toast } from "react-toastify";
import Nav from "./Nav";

const PromosMenu = () => {
  const {
    loading,
    status,
    promoById,
    message,
    promos,
    totalPages,
    currentPage,
  } = useSelector((state) => state.promo);

  const [msg, setMsg] = useState(message);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const handleDelete = () => {
    dispatch(removePromo(id));
    dispatch(deletePromo(id));
    toast.success("Promo Successfully Deleted!");
    setShow((prev) => !prev);
  };

  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(retrivePromos(page));
  };

  useEffect(() => {
    dispatch(retrivePromos(0));
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
      <Modal show={show} onHide={() => setShow((prev) => !prev)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, are u sure you want to delete this promo item ?
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
          title={"Promos"}
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

              <table className="table bg-white table-hover text-secondary mt-4">
                <thead>
                  <tr>
                    <th scope="col">Display</th>
                    <th scope="col">Description</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Promo Code</th>
                    <th scope="col">Due Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {promos?.map((promo) => (
                    <tr key={promo.id}>
                      <td>
                        <Image
                          src={promo.promo_image}
                          alt="Alt text"
                          width={300}
                          style={{ height: 100 }}
                          className="img-fluid rounded"
                        />
                      </td>
                      <td>
                        {promo.title}
                        <br />
                        {promo.desc}
                      </td>
                      <td>{promo.discount}%</td>
                      <td>
                        {moment().isBefore(
                          moment(promo.expire).format("DD MMM YYYY")
                        ) ? (
                          <span className="badge text-bg-success">Useable</span>
                        ) : (
                          <span className="badge text-bg-danger">Expired</span>
                        )}
                      </td>
                      <td>{promo.promo_code}</td>
                      <td>{moment(promo.expire).format("DD MMM YYYY")}</td>
                      <td>
                        <Link to={`edit/${promo.id}`}>
                          <Button variant="primary" className="mx-1">
                            <PencilFill />
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => {
                            setId(promo.id);
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

export default PromosMenu;
