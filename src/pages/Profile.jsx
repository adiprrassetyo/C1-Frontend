import { useState, useEffect } from "react";
import { Header, Footer } from "../components";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  Card,
  Accordion,
  Form,
  InputGroup,
  FormControl,
  Spinner,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "../assets/styles/profile.css";
import Payment from "../assets/images/payment-logo.svg";
import { TypeH1 } from "react-bootstrap-icons";
import {
  retriveCurrentUser,
  updateCurrentUsers,
} from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../redux/slices/authSlice";

const Profile = () => {
  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const {
    userCurrent: user,
    loading,
    message,
  } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    gender: user.gender,
    email: user.email,
    phone: user.phone,
  });

  useEffect(() => {
    dispatch(retriveCurrentUser());
  }, [dispatch, onEdit]);

  const [profile_image, setProfile_image] = useState();
  console.info({ ...formData, profile_image });

  const handleChange = (event) => {
    event.preventDefault();
    setOnEdit((prev) => !prev);
  };

  const handleFormData = (e) => {
    const { name, value, type, checked } = event.target; //event target destructuring

    setFormData((prevFormData) => {
      //set State Value
      return {
        ...prevFormData, //take prev state to new object
        [name]: type === "checkbox" ? checked : value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
      };
    });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateCurrentUsers({ ...formData, profile_image }));
  };

  console.info({ message });
  useEffect(() => {
    if (message === "User updated") {
      toast.success("Profile updated successfully !");
    }
    if (message === "Update current user failed") {
      toast.error("Failed updating your Profile, try again later !");
    }
  }, [message, dispatch]);

  return (
    <div>
      <Header />
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
      <Container fluid className="account-box p-5">
        <Container fluid="xl" className="account-main p-3">
          <Row>
            <Col xs={3} className="left-panel left-flex">
              <Button className="mb-3" variant="info" size="lg">
                <div className="selected">
                  <i class="remix-icon ri-user-3-line"></i>
                  <span>Profil</span>
                </div>
              </Button>
              <Button
                href="/#/account/password"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-key-2-line"></i>
                <span>Ubah Password</span>
              </Button>
              <Button
                href="/#/account/order"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-calendar-check-line"></i>
                <span>Daftar Pesanan</span>
              </Button>
              <Button
                href="/#/account/wishlist"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-shopping-basket-2-line"></i>
                <span>Wishlist</span>
              </Button>
              <Button
                className="mb-3"
                variant="light"
                size="lg"
                onClick={() => {
                  // setDataUser({});
                  dispatch(logout());
                  toast.success("Logout Success");
                  redirect("/");
                }}
              >
                <i class="remix-icon ri-logout-box-r-line"></i>
                <span>Keluar</span>
              </Button>
            </Col>
            <Col xs={9} className="content-panel ps-5">
              <Card bg="light" key="Light" className="mb-2">
                <Card.Header className="header-flex">
                  <div className="p-2 profile-header">
                    <i class="remix-icon ri-user-3-line"></i>
                    <span>Profil</span>
                  </div>
                  {onEdit ? (
                    <></>
                  ) : (
                    <Button onClick={handleChange} variant="outline-info">
                      Sunting
                    </Button>
                  )}

                  {/* <a href="/#/account/profile/edit" className="has-text-warning p-3">Sunting</a> */}
                </Card.Header>
                {onEdit ? (
                  <Card.Body>
                    <div>
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                      >
                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom02"
                          >
                            <Form.Label>Nama Depan</Form.Label>
                            <Form.Control
                              type="text"
                              name="firstname"
                              onChange={handleFormData}
                              value={formData.firstname}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom02"
                          >
                            <Form.Label>Nama Akhir</Form.Label>
                            <Form.Control
                              type="text"
                              name="lastname"
                              onChange={handleFormData}
                              value={formData.lastname}
                            />
                            <Form.Control.Feedback>
                              Looks good!
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                        <Row className="mb-3">
                          <Form.Group
                            as={Col}
                            md="3"
                            controlId="validationCustom03"
                          >
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select
                              className="selectForm"
                              aria-label="Default select example"
                              name="gender"
                              onChange={handleFormData}
                              value={formData.gender}
                            >
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group
                            as={Col}
                            md="9"
                            controlId="validationCustom04"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="email@example.com"
                              name="email"
                              onChange={handleFormData}
                              value={formData.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              Masukan Email yang valid.
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Row>
                        <Form.Group controlId="validationCustom03">
                          <Form.Label>Nomor Telepon</Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            onChange={handleFormData}
                            value={formData.phone}
                          />
                          <Form.Control.Feedback type="invalid">
                            Masukan Nomor yang valid.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                          <Form.Label>Foto Profil</Form.Label>
                          <Form.Control
                            type="file"
                            onChange={(e) => {
                              setProfile_image(e.target.files[0]);
                            }}
                          />
                        </Form.Group>
                        <div className="d-flex justify-content-end">
                          <Button
                            variant="outline-info"
                            size="lg"
                            className="m-2"
                            onClick={handleChange}
                          >
                            Back
                          </Button>
                          <Button
                            variant="outline-info"
                            size="lg"
                            className="m-2"
                            type="submit"
                          >
                            {!loading ? "Update" : <Spinner />}
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card.Body>
                ) : (
                  <Card.Body>
                    <div className="content-flex">
                      <div className="profile-item is-full p-2">
                        <p className="mb-0 has-text-grey">Nama</p>
                        <p className="mb-0 mt-1 normal">
                          {user.gender === "Perempuan"
                            ? `Ny. ${user.firstname} ${user.lastname}`
                            : `Tn. ${user.firstname} ${user.lastname}`}
                        </p>
                      </div>
                      <div className="profile-item is-half p-2">
                        <p className="mb-0 has-text-grey">Jenis Kelamin</p>
                        <p className="mb-0 mt-1 normal">{user.gender}</p>
                      </div>
                      <div className="profile-item is-half p-2">
                        <p className="mb-0 has-text-grey">Email</p>
                        <p className="mb-0 mt-1 normal">{user.email}</p>
                      </div>
                      <div className="profile-item is-full p-2">
                        <p className="mb-0 has-text-grey">Nomor Telepon</p>
                        <p className="mb-0 mt-1 normal">{user.phone}</p>
                      </div>
                    </div>
                  </Card.Body>
                )}
              </Card>
            </Col>
          </Row>

          <Card className="payment-content mt-5" style={{ width: "13rem" }}>
            <Card.Title>
              <strong>Jenis Pembayaran:</strong>
            </Card.Title>
            <Card.Body>
              <Card.Text>
                <img
                  src={Payment}
                  alt="
                                    payment"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};

export default Profile;
