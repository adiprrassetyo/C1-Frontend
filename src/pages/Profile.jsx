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
import "../assets/styles/profile.css";
import Payment from "../assets/images/payment-logo.svg";

const Profile = () => {
  return (
    <div>
        <Header />

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
                        <Button href="password" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-key-2-line"></i>
                            <span>Ubah Password</span>
                        </Button>
                        <Button href="contact" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-contacts-book-line"></i>
                            <span>Daftar Kontak</span>
                        </Button>
                        <Button href="passenger" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-list-check"></i>
                            <span>Daftar Traveler</span>
                        </Button>
                        <Button href="order" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-calendar-check-line"></i>
                            <span>Daftar Pesanan</span>
                        </Button>
                        <Button href="bind" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-link"></i>
                            <span>Akun Terhubung</span>
                        </Button>
                        <Button className="mb-3" variant="light" size="lg">
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
                                    <i class="remix-icon ri-user-3-line"></i>
                                    <span>Profil</span>
                                </div>
                                <a className="has-text-warning p-3">Sunting</a>
                            </Card.Header>
                            <Card.Body>
                                <div className="content-flex">
                                    <div className="profile-item is-full p-2">
                                        <p className="mb-0 has-text-grey">Nama</p>
                                        <p className="mb-0 mt-1 normal">Mr Damas, Muhammad</p>
                                    </div>
                                    <div className="profile-item is-half p-2">
                                        <p className="mb-0 has-text-grey">No Telepon</p>
                                        <p className="mb-0 mt-1 normal">0</p>
                                    </div>
                                    <div className="profile-item is-half p-2">
                                        <p className="mb-0 has-text-grey">Email</p>
                                        <p className="mb-0 mt-1 normal">-</p>
                                    </div>
                                    <div className="profile-item is-half p-2">
                                        <p className="mb-0 has-text-grey">Kota</p>
                                        <p className="mb-0 mt-1 normal">-</p>
                                    </div>
                                    <div className="profile-item is-half p-2">
                                        <p className="mb-0 has-text-grey">Bahasa</p>
                                        <p className="mb-0 mt-1 normal">Indonesia</p>
                                    </div>
                                    <div className="profile-item is-full p-2">
                                        <p className="mb-0 has-text-grey">Kewarganegaraan</p>
                                        <p className="mb-0 mt-1 normal">-</p>
                                    </div>
                                    <div className="profile-item is-full p-2">
                                        <p className="mb-0 has-text-grey">Zona Waktu</p>
                                        <p className="mb-0 mt-1 normal">-</p>
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
  );
}

export default Profile;