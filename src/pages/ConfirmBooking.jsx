import React from "react";
import { Header, Footer } from "../components";
import { Container, Row, Col, Accordion, Button} from "react-bootstrap";
import "../assets/styles/bookingConfirm.css";
import logo from "../assets/images/binair-logo.svg";
import { Link } from "react-router-dom";

const ConfirmBooking = () => {
    return (
        <div>
            <Header />
            <section className="booking-confirm-section">
                <Container>
                    <Row>
                        <Col md={8} className="left-booking-section">
                            {/* start departure section */}
                            <div className="departure-section">
                                {/* start departure header*/}
                               <div className="flight-header">
                                    <Row className="align-items-center">
                                        <Col md={9}>
                                            <p className="flight-title">Penerbangan Keberangkatan</p>
                                            <p className="flight-destination">Jakarta (HLP) <span><i className="ri-arrow-right-line"></i></span> Surabaya (SUB)</p>
                                            <p className="flight-details">1 Traveler <span> | </span> Langsung</p>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/flight/search`}>
                                                <Button className="change-flight-btn d-flex flex-row-reverse">Ubah Penerbangan</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                               </div>
                               {/* end departure header*/}

                               {/* start flight content*/}
                               <div className="flight-content">
                                    <Row>
                                        <Col md={2}>
                                            <img src={logo} alt="logo" className="logo"/>
                                            <h4 className="airline-name">BinAir</h4>
                                            <p>ID7511</p>
                                            <p>Airbus A320</p>
                                        </Col>
                                        <Col md={7}>
                                            <div className="timeline timeline-object-flights not-completes">
                                                <div className="timeline-status-flights"></div>
                                                <Row className="timeline-content-flights">
                                                    <Col md={4} sm={4} xs={4}>
                                                        <h3>22:15</h3>
                                                        <p className="m-0">12 November 2022</p>
                                                    </Col>
                                                    <Col md={8} sm={8} xs={8}>
                                                        <h3>Jakarta (CGK) </h3>
                                                        <p>Bandara Internasional Soekarno Hatta</p>
                                                        <p>Terminal 1A</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="duration-flight">
                                                <p><span><i className="ri-time-line"></i></span> 1h 50m</p>
                                            </div>
                                            <div className="timeline timeline-object-flights completes">
                                                <div className="timeline-status-flights"></div>
                                                <Row className="timeline-content-flights">
                                                    <Col md={4} sm={4} xs={4}>
                                                        <h3>22:15</h3>
                                                        <p className="m-0">12 November 2022</p>
                                                    </Col>
                                                    <Col md={8} sm={8} xs={8}>
                                                        <h3>Jakarta (CGK) </h3>
                                                        <p>Bandara Internasional Soekarno Hatta</p>
                                                        <p>Terminal 1A</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col md={3} className="flight-facility">
                                            <ul>
                                                <li><p className="information"><span><i className="ri-refund-2-line"></i></span> Bisa Refund</p></li>
                                                <li> <p className="information"> <span><i className="ri-calendar-event-line"></i></span> Perubahan Jadwal</p></li>
                                                <li> <p className="information"><i className="ri-checkbox-circle-line"></i> Perkiraan Penerbitan Tiket</p></li>
                                                <li> <p><i className="ri-briefcase-3-line"></i> Bagasi Kabin 7kg</p></li>
                                                <li> <p><i className="ri-suitcase-3-line"></i> Bagasi 20kg</p></li>
                                                <li> <p><i className="ri-gamepad-line"></i> Hiburan</p></li>
                                            </ul>
                                        </Col>
                                    </Row>
                               </div>
                               {/* end flight content*/}
                            </div>
                             {/* end departure section */}

                             {/* start arrival section */}
                            <div className="arrival-section">
                                {/* start arrival header*/}
                               <div className="flight-header">
                                    <Row className="align-items-center">
                                        <Col md={9}>
                                            <p className="flight-title">Penerbangan Pulang</p>
                                            <p className="flight-destination">Surabaya (SUB) <span><i className="ri-arrow-right-line"></i></span> Jakarta (HLP)</p>
                                            <p className="flight-details">1 Traveler <span> | </span> Langsung</p>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/flight/search`}>
                                                <Button className="change-flight-btn d-flex flex-row-reverse">Ubah Penerbangan</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                               </div>
                               {/* end departure header*/}

                               {/* start flight content*/}
                               <div className="flight-content">
                                    <Row>
                                        <Col md={2}>
                                            <img src={logo} alt="logo" className="logo"/>
                                            <h4 className="airline-name">BinAir</h4>
                                            <p>ID7511</p>
                                            <p>Airbus A320</p>
                                        </Col>
                                        <Col md={7}>
                                            <div className="timeline timeline-object-flights not-completes">
                                                <div className="timeline-status-flights"></div>
                                                <Row className="timeline-content-flights">
                                                    <Col md={4} sm={4} xs={4}>
                                                        <h3>22:15</h3>
                                                        <p className="m-0">12 November 2022</p>
                                                    </Col>
                                                    <Col md={8} sm={8} xs={8}>
                                                        <h3>Jakarta (CGK) </h3>
                                                        <p>Bandara Internasional Soekarno Hatta</p>
                                                        <p>Terminal 1A</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="duration-flight">
                                                <p><span><i className="ri-time-line"></i></span> 1h 50m</p>
                                            </div>
                                            <div className="timeline timeline-object-flights completes">
                                                <div className="timeline-status-flights"></div>
                                                <Row className="timeline-content-flights">
                                                    <Col md={4} sm={4} xs={4}>
                                                        <h3>22:15</h3>
                                                        <p className="m-0">12 November 2022</p>
                                                    </Col>
                                                    <Col md={8} sm={8} xs={8}>
                                                        <h3>Jakarta (CGK) </h3>
                                                        <p>Bandara Internasional Soekarno Hatta</p>
                                                        <p>Terminal 1A</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col md={3} className="flight-facility">
                                            <ul>
                                                <li><p className="information"><span><i className="ri-refund-2-line"></i></span> Bisa Refund</p></li>
                                                <li> <p className="information"> <span><i className="ri-calendar-event-line"></i></span> Perubahan Jadwal</p></li>
                                                <li> <p className="information"><i className="ri-checkbox-circle-line"></i> Perkiraan Penerbitan Tiket</p></li>
                                                <li> <p><i className="ri-briefcase-3-line"></i> Bagasi Kabin 7kg</p></li>
                                                <li> <p><i className="ri-suitcase-3-line"></i> Bagasi 20kg</p></li>
                                                <li> <p><i className="ri-gamepad-line"></i> Hiburan</p></li>
                                            </ul>
                                        </Col>
                                    </Row>
                               </div>
                               {/* end flight content*/}
                            </div>
                             {/* end arrival section */}
                        </Col>
                        <Col md={4} className="right-booking-section">
                            <div className="price-section">
                                <div className="price-header">
                                    <h3>Keterangan Harga</h3>
                                </div>
                                <div className="price-content">
                                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <Row>
                                                    <Col md={7} sm={7} xs={7} className="accordion-timeline">
                                                        <h3>Berangkat (CGK <span><i className="ri-arrow-right-line"></i></span> DPS)</h3>
                                                    </Col>
                                                    <Col md={5} sm={5} xs={5} className="accordion-timeline d-flex flex-row-reverse">
                                                        <h3>Rp. 849.000 </h3>
                                                    </Col>
                                                </Row>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Col md={7} sm={7} xs={6} className="accordion-timeline" >
                                                        <p>Dewasa x 1</p>
                                                    </Col>
                                                    <Col md={5} sm={5} xs={6}>
                                                        <p className="d-flex flex-row-reverse">Rp. 849.000</p>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <Row>
                                                    <Col md={7} sm={7} xs={7} className="accordion-timeline">
                                                        <h3>Pulang (CGK <span><i className="ri-arrow-right-line"></i></span> DPS)</h3>
                                                    </Col>
                                                    <Col md={5} sm={5} xs={5} className="accordion-timeline d-flex flex-row-reverse">
                                                        <h3>Rp. 849.000</h3>
                                                    </Col>
                                                </Row>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Col md={7} sm={7} xs={6} className="accordion-timeline">
                                                        <p>Dewasa x 1</p>
                                                    </Col>
                                                    <Col md={5} sm={5} xs={6}>
                                                        <p className="d-flex flex-row-reverse">Rp. 849.000</p>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                </div>
                                <div className="price-total">
                                    <Row>
                                        <Col md={7} sm={7} xs={7}>
                                            <h3>Total Harga</h3>
                                        </Col>
                                        <Col md={5} sm={5} xs={5}>
                                            <h3 className="d-flex flex-row-reverse">Rp 1.686.656</h3>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <Link to={`/flight/booking`}>
                                <Button className="btn-confirm">Lanjutkan Pemesanan</Button>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default ConfirmBooking;