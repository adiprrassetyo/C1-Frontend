import React, { useEffect, useState, useRef } from "react";
import feature1 from "../assets/images/feature1.svg";
import feature2 from "../assets/images/feature2.svg";
import feature3 from "../assets/images/feature3.svg";
import feature4 from "../assets/images/feature4.svg";
import feature5 from "../assets/images/feature5.svg";
import feature6 from "../assets/images/feature6.svg";
import {
  Button,
  Col,
  Container,
  Form,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomerSupportImg from "../assets/images/customerSupport.svg";
import google_play from "../assets/images/google-play.svg";
import mobile_mockup from "../assets/images/mobile-mockup.svg";
import SimplifyBookingImg from "../assets/images/simplifyBooking.svg";
import SwitchCityIcon from "../assets/images/switch-city.svg";
import TravelProduct from "../assets/images/travelProducts.svg";
import "../assets/styles/flight.css";
import { Footer, Header } from "../components";
import { retriveTickets, setSearch } from "../redux/slices/ticketSlice";
import moment from "moment";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";
import {
  SingleDatePicker,
  RangeDatePicker,
} from "react-google-flight-datepicker";

const Flight = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [from, setFrom] = useState([{ code: null, city: null, airport: null }]);
  const [to, setTo] = useState([{ code: null, city: null, airport: null }]);
  const [sumAdult, setSumAdult] = useState(1);
  const [sumChild, setSumChild] = useState(0);
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { loading, status, ticket } = useSelector((state) => state.ticket);
  const toRef = useRef();
  const fromRef = useRef();
  //auto complete
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      const res = await axios.get(
        "https://binair-backend-production.up.railway.app/api/v1/search"
      );
      setOptions(res.data.data);
    };

    getOptions();
  }, []);

  useEffect(() => {
    console.info({ ticket, status });
  }, [dispatch]);

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

  console.log({
    params: {
      from: from[0],
      to: to[0],
      type: isRoundTrip ? "roundtrip" : "oneway",
      date: startDate,
      // willFly: true,
      sumChild,
      sumAdult,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const start = startDate ? moment(startDate).add(1, "days") : null;
    const end = startDate ? moment(endDate).add(1, "days") : null;
    setSearch({
      from: from[0],
      to: to[0],
      type: isRoundTrip ? "roundtrip" : "oneway",
      startDate: start,
      endDate: end,
      willFly: true,
      sumChild,
      sumAdult,
    });
    dispatch(
      retriveTickets({
        params: {
          from: from[0],
          to: to[0],
          type: isRoundTrip ? "roundtrip" : "oneway",
          date: start,
          endDate: end,
          willFly: true,
        },
        redirect,
      })
    );
  };

  const startEndDateChange = (startDt, endDt) => {
    if (startDt) {
      setStartDate(startDt);
      endDt === null && setEndDate(endDt);
    }
    if (endDt) {
      const momentEndDt = moment(endDt, "MM/DD/YYYY");
      if (momentEndDt.isValid()) {
        setEndDate(endDt);
      }
    }
  };

  return (
    <Container fluid className="flight">
      <Header />
      <Container fluid className="jumbotronFlight d-flex align-items-center">
        <Container fluid="xl">
          <Row className="align-items-center jumbotron-content">
            <Col className="flight-form ">
              <Form className="flight-form col" onSubmit={handleSubmit}>
                {isRoundTrip ? (
                  <div
                    className="btn-group switch-form"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    {/* <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      checked
                    ></input> */}
                    <label
                      className="btn btn-switch-form"
                      htmlFor="btnradio1"
                      onClick={switchForm}
                    >
                      Sekali Jalan
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                      checked
                    ></input>
                    <label className="btn btn-switch-form" htmlFor="btnradio2">
                      Pulang Pergi
                    </label>
                  </div>
                ) : (
                  <div
                    className="btn-group switch-form"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      checked={isRoundTrip ? false : true}
                    ></input>
                    <label className="btn btn-switch-form" htmlFor="btnradio1">
                      Sekali Jalan
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                      checked={isRoundTrip ? true : false}
                    ></input>
                    <label
                      className="btn btn-switch-form"
                      htmlFor="btnradio2"
                      onClick={switchForm}
                    >
                      Pulang Pergi
                    </label>
                  </div>
                )}
                <Container className="border rounded p-2">
                  <Row>
                    <Col className="col-10">
                      <Form.Group className=" mb-1">
                        <Form.Label>
                          <h4>Dari</h4>
                        </Form.Label>
                        {/* <Form.Control
                          type="text"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Pilih kota keberangkatan"
                          onChange={fromOnChange}
                          value={from}
                        /> */}
                        <Typeahead
                          id="kotaberangkat"
                          value={from}
                          ref={fromRef}
                          inputProps={{
                            required: true,
                            className: "form-input form-style p-0 ps-1",
                            style: {},
                          }}
                          size={"sm"}
                          labelKey={(option) =>
                            `${option.city} (${option.code})`
                          }
                          onInputChange={(selected) => {
                            setFrom([
                              {
                                code: "",
                                city: selected,
                                airport: "",
                              },
                            ]);
                          }}
                          onChange={(selectedOpt) => {
                            setFrom(selectedOpt);
                          }}
                          options={options}
                          placeholder="Pilih Kota Keberangkatan"
                          renderMenuItemChildren={(option) => (
                            <div className="container w-fluid">
                              <span
                                className="fw-bold fs-6"
                                style={{ fontSize: "1px" }}
                              >
                                {option.city} ({option.code})
                              </span>{" "}
                              <br />
                              <span className="text-secondary">
                                {option.airport})
                              </span>
                            </div>
                          )}
                        />
                      </Form.Group>
                      <Form.Group className=" mb-1">
                        <Form.Label>
                          <h4>Ke</h4>
                        </Form.Label>
                        {/* <Form.Control
                          type="text"
                          className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                          placeholder="Pilih kota tujuan"
                          onChange={toOnChange}
                          value={to}
                        /> */}
                        <Typeahead
                          id="labelkey-example"
                          value={to}
                          className="form-input form-style fs-5"
                          size={"sm"}
                          ref={toRef}
                          onChange={(selectedOpt) => {
                            setTo(selectedOpt);
                          }}
                          onInputChange={(selected) => {
                            setTo({
                              code: "",
                              city: selected,
                              airport: "",
                            });
                          }}
                          labelKey={(option) =>
                            `${option.city} (${option.code})`
                          }
                          inputProps={{
                            required: true,
                            className: "form-input form-style p-0 ps-1",
                            style: {},
                          }}
                          options={options}
                          placeholder="Pilih Kota Tujuan"
                          renderMenuItemChildren={(option) => (
                            <div className="container w-fluid">
                              <span
                                className="fw-bold fs-6"
                                style={{ fontSize: "1px" }}
                              >
                                {option.city} ({option.code})
                              </span>{" "}
                              <br />
                              <span className="text-secondary">
                                {option.airport})
                              </span>
                            </div>
                          )}
                        />
                      </Form.Group>
                    </Col>
                    {/* <Col className="d-flex align-items-center">
                      <button
                        className="btn switch-city-btn"
                        onClick={switchCity}
                      >
                        <img src={SwitchCityIcon} alt="Switch City" />
                      </button>
                    </Col> */}
                  </Row>
                </Container>
                <Container className="border rounded p-2">
                  <Form.Group className=" mb-1">
                    {isRoundTrip ? (
                      <div>
                        <Row>
                          <Col>
                            <Form.Label>
                              <h4>Tanggal Penerbangan</h4>
                            </Form.Label>
                          </Col>
                          <Col>
                            <Form.Label></Form.Label>
                          </Col>
                        </Row>
                        <RangeDatePicker
                          startDate={startDate}
                          endDate={endDate}
                          // minDate={new Date()}
                          startDatePlaceholder="Tanggal Keberangkatan"
                          endDatePlaceholder="Tanggal Kepulangan"
                          id="range-date-picker"
                          onChange={(startDate, endDate) =>
                            startEndDateChange(startDate, endDate)
                          }
                        />
                      </div>
                    ) : (
                      <div>
                        <Form.Label>
                          <h4>Tanggal Penerbangan</h4>
                        </Form.Label>
                        <SingleDatePicker
                          startDate={startDate}
                          minDate={new Date()}
                          startDatePlaceholder="Tanggal Keberangkatan"
                          id="single-date-picker"
                          monthFormat="MMM YYYY"
                          onChange={(startDate) =>
                            startEndDateChange(startDate)
                          }
                        />
                      </div>
                    )}
                  </Form.Group>
                </Container>
                <Container className="popover-container border rounded">
                  <OverlayTrigger
                    trigger="click"
                    key="top"
                    placement="top"
                    overlay={
                      <Popover id={`popover-positioned-top`}>
                        <Popover.Header as="h3">{`Traveler`}</Popover.Header>
                        <Popover.Body>
                          <Row className="mb-2">
                            <Col>
                              <h4>
                                {" "}
                                <strong>Dewasa</strong>
                              </h4>
                              <h4>Umur 12+</h4>
                            </Col>
                            <Col>
                              <div className="set-traveler">
                                <Button
                                  className={
                                    sumAdult > 1 ? "btn-active" : "btn-inactive"
                                  }
                                  onClick={sumAdult > 1 ? decreaseAdult : null}
                                >
                                  -
                                </Button>
                                {sumAdult}
                                <Button
                                  onClick={increaseAdult}
                                  className="btn-active"
                                  disabled={
                                    sumAdult + sumChild >= 6 ? true : false
                                  }
                                >
                                  +
                                </Button>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h4>
                                {" "}
                                <strong>Anak-anak</strong>
                              </h4>
                              <h4>Umur 2-11</h4>
                            </Col>
                            <Col>
                              <div className="set-traveler">
                                <Button
                                  className={
                                    sumChild > 0 ? "btn-active" : "btn-inactive"
                                  }
                                  onClick={sumChild > 0 ? decreaseChild : null}
                                >
                                  -
                                </Button>
                                {sumChild}
                                <Button
                                  onClick={increaseChild}
                                  className="btn-active"
                                  disabled={
                                    sumAdult + sumChild >= 6 ? true : false
                                  }
                                >
                                  +
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Popover.Body>
                      </Popover>
                    }
                  >
                    <Button className="popover-trigger">
                      <h4>Traveler</h4>
                      {sumAdult + sumChild} Traveler
                    </Button>
                  </OverlayTrigger>
                </Container>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn-login my-3"
                >
                  Cari Penerbangan
                </Button>
              </Form>
            </Col>
            <Col>
              <h2 className="text-white">
                Temukan, Bandingkan, dan Pesan Penerbanganmu dengan mudah
              </h2>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Container fluid="md" className="service">
        <h3 className="section-title">Mengapa Binair?</h3>
        <div className="card-group">
          <div className="card">
            <img src={CustomerSupportImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>Layanan Pelanggan Ramah</h3>
            </div>
            <div className="card-footer">
              <h4 className="text-muted">
                Layanan pelanggan kami tersedia 24/7 memberikan bantuan terbaik
                dalam bahasa lokal Anda
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={SimplifyBookingImg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>Mempermudah Pengalaman Booking Anda</h3>
            </div>
            <div className="card-footer">
              <h4 className="text-muted">
                Rasakan fleksibilitas dan kemudahan selama proses pemesanan
              </h4>
            </div>
          </div>
          <div className="card">
            <img src={TravelProduct} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>Banyak Pilihan Produk Travel</h3>
            </div>
            <div className="card-footer">
              <h4 className="text-muted">
                Nikmati momen yang mengesankan dengan jutaan penerbangan dan
                akomodasi yang menguntungkan
              </h4>
            </div>
          </div>
        </div>
      </Container> */}
      <section className="feature-section">
        <Container className="text-center">
          <h3 className="section-title">Mengapa Binair?</h3>
          <div className="feature ">
            <Row>
              <Col md={4} className="feature-col">
                <img
                  src={feature1}
                  alt="feature-1"
                  className="feature-img"
                ></img>
                <p className="feature-title">
                  Mempermudah Pengalaman Booking Anda
                </p>
                <p className="feature-desc">
                  Rasakan fleksibilitas dan kemudahan selama proses pemesanan
                </p>
              </Col>
              <Col md={4} className="feature-col">
                <img
                  src={feature3}
                  alt="feature-3"
                  className="feature-img"
                ></img>
                <p className="feature-title">Banyak Pilihan Destinasi</p>
                <p className="feature-desc">
                  Nikmati momen yang mengesankan dengan jutaan penerbangan dan
                  akomodasi yang menguntungkan
                </p>
              </Col>
              <Col md={4}>
                <img
                  src={feature6}
                  alt="feature-6"
                  className="feature-img"
                ></img>
                <p className="feature-title">Banyak Pilihan Destinasi</p>
                <p className="feature-desc">
                  Layanan pelanggan kami tersedia 24/7 memberikan bantuan
                  terbaik dalam bahasa lokal Anda
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className="mobileapp-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} sm={6} xs={12}>
              <img
                src={mobile_mockup}
                alt="mobile-mockup"
                className="mobile-mockup"
                width="430"
              />
            </Col>
            <Col md={6} sm={6} xs={12}></Col>
          </Row>
        </Container>
        <div className="mobile-section-content">
          <Container>
            <Row className="align-items-center">
              <Col md={6} sm={6} xs={12}></Col>
              <Col md={6} sm={6} xs={12} className="text-mobile-section">
                <p>
                  Unduh Aplikasi BinAir Sekarang,Pesan tiket pesawat dengan
                  lebih mudah!
                </p>
                <a href="#">
                  <img
                    src={google_play}
                    alt="google play logo"
                    width="150"
                    className="google-play-logo"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer />
    </Container>
  );
};

export default Flight;
