import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import PasswordStrengthBar from "react-password-strength-bar";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Payment from "../assets/images/payment-logo.svg";
import "../assets/styles/password.css";
import { Footer, Header } from "../components";
import {
  updatePasswordUsers,
  retriveCurrentUser,
} from "./../redux/slices/userSlice";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const Password = () => {
  const { loading, message } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setOldShowPassword] = useState(false);

  const handleShowPassword = (e) => {
    e.preventDefault;
    setShowPassword((prev) => !prev);
  };
  const handleShowOldPassword = (e) => {
    e.preventDefault;
    setOldShowPassword((prev) => !prev);
  };

  useEffect(() => {
    dispatch(retriveCurrentUser());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  console.info(formData);

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

  useEffect(() => {
    if (message === "User new password updated") {
      toast.success("Password updated successfully");
    }
    if (message === "Old password is wrong") {
      toast.error("Old Password Incorrect");
    }
    if (message === "New password and confirm password not match") {
      toast.error("New Password Incorrect");
    }
  }, [message, dispatch]);

  const handleSubmit = (e) => {
    if (
      !formData.newPassword ||
      !formData.oldPassword ||
      !formData.confirmPassword
    ) {
      toast.error("Isi semua field terlebih dahulu !");
    } else {
      if (formData.newPassword !== formData.confirmPassword) {
        toast.error("Confirm Password & New Password Tidak Sesuai !");
      }
      e.preventDefault();
      dispatch(updatePasswordUsers(formData));
    }

    setFormData({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div>
      <Header />
      <Container fluid className="account-box p-5">
        <Container fluid="xl" className="account-main p-3">
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
          <Row>
            <Col xs={3} className="left-panel left-flex">
              <Button
                href="/#/account/profile"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-user-3-line"></i>
                <span>Profil</span>
              </Button>
              <Button className="mb-3" variant="info" size="lg">
                <div className="selected">
                  <i class="remix-icon ri-key-2-line"></i>
                  <span>Ubah Password</span>
                </div>
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
                href="/#/account/whislist"
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
                  redirect("/");
                }}
              >
                <i class="remix-icon ri-logout-box-r-line"></i>
                <span>Keluar</span>
              </Button>
            </Col>
            <Col xs={9} className="content-panel ps-5">
              <Card bg="light" key="Light" text="dark" className="mb-2">
                <Card.Header className="header-flex">
                  <div className="p-2 profile-header">
                    <i class="remix-icon ri-key-2-line"></i>
                    <span>Ganti Password</span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <div className="content">
                      <div className="p-3">
                        <Form.Label htmlFor="inputPassword5">
                          Password Lama{" "}
                          <span className="has-text-danger">*</span>
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              required
                              name="oldPassword"
                              value={formData.oldPassword}
                              onChange={handleFormData}
                              type={showOldPassword ? "text" : "password"}
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                            />
                          </Col>
                          <Col xs={1}>
                            <Form.Text id="passwordHelpBlock" muted>
                              <button
                                type="button"
                                className="btn-switchForm"
                                onClick={handleShowOldPassword}
                              >
                                {showPassword ? <EyeSlash /> : <Eye />}
                              </button>
                            </Form.Text>
                          </Col>
                        </Row>
                      </div>

                      <div className="p-3">
                        <Form.Label htmlFor="inputPassword5">
                          Password Baru{" "}
                          <span className="has-text-danger">*</span>
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              required
                              name="newPassword"
                              value={formData.newPassword}
                              onChange={handleFormData}
                              type={showPassword ? "text" : "password"}
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                            />
                          </Col>
                          <Col xs={1}>
                            <Form.Text id="passwordHelpBlock" muted>
                              <button
                                type="button"
                                className="btn-switchForm"
                                onClick={handleShowPassword}
                              >
                                {showPassword ? <EyeSlash /> : <Eye />}
                              </button>
                            </Form.Text>
                          </Col>
                        </Row>
                      </div>

                      <div className="p-3">
                        <Form.Label htmlFor="inputPassword5">
                          Konfirmasi Password{" "}
                          <span className="has-text-danger">*</span>
                        </Form.Label>
                        <Row>
                          <Col>
                            <Form.Control
                              required
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleFormData}
                              type={showPassword ? "text" : "password"}
                              id="inputPassword5"
                              aria-describedby="passwordHelpBlock"
                            />
                          </Col>
                          <Col xs={1}>
                            <Form.Text id="passwordHelpBlock" muted>
                              <button
                                type="button"
                                className="btn-switchForm"
                                onClick={handleShowPassword}
                              >
                                {showPassword ? <EyeSlash /> : <Eye />}
                              </button>
                            </Form.Text>
                          </Col>
                        </Row>
                      </div>
                      <div className="is-flex">
                        <PasswordStrengthBar password={formData.newPassword} />
                        <span className="has-text-grey">
                          Password harus memiliki setidaknya 6 karakter dan
                          mengandung setidaknya 1 simbol atau angka
                        </span>
                      </div>
                      <div className="btn-simpan mt-5">
                        <Button onClick={handleSubmit} variant="info">
                          {loading ? <Spinner /> : "Simpan"}
                        </Button>{" "}
                      </div>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card className="payment-content mt-5" style={{ width: "13rem" }}>
            <Card.Body>
              <Card.Title>
                <strong>Jenis Pembayaran:</strong>
              </Card.Title>
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
export default Password;
