import React, { useState } from "react";
import { Container, Row, Col, Button, Dropdown, DropdownButton, Card } from "react-bootstrap";
import Plane from "../assets/images/plane.svg";
import "../assets/styles/search-flight.css";
import Lion from "../assets/images/lion-air.svg";
import Arrow from "../assets/images/Vector.svg";
import Baggage from "../assets/images/baggage.svg";
import AirAsia from "../assets/images/airasia.svg";
import Payment from "../assets/images/payment-logo.svg";

import { Header, Footer } from "../components";

const SearchFlight = () => {
    return (
        <div>
            <Header />
            
            <Container className="search-header">
                <Row>
                    <Col className="mt-3 ms-5" sm="auto">
                        <img
                        src={Plane}
                    />
                    </Col>
                    <Col>
                        <h3><strong>Pilih Penerbangan Keberangkatan</strong></h3>
                        <p>JKTA - DPS <span>|</span> RAB, 23 NOV</p>
                    </Col>
                    <Col xs={2}>
                        <Button variant="outline-info">Ubah Pencarian</Button>{' '}
                    </Col>
                </Row>


            </Container>
            <Container fluid className="search">
                <Card className="search-content m-3">
                    <Card.Header className="search-header ps-4 pt-3">
                        <Row>
                            <Col xs={9}>
                                <h2><strong>Penerbangan keberangkatan ke Bali Denpasar</strong></h2>
                                <p>Rab, 23 Nov 2022 <span>|</span> 1 Traveler</p>
                            </Col>
                            <Col xs={3}>
                                <Button
                                    variant="light"
                                    type="submit"
                                    className="btn-tanggal my-3 p-3"
                                >
                                    Ubah tanggal
                                </Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body className="search-body">
                        <Row className="filter flex-filter">
                            <Col className="ms-1 p-3" md={1}>
                                <h3>Filter :</h3>
                            </Col>
                            <Col className="m-1" md={1}>
                                <DropdownButton id="dropdown-basic-button" title="Harga">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col className="m-1 me-4" md={1}>
                                <DropdownButton id="dropdown-basic-button" title="Pemberhentian">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col className="m-1 ms-2" md={1}>
                                <DropdownButton id="dropdown-basic-button" title="Maskapai">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col className="m-1 ms-2" md={1}>
                                <DropdownButton id="dropdown-basic-button" title="Keberangkatan">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                            <Col className="m-1 flex" md={5}>
                                <p>Urutkan Hasil :</p> 
                                <DropdownButton className="ms-5" id="dropdown-basic-button" title="Harga Terendah">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card body className="flight-content m-3">
                    <Row>
                        <Col className="mt-3 mb-3 ms-3">
                        <img 
                            className="airline-logo"
                            src={Lion}
                            alt="Lion Air"
                        />
                        <h3>Lion Air</h3>
                        </Col>
                        <Col className="mt-4 mb-3">
                            <h3><strong>06:00</strong></h3>
                            <p>CGK</p>
                        </Col>
                        <Col className="mt-4 mb-3">
                            <img className="arrow" src={Arrow} alt="destination" />
                        </Col>
                        <Col className="mt-4 mb-3">
                            <h3><strong>08:50</strong></h3>
                            <p>DPS</p>
                        </Col>
                        <Col className="txtLangsung mt-4 mb-3">
                            <h3><strong>2h 50m</strong></h3>
                            <p>Langsung</p>
                        </Col>
                        <Col className="baggage mt-4 mb-3">
                            <img src={Baggage} alt="baggage" />
                            <h4>20kg</h4>
                        </Col>
                        <Col className="mt-4 mb-3 me-3">
                            <h3><strong>US$47.49</strong>/Org</h3>
                        </Col>
                        <Col className="mt-4 mb-3 me-5">
                            <Button
                                variant="light"
                                type="submit"
                                className="btn-flight my-2"
                            >
                                Pilih Penerbangan
                            </Button>
                        </Col>
                       
                    </Row>
                </Card>
                <Card body className="flight-content m-3">
                    <Row>
                        <Col className="mt-3 mb-3 ms-3">
                        <img
                            className="airline-logo" 
                            src={Lion}
                            alt="Lion Air"
                        />
                        <h3>Lion Air</h3>
                        </Col>
                        <Col className="mt-4 mb-3">
                            <h3><strong>16:00</strong></h3>
                            <p>CGK</p>
                        </Col>
                        <Col className="mt-4 mb-3">
                            <img src={Arrow} alt="destination" />
                        </Col>
                        <Col className="mt-4 mb-3">
                            <h3><strong>18:50</strong></h3>
                            <p>DPS</p>
                        </Col>
                        <Col className="txtLangsung mt-4 mb-3">
                            <h3><strong>2h 50m</strong></h3>
                            <p>Langsung</p>
                        </Col>
                        <Col className="baggage mt-4 mb-3">
                            <img src={Baggage} alt="baggage" />
                            <h4>20kg</h4>
                        </Col>
                        <Col className="mt-4 mb-3 me-3">
                            <h3><strong>US$47.49</strong>/Org</h3>
                        </Col>
                        <Col className="mt-4 mb-3 me-5">
                            <Button
                                variant="light"
                                type="submit"
                                className="btn-flight my-2"
                            >
                                Pilih Penerbangan
                            </Button>
                        </Col>
                       
                    </Row>
                </Card>
                <Container>
                    <br />
                    <br />
                </Container>
                <Card body className="flight-content m-3">
                    <Row>
                        <Col className="mt-3 mb-3 ms-3">
                        <img 
                            className="airline-logo"
                            src={Lion}
                            alt="Lion Air"
                        />
                        <h3>Lion Air</h3>
                        </Col>
                        <Col className="mt-4 mb-3">
                            <h3><strong>05:00</strong></h3>
                            <p>CGK</p>
                        </Col>
                        <Col className="mt-4 mb-3">
                            <img src={Arrow} alt="destination" />
                        </Col>
                        <Col className="mt-4 mb-3">
                            <h3><strong>07:50</strong></h3>
                            <p>DPS</p>
                        </Col>
                        <Col className="txtLangsung mt-4 mb-3">
                            <h3><strong>2h 50m</strong></h3>
                            <p>Langsung</p>
                        </Col>
                        <Col className="baggage mt-4 mb-3">
                            <img src={Baggage} alt="baggage" />
                            <h4>20kg</h4>
                        </Col>
                        <Col className="mt-4 mb-3 me-3">
                            <h3><strong>US$52.37</strong>/Org</h3>
                        </Col>
                        <Col className="mt-4 mb-3 me-5">
                            <Button
                                variant="light"
                                type="submit"
                                className="btn-flight my-2"
                            >
                                Pilih Penerbangan
                            </Button>
                        </Col>
                       
                    </Row>
                </Card>
                <Card body className="flight-content m-3">
                    <Row>
                        <Col className="mt-3 mb-3 ms-3">
                        <img
                            className="airline-logo" 
                            src={Lion}
                            alt="Lion Air"
                        />
                        <h3>Lion Air</h3>
                        </Col>
                        <Col className="mt-3 mb-3">
                            <h3><strong>13:00</strong></h3>
                            <p>CGK</p>
                        </Col>
                        <Col className="mt-3 mb-3">
                            <img src={Arrow} alt="destination" />
                        </Col>
                        <Col className="mt-3 mb-3">
                            <h3><strong>15:50</strong></h3>
                            <p>DPS</p>
                        </Col>
                        <Col className="txtLangsung mt-3 mb-3">
                            <h3><strong>2h 50m</strong></h3>
                            <p>Langsung</p>
                        </Col>
                        <Col className="baggage mt-3 mb-3">
                            <img src={Baggage} alt="baggage" />
                            <h4>20kg</h4>
                        </Col>
                        <Col className="mt-3 mb-3 me-3">
                            <h3><strong>US$52.37</strong>/Org</h3>
                        </Col>
                        <Col className="mt-3 mb-3 me-5">
                            <Button
                                variant="light"
                                type="submit"
                                className="btn-flight my-2"
                            >
                                Pilih Penerbangan
                            </Button>
                        </Col>
                       
                    </Row>
                </Card>
                <Card className="flight-content m-3">
                    <Card.Header className="flight-header" as="h5" style={{ width: '18rem' }}>
                        <li>Gratis 20 Kg Bagasi</li>
                    </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col className="mt-3 mb-3 ms-3">
                                <img
                                    className="airline-logo" 
                                    src={AirAsia}
                                    alt="Air Asia"
                                />
                                <h3>Indonesia Air Asia</h3>
                                </Col>
                                <Col className="mt-3 mb-3">
                                    <h3><strong>22:15</strong></h3>
                                    <p>CGK</p>
                                </Col>
                                <Col className="mt-3 mb-3">
                                    <img src={Arrow} alt="destination" />
                                </Col>
                                <Col className="mt-3 mb-3">
                                    <h3><strong>01:05</strong></h3>
                                    <p>DPS</p>
                                </Col>
                                <Col className="txt-langsung gratis-bagasi mt-3 mb-3">
                                    <h3><strong>3h 50m<span>+1d</span></strong></h3>
                                    <p>Langsung</p>
                                </Col>
                                <Col className="baggage mt-3 mb-3">
                                    
                                </Col>
                                <Col className="mt-3 mb-3 me-3">
                                    <h3><strong>US$53.58</strong>/Org</h3>
                                </Col>
                                <Col className="mt-3 mb-3 me-5">
                                    <Button
                                        variant="light"
                                        type="submit"
                                        className="btn-flight my-2"
                                    >
                                        Pilih Penerbangan
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                </Card>
                <Card body className="flight-content m-3">
                    <Row>
                        <Col className="mt-3 mb-3 ms-3">
                        <img
                            className="airline-logo" 
                            src={Lion}
                            alt="Lion Air"
                        />
                        <h3>Lion Air</h3>
                        </Col>
                        <Col className="mt-3 mb-3">
                            <h3><strong>11:00</strong></h3>
                            <p>CGK</p>
                        </Col>
                        <Col className="mt-3 mb-3">
                            <img src={Arrow} alt="destination" />
                        </Col>
                        <Col className="mt-3 mb-3">
                            <h3><strong>13:50</strong></h3>
                            <p>DPS</p>
                        </Col>
                        <Col className="txtLangsung mt-3 mb-3">
                            <h3><strong>2h 50m</strong></h3>
                            <p>Langsung</p>
                        </Col>
                        <Col className="baggage mt-3 mb-3">
                            <img src={Baggage} alt="baggage" />
                            <h4>20kg</h4>
                        </Col>
                        <Col className="mt-3 mb-3 me-3">
                            <h3><strong>US$55.93</strong>/Org</h3>
                        </Col>
                        <Col className="mt-3 mb-3 me-5">
                            <Button
                                variant="light"
                                type="submit"
                                className="btn-flight my-2"
                            >
                                Pilih Penerbangan
                            </Button>
                        </Col>
                       
                    </Row>
                </Card>

                <Card className="payment-content m-4 mt-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title><strong>Jenis Pembayaran:</strong></Card.Title>
                        <Card.Text>
                            <img src={Payment} alt="
                            payment" />
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Container>

            <Footer />
        </div>
    );
};

export default SearchFlight;