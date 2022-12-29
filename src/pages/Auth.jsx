import React, { useState, useEffect } from "react";
import "../assets/styles/auth.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Spinner,
  Alert,
} from "react-bootstrap";
import WhiteLogo from "../assets/images/binair-white-logo.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser, clearState } from "../redux/slices/authSlice";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const Auth = () => {
  const { loading, message, user, status } = useSelector((state) => state.auth);

  const [authData, setAuthData] = useState({
    loading,
    message,
    user,
    status,
  });
  //Form Data State
  const initialState = {
    firstname: "",
    lastname: "",
    gender: "Laki-laki",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState();

  //Switch State
  const [isSignUp, setIsSignUp] = useState(false);
  const dispatch = useDispatch();
  const redirect = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user"))?.token;
    if (token) {
      redirect(-1);
    }
  }, []);

  //Switch function
  const switchForm = (e) => {
    e.preventDefault();
    setIsSignUp((prev) => !prev);
    dispatch(clearState());
  };

  useEffect(() => {
    setAuthData(loading, message, user, status);
  }, [authData, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(registerUser({ formData: { ...formData, phone }, redirect }));
      // dispatch(clearState());
    } else {
      dispatch(loginUser({ formData, redirect }));
      // dispatch(clearState());
    }
    setFormData(initialState);
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target; //event target destructuring

    setFormData((prevFormData) => {
      //set State Value
      return {
        ...prevFormData, //take prev state to new object
        [name]: type === "checkbox" ? checked : value,
        // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
      };
    });
  }

  const handleShowPassword = (e) => {
    e.preventDefault;
    setShowPassword((prev) => !prev);
  };

  return (
    <Container fluid className="auth">
      <Container className="auth-content">
        <Container className="auth-logo">
          <img
            src={WhiteLogo}
            alt="Binair Logo"
            className="binair-logo fluid"
            loading="eager"
          />
        </Container>
        <Container className="auth-main rounded-2">
          <Row>
            <Col>
              {message && (
                <Alert
                  variant={
                    status === "success"
                      ? "success"
                      : status === "error"
                      ? "danger"
                      : "warning"
                  }
                >
                  <center>
                    {message}
                    {isSignUp && status === "success" && (
                      <button
                        onClick={switchForm}
                        className="btn-switchForm px-1"
                      >
                        sign in here !
                      </button>
                    )}
                  </center>{" "}
                </Alert>
              )}
              <h3>
                <b>{isSignUp ? "Daftar" : "Login"}</b>
              </h3>
            </Col>
          </Row>
          <Row className="auth-form">
            <Form onSubmit={handleSubmit}>
              {isSignUp ? (
                <>
                  <Row>
                    <Col>
                      <Form.Group className=" mb-3">
                        <Form.Label className="p-0">
                          <h4>Nama Depan</h4>
                        </Form.Label>
                        <Form.Control
                          autoComplete="off"
                          required
                          name="firstname"
                          onChange={handleChange}
                          value={formData.firstname}
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Jhon"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className=" mb-3">
                        <Form.Label className="p-0">
                          <h4>Nama Belakang</h4>
                        </Form.Label>
                        <Form.Control
                          autoComplete="off"
                          required
                          name="lastname"
                          onChange={handleChange}
                          value={formData.lastname}
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Dhoe"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className=" mb-3">
                        <Form.Label className="p-0">
                          <h4>Nomor Ponsel</h4>
                        </Form.Label>
                        <PhoneInput
                          international
                          defaultCountry="ID"
                          value={phone}
                          onChange={setPhone}
                          countryCallingCodeEditable={false}
                          className="form-input-phone"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className=" mb-3">
                        <Form.Label className="p-0">
                          <h4>Jenis Kelamin</h4>
                        </Form.Label>
                        <br />
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="dropdown-toggle"
                        >
                          <option value="Laki-laki">Laki - Laki</option>
                          <option
                            value="Perempuan"
                          >
                            Perempuan
                          </option>
                        </select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className=" mb-3" controlId="formBasicEmail">
                    <Form.Label className="p-0">
                      <h4>Email</h4>
                    </Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Alamat Email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="p-0">
                      <h4>Password</h4>
                    </Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          autoComplete="off"
                          required
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          type={showPassword ? "text" : "password"}
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Masukan Password"
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
                  </Form.Group>
                  <Form.Group
                    className="form mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="p-0">
                      <h4>Konfirmasi Password</h4>
                    </Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          autoComplete="off"
                          required
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          type={showPassword ? "text" : "password"}
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Masukan Password"
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
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-login my-3"
                  >
                    {loading ? (
                      <Spinner animation="border" variant="info" />
                    ) : (
                      "Daftar"
                    )}
                  </Button>
                  <h4
                    className="text-center mx-5"
                    style={{ color: "gray", fontSize: 12 }}
                  >
                    Dengan mengklik tombol "Daftar", Anda telah menyetujui
                    peraturan, larangan dan <b>Syarat & Kondisi</b>
                  </h4>
                </>
              ) : (
                <>
                  <Form.Group className=" mb-3" controlId="formBasicEmail">
                    <Form.Label className="p-0">
                      <h4>Email</h4>
                    </Form.Label>
                    <Form.Control
                      autoComplete="off"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Alamat Email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="p-0">
                      <h4>Password</h4>
                    </Form.Label>
                    <Row>
                      <Col>
                        <Form.Control
                          autoComplete="off"
                          required
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          type={showPassword ? "text" : "password"}
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Masukan Password"
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
                  </Form.Group>
                  <Link to="/reset" className="btn-switchForm ms-1 fw-normal ">
                    <h4 className="text-end mt-4" style={{ color: "#F37C20" }}>
                      Lupa Password?
                    </h4>
                  </Link>

                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-login my-3 d-flex justify-content-center align-items-center"
                  >
                    {loading ? (
                      <Spinner animation="border" variant="info" />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </>
              )}
              <center>
                <h4>
                  {isSignUp
                    ? "Sudah menjadi member Binair?"
                    : "Bukan member Binair?"}

                  <b>
                    <button
                      onClick={switchForm}
                      className="btn-switchForm my-3"
                    >
                      {isSignUp ? "Login" : "Daftar sekarang"}
                    </button>
                  </b>
                </h4>
              </center>
            </Form>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export default Auth;
