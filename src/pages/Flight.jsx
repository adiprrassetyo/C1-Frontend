import React, { useState } from "react";
import { Header, Footer } from "../components";
import { Container, Row, Col, Form, Button, OverlayTrigger, Popover } from "react-bootstrap";
import "../assets/styles/flight.css";
import ToIcon from "../assets/images/to-icon.svg";
import CustomerSupportImg from "../assets/images/customerSupport.svg";
import SimplifyBookingImg from "../assets/images/simplifyBooking.svg";
import TravelProduct from "../assets/images/travelProducts.svg";
import MobileImg from "../assets/images/mobile-view.png";
import GooglePlayImg from "../assets/images/google-play.png";
import SwitchCityIcon from "../assets/images/switch-city.svg";

const Flight = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sumAdult, setSumAdult] = useState(1);
  const [sumChild, setSumChild] = useState(0);
  const switchForm = (e) => {
    e.preventDefault();
    setIsRoundTrip((prev) => !prev);
  };
  const switchCity = (e) => {
    e.preventDefault();
    setFrom(to);
    setTo(from);
  };
  const fromOnChange = (e) => {
    setFrom(e.target.value);
  };
  const toOnChange = (e) => {
    setTo(e.target.value);
  };
  const increaseAdult = (e) => {
    e.preventDefault();
    setSumAdult((prev) => prev + 1);
  };
  const decreaseAdult = (e) => {
    e.preventDefault();
    if (sumAdult > 1) {
      setSumAdult((prev) => prev - 1);
    }
  };
  const increaseChild = (e) => {
    e.preventDefault();
    setSumChild((prev) => prev + 1);
  };
  const decreaseChild = (e) => {
    e.preventDefault();
    if (sumChild > 0) {
      setSumChild((prev) => prev - 1);
    }
  };

  return (
      <Container fluid className="flight">
        <Container fluid className="jumbotron d-flex align-items-center">
          <Row className="align-items-center jumbotron-content">
            <Col className="flight-form ">
              {isRoundTrip ? (
                <div className="btn-group switch-form" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
                  <label class="btn btn-switch-form" for="btnradio1" onClick={switchForm}>Sekali Jalan</label>
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked></input>
                  <label class="btn btn-switch-form" for="btnradio2">Pulang Pergi</label>
                </div>
              ) : (
                <div className="btn-group switch-form" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked></input>
                  <label class="btn btn-switch-form" for="btnradio1">Sekali Jalan</label>
                  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                  <label class="btn btn-switch-form" for="btnradio2" onClick={switchForm}>Pulang Pergi</label>
                </div>
              )}              
              <Container className="border rounded p-2">
                <Row>
                  <Col className="col-10">
                  <Form.Group className=" mb-1">
                        <Form.Label>
                          <h4>Dari</h4>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Pilih kota keberangkatan"
                          onChange={fromOnChange}
                          value={from}
                        />
                  </Form.Group>
                  <Form.Group className=" mb-1">
                        <Form.Label>
                          <h4>Ke</h4>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Pilih kota tujuan"
                          onChange={toOnChange}
                          value={to}
                        />
                  </Form.Group>
                  </Col>
                  <Col className="d-flex align-items-center">
                    <button className="btn switch-city-btn" onClick={switchCity}>
                      <img src={SwitchCityIcon} alt="Switch City" />
                    </button>
                  </Col>
                </Row>
                  
              </Container>              
                {isRoundTrip ?(
                  <Row>
                    <Col>
                    <Container className="border rounded p-2">
                      <Form.Group className=" mb-1" controlId="formBasicEmail">
                        <Form.Label>
                          <h4>Tanggal Berangkat</h4>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder=""
                        />
                      </Form.Group>
                    </Container>
                    </Col>   
                    <Col>
                    <Container className="border rounded p-2">
                      <Form.Group className=" mb-1" controlId="formBasicEmail">
                        <Form.Label>
                          <h4>Tanggal Pulang</h4>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder=""
                        />
                      </Form.Group>
                      </Container>
                    </Col>                   
                  </Row>               
                  ) : (
                    <Container className="border rounded p-2">
                    <Form.Group className=" mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <h4>Tanggal Berangkat</h4>
                      </Form.Label>
                      <Form.Control
                        type="date"
                        className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                        placeholder="pilih tanggal keberangkatan"
                      />
                    </Form.Group>
                    </Container>
                  ) }
              <Container className="popover-container border rounded">
                  <OverlayTrigger
                    trigger="click"
                    key= "top"
                    placement="top"
                    overlay={
                      <Popover id={`popover-positioned-top`}>
                        <Popover.Header as="h3">{`Traveler`}</Popover.Header>
                        <Popover.Body>
                          <Row className="mb-2">
                            <Col>
                              <h4> <strong>Dewasa</strong></h4>
                              <h4>Umur 12+</h4>
                            </Col>
                            <Col>
                              <div className="set-traveler">
                                <Button className={
                                  sumAdult > 1 ? "btn-active" : "btn-inactive"
                                }
                                onClick={
                                  sumAdult > 1 ? decreaseAdult : null
                                }>-</Button>
                                {sumAdult}
                                <Button onClick={increaseAdult} className="btn-active">+</Button>
                              </div>
                            </Col>                            
                          </Row>
                          <Row>
                            <Col>
                              <h4> <strong>Anak-anak</strong></h4>
                              <h4>Umur &lt; 12</h4>
                            </Col>
                            <Col>
                              <div className="set-traveler">
                                <Button className={
                                  sumChild > 0 ? "btn-active" : "btn-inactive"
                                }
                                onClick={
                                  sumChild > 0 ? decreaseChild : null
                                }>-</Button>
                                {sumChild}
                                <Button onClick={increaseChild} className="btn-active">+</Button>
                              </div>
                            </Col>                            
                          </Row>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button className="popover-trigger">
                      <h4>Traveler</h4>
                      {sumChild < 1 ? (
                        <>{sumAdult} Dewasa</>
                      ) : (
                        <>{sumAdult} Dewasa, {sumChild} Anak-anak</>
                      )}
                    </Button>
                  </OverlayTrigger>
              </Container>
              <Button
                    variant="primary"
                    type="submit"
                    className="btn-login my-3"
                  >
                    Cari
                  </Button>
            </Col>
            <Col>
              <h2>Temukan, Bandingkan, dan Pesan Penerbanganmu dengan mudah</h2>
            </Col>
          </Row>
        </Container>
        <Container fluid className="recomendation">
          <h3>Direkomendasikan untuk anda</h3>
          <Col>
            <Row>
              <div className="recomendation-card rc-1 col-sm-5 d-flex flex-column justify-content-between">
                  <div>
                    <h4>Dari <span>Tokyo</span></h4>
                    <div className="d-flex">
                      <img src={ToIcon} alt="to-icon" className="rec-icon me-2"/>
                      <h3><span>Manila</span></h3>
                    </div>
                  </div>
                  <div>
                    <h4>Mulai dari</h4>
                    <p><span>Rp 1.500.000</span></p>
                  </div>
              </div>
              <div className="recomendation-card rc-2 col-sm-3 d-flex flex-column justify-content-between">
                  <div>
                    <h4>Dari <span>Manila</span></h4>
                    <div className="d-flex">
                      <img src={ToIcon} alt="to-icon" className="rec-icon me-2"/>
                      <h3><span>Tanjung Pura</span></h3>
                    </div>
                  </div>
                  <div>
                    <h4>Mulai dari</h4>
                    <p><span>Rp 1.500.000</span></p>
                  </div>
                </div>
              <div className="recomendation-card rc-3 col-sm-3 d-flex flex-column justify-content-between">
                  <div>
                    <h4>Dari <span>Manila</span></h4>
                    <div className="d-flex">
                      <img src={ToIcon} alt="to-icon" className="rec-icon me-2"/>
                      <h3><span>Jakarta</span></h3>
                    </div>
                  </div>
                  <div>
                    <h4>Mulai dari</h4>
                    <p><span>Rp 1.500.000</span></p>
                  </div>
              </div>
            </Row>
            <Row>
              <div className="recomendation-card rc-4 col-sm-3 d-flex flex-column justify-content-between">
                  <div>
                    <h4>Dari <span>Jakarta</span></h4>
                    <div className="d-flex">
                      <img src={ToIcon} alt="to-icon" className="rec-icon me-2"/>
                      <h3><span>Manila</span></h3>
                    </div>
                  </div>
                  <div>
                    <h4>Mulai dari</h4>
                    <p><span>Rp 1.500.000</span></p>
                  </div>
              </div>
              <div className="recomendation-card rc-5 col-sm-3 d-flex flex-column justify-content-between">
                  <div>
                    <h4>Dari <span>Kuala Lumpur</span></h4>
                    <div className="d-flex">
                      <img src={ToIcon} alt="to-icon" className="rec-icon me-2"/>
                      <h3><span>Manila</span></h3>
                    </div>
                  </div>
                  <div>
                    <h4>Mulai dari</h4>
                    <p><span>Rp 1.500.000</span></p>
                  </div>
              </div>
              <div className="recomendation-card rc-6 col-sm-5 d-flex flex-column justify-content-between">
                <div>
                    <h4>Dari <span>Bangkok</span></h4>
                    <div className="d-flex">
                      <img src={ToIcon} alt="to-icon" className="rec-icon me-2"/>
                      <h3><span>Manila</span></h3>
                    </div>
                  </div>
                  <div>
                    <h4>Mulai dari</h4>
                    <p><span>Rp 1.500.000</span></p>
                  </div>
              </div>
            </Row>
          </Col>
        </Container>
        <Container fluid className="service">
          <h1>Kenapa BinAir?</h1>
          <div className="card-group">
            <div className="card">
              <img src={CustomerSupportImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Layanan Pelanggan Ramah</h3>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Layanan pelanggan kami tersedia 24/7 memberikan bantuan terbaik dalam bahasa lokal Anda</h4>
              </div>
            </div>
            <div className="card">
              <img src={SimplifyBookingImg} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Mempermudah Pengalaman Booking Anda</h3>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Rasakan fleksibilitas dan kemudahan selama proses pemesanan</h4>
              </div>
            </div>
            <div className="card">
              <img src={TravelProduct} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3>Banyak Pilihan Produk Travel</h3>
              </div>
              <div className="card-footer">
                <h4 className="text-muted">Nikmati momen yang mengesankan dengan jutaan penerbangan dan akomodasi yang menguntungkan</h4>
              </div>
            </div>
          </div>
        </Container>
        <Container fluid className="mobile">
          <Container fluid className="mobile-content">
            <img src={MobileImg} alt="" className="mobile-img"/>
            <Col>
              <h3>Unduh aplikasi BinAir sekarang, pesan tiket pesawat dengan lebih mudah!</h3>
              <img src={GooglePlayImg} alt="" className="google-play-img"/>
            </Col>
          </Container>
        </Container>
      </Container>
  );
};

export default Flight;
