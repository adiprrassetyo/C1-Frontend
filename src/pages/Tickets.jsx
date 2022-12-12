import React, { useState } from "react";
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
import Plane from "../assets/images/plane.svg";
import "../assets/styles/tickets.css";
import Lion from "../assets/images/lion-air.svg";
import Arrow from "../assets/images/Vector.svg";
import Baggage from "../assets/images/baggage.svg";
import AirAsia from "../assets/images/airasia.svg";
import Payment from "../assets/images/payment-logo.svg";
import Clock from "../assets/images/timeflight.svg";
import Refund from "../assets/images/Refund.svg";
import Reschedule from "../assets/images/reschedule.svg";
import Cabin from "../assets/images/cabin.svg";
import Entertainment from "../assets/images/entertainment.svg";
import Slider from "../assets/images/slider.svg";

import { Header, Footer } from "../components";

const Tickets = () => {
  return (
    <div className="search-main">
      <Header />
      <Container className="search-header">
        <Row>
          <Col className="mt-3 ms-5" sm="auto">
            <img src={Plane} />
          </Col>
          <Col>
            <h3>
              <strong>Pilih Penerbangan Keberangkatan</strong>
            </h3>
            <p>
              JKTA - DPS <span>|</span> RAB, 23 NOV
            </p>
          </Col>
          <Col xs={2}>
            <Button variant="outline-info">Ubah Pencarian</Button>{" "}
          </Col>
        </Row>
      </Container>
      <Container fluid className="search-box pt-3">
        <Container fluid="xl" className="search">
          <Card className="search-content my-5">
            <Card.Header className="search-header ps-4 pt-3">
              <Row>
                <Col xs={9}>
                  <h2>
                    <strong>Penerbangan keberangkatan ke Bali Denpasar</strong>
                  </h2>
                  <p>
                    Rab, 23 Nov 2022 <span>|</span> 1 Traveler
                  </p>
                </Col>
                {/* <Col xs={3} className="btn-flex">
                  <Button
                    variant="light"
                    type="submit"
                    className="btn-tanggal my-3 p-3"
                  >
                    Ubah tanggal
                  </Button>
                </Col> */}
              </Row>
            </Card.Header>
            <Card.Body className="search-body">
              {/* <Row className="filter flex-filter">
                <Col className="ms-1 p-3" md={1}>
                  <h3>Filter :</h3>
                </Col>
                <Col className="m-1" md={1}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Harga"
                    autoClose="outside"
                  >
                    <Dropdown.ItemText>
                      <h3>Harga</h3>
                    </Dropdown.ItemText>
                    <Dropdown.ItemText>
                      <Form.Range />
                    </Dropdown.ItemText>
                  </DropdownButton>
                </Col>
                <Col className="m-1 me-4" md={1}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Pemberhentian"
                    autoClose="outside"
                  >
                    <Dropdown.ItemText>
                      <h3>Pemberhentian</h3>
                    </Dropdown.ItemText>
                    <Dropdown.ItemText>
                      <Form.Check aria-label="option 1" label="Langsung" />
                      <Form.Check aria-label="option 2" label="Transit" />
                    </Dropdown.ItemText>
                  </DropdownButton>
                </Col>
                <Col className="m-1 ms-2" md={1}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Maskapai"
                    autoClose="outside"
                  >
                    <Dropdown.ItemText>
                      <h3>Maskapai</h3>
                    </Dropdown.ItemText>
                    <Dropdown.ItemText>
                      <Form.Check aria-label="option 1" label="Lion Air" />
                      <Form.Check aria-label="option 2" label="Air Asia" />
                    </Dropdown.ItemText>
                  </DropdownButton>
                </Col>
                <Col className="m-1 ms-2" md={1}>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Keberangkatan"
                    autoClose="outside"
                  >
                    <Dropdown.ItemText>
                      <h3>Keberangkatan</h3>
                    </Dropdown.ItemText>
                    <Dropdown.ItemText>
                      <Form.Check
                        aria-label="option 1"
                        label="Penerbangan Pagi"
                      />
                      <Form.Check
                        aria-label="option 2"
                        label="Penerbangan Siang"
                      />
                      <Form.Check
                        aria-label="option 3"
                        label="Penerbangan Malam"
                      />
                    </Dropdown.ItemText>
                  </DropdownButton>
                </Col>
                <Col className="m-1 flex" md={5}>
                  <p className="me-2">Urutkan Hasil :</p>
                  <Form.Select aria-label="Default select example">
                    <option>Harga Terendah</option>
                    <option value="1">Harga Tertinggi</option>
                    <option value="2">Waktu Keberangkatan</option>
                    <option value="3">Waktu Kedatangan</option>
                  </Form.Select>
                </Col>
              </Row> */}
            </Card.Body>
          </Card>

          {/* 1 */}
          <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={Lion} />
                      <p className="mt-2">Lion Air</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>06:00</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>07:50</strong>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$47.49</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={Lion} />
                      <h4 className="mt-4">Lion Air</h4>
                      <h4>
                        <span>QG666</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>06:00</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              11 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK)
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>07:50</strong>
                            </h2>
                            <p className="timeline-arrival-date">11 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* 2 */}
          <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={Lion} />
                      <p className="mt-2">Lion Air</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>17:00</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>18:50</strong>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$47.49</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={Lion} />
                      <h4 className="mt-4">Lion Air</h4>
                      <h4>
                        <span>QG675</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>17:00</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              12 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK)
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>18:50</strong>
                            </h2>
                            <p className="timeline-arrival-date">12 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* 3 */}
          <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={Lion} />
                      <p className="mt-2">Lion Air</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>06:00</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>07:50</strong>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$47.49</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={Lion} />
                      <h4 className="mt-4">Lion Air</h4>
                      <h4>
                        <span>QG670</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>06:00</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              10 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK)
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>07:50</strong>
                            </h2>
                            <p className="timeline-arrival-date">10 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* 4 */}
          <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={Lion} />
                      <p className="mt-2">Lion Air</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>14:00</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>15:50</strong>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$52.37</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={Lion} />
                      <h4 className="mt-4">Lion Air</h4>
                      <h4>
                        <span>QG689</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>14:00</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              10 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK)
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>15:50</strong>
                            </h2>
                            <p className="timeline-arrival-date">10 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* 5 */}
          <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="4">
              <div className="free-baggage" as="h5" style={{ width: "13rem" }}>
                <li className="p-1">Gratis 20 Kg Bagasi</li>
              </div>
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={AirAsia} />
                      <p className="mt-2">Indonesia AirAsia</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>22:15</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>00:05</strong>
                          <span className="plus-one-day p-1">+1d</span>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$47.49</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={AirAsia} />
                      <h4 className="mt-4">Indonesia AirAsia</h4>
                      <h4>
                        <span>GK566</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>22:15</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              11 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK)
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>00:05</strong>
                              <span className="plus-one-day-detail p-1">
                                +1d
                              </span>
                            </h2>
                            <p className="timeline-arrival-date">12 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          {/* 6  */}
          <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={Lion} />
                      <p className="mt-2">Lion Air</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>11:00</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>13:50</strong>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$55.93</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={Lion} />
                      <h4 className="mt-4">Lion Air</h4>
                      <h4>
                        <span>QG766</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>11:00</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              11 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK){" "}
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>13:50</strong>
                            </h2>
                            <p className="timeline-arrival-date">11 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Card className="payment-content m-4 mt-5" style={{ width: "18rem" }}>
            {/* <Card.Body>
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
            </Card.Body> */}
          </Card>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};

export default Tickets;
