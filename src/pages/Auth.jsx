import React, { useState } from "react";
import "../assets/styles/auth.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import WhiteLogo from "../assets/images/binair-white-logo.svg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const switchForm = (e) => {
    e.preventDefault();
    setIsSignUp((prev) => !prev);
  };

  const [value, setValue] = useState();

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
              <h3>
                <b>{isSignUp ? "Daftar" : "Login"}</b>
              </h3>
            </Col>
          </Row>
          <Row className="auth-form">
            <Form>
              {isSignUp ? (
                <>
                  <Row>
                    <Col>
                      <Form.Group className=" mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          <h4>Nama Depan</h4>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Jhon"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className=" mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          <h4>Nama Belakang</h4>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Dhoe"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className=" mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <h4>Nomor Ponsel</h4>
                    </Form.Label>
                    <PhoneInput
                      international
                      defaultCountry="ID"
                      value={value}
                      onChange={setValue}
                      countryCallingCodeEditable={false}
                      className="form-input-phone"
                    />
                  </Form.Group>

                  <Form.Group className=" mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      <h4>Email</h4>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Alamat Email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>
                      <h4>Password</h4>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Password"
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>
                      <h4>Konfirmasi Password</h4>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Password Konfirmasi "
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-login my-3"
                  >
                    Daftar
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
                    <Form.Label>
                      <h4>Email</h4>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Alamat Email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="form mb-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>
                      <h4>Password</h4>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                      placeholder="Masukan Password"
                    />
                  </Form.Group>
                  <h4 className="text-end mt-4" style={{ color: "#F37C20" }}>
                    Lupa Password?
                  </h4>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn-login my-3"
                  >
                    Login
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
