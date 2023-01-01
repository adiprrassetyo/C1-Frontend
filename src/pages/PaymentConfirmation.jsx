import React, { useState } from "react";
import { Footer, HeaderBooking } from "../components";
import "../assets/styles/paymentConfirmation.css";
import {
  Container,
  Row,
  Col,
  Badge,
  Accordion,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTrans } from "../redux/slices/transactionSlice";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/binair-logo.svg";
import Countdown from "react-countdown";

const PaymentConfirmation = () => {
  const { loading, status, message, transactionById } = useSelector(
    (state) => state.transaction
  );
  const { search, ticketById } = useSelector((state) => state.ticket);
  const { user } = useSelector((state) => state.auth);

  const [visible, setVisible] = useState("banktransfer");
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const [bukti_bayar, setBukti_Bayar] = useState();

  const handleChange = (event) => {
    const getDocument = event.target.value;
    setVisible(getDocument);
  };

  const handleImage = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
    }
    setBukti_Bayar(e.target.files[0]);
  };

  const handleform = (e) => {
    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      setIsSuccess(false);
    }

    setErrorMsg("");
    setIsSuccess(true);
  };

  const dispatch = useDispatch();
  const redirect = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = transactionById[0].id;
    const data = {
      payment_method: visible,
      bukti_bayar,
    };
    dispatch(updateTrans({ id, data, redirect }));
  };

  const getTotalAmount = () => {
    let total = 0;
    total =
      total +
      ticketById.adult_price * search.countDewasa +
      ticketById.child_price * search.countAnak;
    return total;
  };
  const getTax = () => {
    return getTotalAmount() * 0.1;
  };
  const getTotalAmountWithTax = () => {
    return getTotalAmount() + getTax();
  };
  const getAdultPrice = () => {
    let total = 0;
    total = total + ticketById.adult_price * search.countDewasa;
    return total;
  };
  const getChildPrice = () => {
    let total = 0;
    total = total + ticketById.child_price * search.countAnak;
    return total;
  };
  const getTitle = (gelar) => {
    if (gelar === "tuan") {
      return "Tn.";
    } else if (gelar === "nyonya") {
      return "Mrs.";
    } else if (gelar === "Nona") {
      return "Ms.";
    }
  };

  return (
    <div>
      <HeaderBooking />
      <section className="payment-section">
        <div className="booking-countdown text-center">
          <p>
            Konfirmasi pembayaran anda dalam{" "}
            <Countdown
              className="countdown"
              daysInHours="true"
              date={Date.now() + 5400000}
            />
          </p>
        </div>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={8} className="left-payment-section">
                <div className="payment-confirmation">
                  <div className="payment-method-header">
                    <h3>Konfirmasi Pembayaran</h3>
                  </div>
                  <div className="payment-method-body">
                    <Row className="input-payment-section">
                      <Col md={8}>
                        <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                          <Form.Label>
                            <h4>
                              Pilih Metode Pembayaran{" "}
                              <span className="required"> *</span>
                            </h4>
                          </Form.Label>
                          <br />
                          <select
                            name="payment-method"
                            className="dropdown-toggle"
                            onChange={(e) => handleChange(e)}
                            required
                          >
                            <option value="banktransfer">Bank Transfer</option>
                            <option value="e-wallet">E-Wallet</option>
                          </select>
                        </Form.Group>
                      </Col>
                      {visible === "banktransfer" && (
                        <Col md={8}>
                          <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                            <Form.Label>
                              <h4>
                                Pilih Bank <span className="required"> *</span>
                              </h4>
                            </Form.Label>
                            <br />
                            <select
                              name="bank"
                              className="dropdown-toggle"
                              required
                            >
                              <option value="BCA">BCA</option>
                              <option value="Mandiri">Mandiri</option>
                              <option value="BNI">BNI</option>
                              <option value="CIMB">CIMB Niaga</option>
                              <option value="Permata">Permata Bank</option>
                            </select>
                          </Form.Group>
                        </Col>
                      )}

                      {visible === "e-wallet" && (
                        <Col md={8}>
                          <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                            <Form.Label>
                              <h4>
                                Pilih E-Wallet{" "}
                                <span className="required"> *</span>
                              </h4>
                            </Form.Label>
                            <br />
                            <select
                              name="e-wallet"
                              className="dropdown-toggle"
                              required
                            >
                              <option value="Gopay">Gopay</option>
                              <option value="Ovo">Ovo</option>
                              <option value="Dana">Dana</option>
                              <option value="LinkAja">Link Aja</option>
                              <option value="ShopeePay">Shopee Pay</option>
                            </select>
                          </Form.Group>
                        </Col>
                      )}
                    </Row>
                    <Row className="payment-upload-section">
                      <Col md={8}>
                        <h3>
                          Upload bukti pembayaran{" "}
                          <span className="required"> *</span>
                        </h3>
                        <input
                          type="file"
                          name="file"
                          onChange={handleImage}
                          onClick={handleform}
                          className="file-upload"
                          accept="image/png, image/gif, image/jpeg"
                          required
                        />
                        <img src={selectedFile} className="confirm-image" />
                      </Col>
                      <p className="error-message">{errorMsg}</p>
                    </Row>
                  </div>
                </div>
                <p className="note-payment">
                  Setelah selesai mengupload bukti bayar, silakan klik tombol di
                  bawah untuk konfirmasi pembayaran.
                </p>
                <div className="button-payment-section">
                  <Row className="align-items-center">
                    <Col md={7} sm={8} xs={12}>
                      <Link to={`/payment`}>
                        <Button
                          value="paymentMethod"
                          className="payment-method-btn"
                          variant="link"
                        >
                          <p>
                            <i className="ri-arrow-left-s-line ri-xl"></i>
                            <span>Pilih Metode Lain</span>
                          </p>
                        </Button>
                      </Link>
                    </Col>
                    <Col md={7} sm={8} xs={12}>
                      <Button
                        className="payment-btn"
                        onClick={() => {}}
                      >
                        Cek Status Pembayaran
                      </Button>
                    </Col>
                    <Col
                      md={5}
                      sm={4}
                      xs={12}
                      className="d-flex flex-row-reverse"
                    >
                      {isSuccess ? (
                        // <Link to={`/payment`}>
                        //     <Button className="payment-btn" onClick={handleform}>Konfirmasi Pembayaran</Button>
                        // </Link>
                        <Button className="payment-btn" type="submit">
                          {loading ? <Spinner /> : "Konfirmasi Pembayaran"}
                        </Button>
                      ) : (
                        <Button
                          className="payment-btn disabled"
                          onClick={handleform}
                        >
                          Konfirmasi Pembayaran
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={4} className="right-payment-section">
                {/* start flight detail section*/}
                <div md={4} className="right-payment-section">
                  {/* start payment status section */}
                  <div className="payment-status">
                    <Row>
                      <Col md={6} sm={6} xs={6}>
                        <h3>Kode BinAir</h3>
                      </Col>
                      <Col
                        md={6}
                        sm={6}
                        xs={6}
                        className="d-flex flex-row-reverse"
                      >
                        <p>{transactionById[0].id}</p>
                      </Col>
                    </Row>
                    <Row className="align-items-center">
                      <Col md={6} sm={6} xs={6}>
                        <h3>Status Pemesanan</h3>
                      </Col>
                      <Col
                        md={6}
                        sm={6}
                        xs={6}
                        className="d-flex flex-row-reverse"
                      >
                        <Badge pill className="badge-payment">
                          Dalam Proses
                        </Badge>
                      </Col>
                    </Row>
                  </div>
                  {/* end payment status section */}

                  {/* start flight detail section*/}
                  <div className="flight-detail-section">
                    <div className="info-header">
                      <h3 className="card-title">Rincian Penerbangan</h3>
                    </div>
                    <div className="info-content">
                      <Row className="departure-flight align-items-center">
                        <Col md={8} sm={8} xs={8}>
                          <h3>Penerbangan Keberangkatan</h3>
                          <p>{ticketById.date_start}</p>
                        </Col>
                        <Col
                          md={4}
                          sm={4}
                          xs={4}
                          className="d-flex flex-row-reverse"
                        >
                          <Badge className="baggage-badge">
                            {" "}
                            Gratis 20kg bagasi{" "}
                          </Badge>
                        </Col>
                      </Row>
                      <Row className="flight-type align-items-center">
                        <Col md={8} sm={8} xs={8}>
                          <h3>BinAir</h3>
                          <p>QZ7518</p>
                        </Col>
                        <Col
                          md={4}
                          sm={4}
                          xs={4}
                          className="d-flex flex-row-reverse"
                        >
                          <img src={logo} alt="logo" className="logo-flight" />
                        </Col>
                      </Row>
                      <hr></hr>
                      {/* timeline pesawat*/}
                      <div className="flight-timeline">
                        <div className="departure-timeline bullet timeline-object not-complete">
                          <div className="timeline-status"> </div>
                          <Row className="timeline-content">
                            <Col md={5} sm={5} xs={5}>
                              <h3>{ticketById.departure_time}</h3>
                              <p>{ticketById.start_date}</p>
                            </Col>
                            <Col md={7} sm={7} xs={7}>
                              <h3>{ticketById.from} </h3>
                              <p>{ticketById.airport_from}</p>
                              <p>Terminal 1A</p>
                            </Col>
                          </Row>
                        </div>
                        <div className="duration">
                          <p>
                            <span>
                              <i className="ri-time-line"></i>
                            </span>{" "}
                            1h 50m
                          </p>
                        </div>
                        <div className="homecoming-timeline bullet timeline-object complete">
                          <div className="timeline-status"> </div>
                          <Row className="timeline-content">
                            <Col md={5} sm={5} xs={5}>
                              <h3>{ticketById.arrival_time}</h3>
                              <p>{ticketById.start_date}</p>
                            </Col>
                            <Col md={7} sm={7} xs={7}>
                              <h3>{ticketById.to} </h3>
                              <p>{ticketById.airport_to}</p>
                              <p>Terminal Domestic</p>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="flight-facility">
                        <ul>
                          <li>
                            <p className="information">
                              <i className="ri-information-line icon"></i>
                              <span> Bisa Refund</span>
                            </p>
                          </li>
                          <li>
                            <p className="information">
                              <i className="ri-information-line icon"></i>
                              <span> Perubahan Jadwal</span>
                            </p>
                          </li>
                          <li>
                            <p className="information">
                              <i className="ri-information-line icon"></i>
                              <span> Perkiraan Penerbitan Tiket</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="ri-checkbox-circle-line icon"></i>
                              <span> Bagasi Kabin 7kg</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="ri-suitcase-3-line icon"></i>
                              <span> Bagasi 20kg</span>
                            </p>
                          </li>
                          <li>
                            <p>
                              <i className="ri-gamepad-line icon"></i>
                              <span> Hiburan</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* end flight detail section*/}

                  {/* start price section */}
                  <div className="price-section">
                    <div className="price-header">
                      <h2 className="card-title">Keterangan Harga</h2>
                    </div>
                    <div className="price-content">
                      <Accordion defaultActiveKey={["0"]} alwaysOpen>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <Row>
                              <Col
                                md={7}
                                sm={7}
                                xs={7}
                                className="accordion-timeline"
                              >
                                <h3>
                                  Berangkat ({search.from.code}{" "}
                                  <span>
                                    <i className="ri-arrow-right-line"></i>
                                  </span>{" "}
                                  {search.to.code})
                                </h3>
                              </Col>
                              <Col
                                md={5}
                                sm={5}
                                xs={5}
                                className="accordion-timeline d-flex flex-row-reverse"
                              >
                                <h3>{getTotalAmount()} </h3>
                              </Col>
                            </Row>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Row>
                              <Col
                                md={7}
                                sm={7}
                                xs={6}
                                className="accordion-timeline"
                              >
                                <p>Dewasa x {search.countDewasa}</p>
                              </Col>
                              <Col md={5} sm={5} xs={6}>
                                <p className="d-flex flex-row-reverse">
                                  {getAdultPrice()}
                                </p>
                              </Col>
                            </Row>
                            {search.countAnak > 0 && (
                              <Row>
                                <Col
                                  md={7}
                                  sm={7}
                                  xs={6}
                                  className="accordion-timeline"
                                >
                                  <p>Anak-anak x {search.countAnak}</p>
                                </Col>
                                <Col md={5} sm={5} xs={6}>
                                  <p className="d-flex flex-row-reverse">
                                    {getChildPrice()}
                                  </p>
                                </Col>
                              </Row>
                            )}
                          </Accordion.Body>
                        </Accordion.Item>
                        {ticketById.type == "roundtrip" && (
                          <Accordion.Item eventKey="1">
                            <Accordion.Header>
                              <Row>
                                <Col
                                  md={7}
                                  sm={7}
                                  xs={7}
                                  className="accordion-timeline"
                                >
                                  <h3>
                                    Pulang ({search.to.code}{" "}
                                    <span>
                                      <i className="ri-arrow-right-line"></i>
                                    </span>{" "}
                                    {search.from.code})
                                  </h3>
                                </Col>
                                <Col
                                  md={5}
                                  sm={5}
                                  xs={5}
                                  className="accordion-timeline d-flex flex-row-reverse"
                                >
                                  <h3>{getTotalAmount()}</h3>
                                </Col>
                              </Row>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <Col
                                  md={7}
                                  sm={7}
                                  xs={6}
                                  className="accordion-timeline"
                                >
                                  <p>Dewasa x {search.countDewasa}</p>
                                </Col>
                                <Col md={5} sm={5} xs={6}>
                                  <p className="d-flex flex-row-reverse">
                                    {getAdultPrice()}
                                  </p>
                                </Col>
                              </Row>
                              {search.countAnak > 0 && (
                                <Row>
                                  <Col
                                    md={7}
                                    sm={7}
                                    xs={6}
                                    className="accordion-timeline"
                                  >
                                    <p>Anak-anak x {search.countAnak}</p>
                                  </Col>
                                  <Col md={5} sm={5} xs={6}>
                                    <p className="d-flex flex-row-reverse">
                                      {getChildPrice()}
                                    </p>
                                  </Col>
                                </Row>
                              )}
                            </Accordion.Body>
                          </Accordion.Item>
                        )}
                      </Accordion>
                    </div>
                    <div className="price-total">
                      <Row>
                        <Col md={7} sm={7} xs={7}>
                          <h3>Total Harga</h3>
                        </Col>
                        <Col md={5} sm={5} xs={5}>
                          <h3 className="d-flex flex-row-reverse">
                            {getTotalAmount()}
                          </h3>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  {/* end price section */}

                  {/* start traveler section */}
                  <div className="traveler-section">
                    <div className="traveler-header">
                      <Row>
                        <Col md={12} sm={12} xs={12}>
                          <h3>Traveler</h3>
                        </Col>
                      </Row>
                    </div>
                    <div className="traveler-content">
                      {transactionById[0].traveler.map((traveler, index) => {
                        return (
                          <Row>
                            <Col md={9} sm={9} xs={9}>
                              <ul>
                                <li>
                                  {getTitle(traveler.title)} {traveler.name}
                                </li>
                              </ul>
                            </Col>
                            <Col
                              md={3}
                              sm={3}
                              xs={3}
                              className="d-flex flex-row-reverse"
                            >
                              <p>{traveler.type}</p>
                            </Col>
                          </Row>
                        );
                      })}
                    </div>
                  </div>
                  {/* end traveler section */}

                  {/* start contact section */}
                  <div className="contact-section">
                    <div className="contact-header">
                      <h3>Keterangan Kontak</h3>
                    </div>
                    <div className="contact-content">
                      <h4 className="contact-name">
                        {user.gender == "perempuan"
                          ? `Ny. ${user.firstname} ${user.lastname}`
                          : `Tn. ${user.firstname} ${user.lastname}`}
                      </h4>
                      <p>{user.email}</p>
                      <p>+62 82176319252</p>
                    </div>
                  </div>
                  {/* end contact section */}
                </div>
                {/* end flight detail section*/}
              </Col>
            </Row>
          </Form>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentConfirmation;
