import React from "react";
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
  } from "react-bootstrap";
import "../assets/styles/password.css";
import Payment from "../assets/images/payment-logo.svg";
import PasswordStrengthBar from 'react-password-strength-bar';

  const Password = () => {
    return (
        <div>
            <Header />
                <Container fluid className="account-box p-5">
                    <Container fluid="xl" className="account-main p-3">
                        <Row>
                            <Col xs={3} className="left-panel left-flex">
                                <Button href="/#/account/profile"className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-user-3-line"></i>
                                    <span>Profil</span>
                                </Button>
                                <Button className="mb-3" variant="info" size="lg">
                                    <div className="selected">
                                        <i class="remix-icon ri-key-2-line"></i>
                                        <span>Ubah Password</span>
                                    </div>
                                </Button>
                                <Button href="/#/account/passenger" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-list-check"></i>
                                    <span>Daftar Traveler</span>
                                </Button>
                                <Button href="/#/account/order" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-calendar-check-line"></i>
                                    <span>Daftar Pesanan</span>
                                </Button>
                                <Button href="/#/account/whislist" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-shopping-basket-2-line"></i>
                                    <span>Wishlist</span>
                                </Button>
                                <Button className="mb-3" variant="light" size="lg"
                                    onClick={() => {
                                        // setDataUser({});
                                        dispatch(logout());
                                    }}
                                >
                                    <i class="remix-icon ri-logout-box-r-line"></i>
                                    <span>Keluar</span>
                                </Button>
                            </Col>
                            <Col xs={9} className="content-panel ps-5">
                                <Card
                                    bg="light"
                                    key="Light"
                                    text="dark"
                                    className="mb-2"
                                    >
                                    <Card.Header className="header-flex">
                                        <div className="p-2 profile-header">
                                            <i class="remix-icon ri-key-2-line"></i>
                                            <span>Ganti Password</span>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="content">
                                            <div className="p-3">
                                                <Form.Label htmlFor="inputPassword5">Password Lama <span className="has-text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    id="inputPassword5"
                                                    aria-describedby="passwordHelpBlock"
                                                />
                                            </div>

                                            <div className="p-3">
                                                <Form.Label htmlFor="inputPassword5">Password Baru <span className="has-text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    id="inputPassword5"
                                                    aria-describedby="passwordHelpBlock"
                                                />
                                            </div>

                                            <div className="p-3">
                                                <Form.Label htmlFor="inputPassword5">Konfirmasi Password <span className="has-text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    id="inputPassword5"
                                                    aria-describedby="passwordHelpBlock"
                                                />
                                            </div>
                                            <div className="is-flex">
                                                <PasswordStrengthBar />
                                                <span className="has-text-grey">Password harus memiliki setidaknya 6 karakter dan mengandung setidaknya 1 simbol atau angka</span>
                                            </div>
                                            <div className="btn-simpan mt-5" >
                                                <Button variant="info">
                                                    Simpan
                                                </Button>{' '}
                                            </div>
                                        </div>
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
    )
  
}
export default Password;