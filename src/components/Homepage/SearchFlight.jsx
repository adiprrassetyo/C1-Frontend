import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "../../assets/styles/searchFlight.css";
import "../../assets/styles/flightDatepicker.css";
import switchbtn from "../../assets/images/switch-btn.svg";

// import "react-google-flight-datepicker/dist/main.css";
import { retriveTickets } from "../../redux/slices/ticketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RangeDatePicker,
  SingleDatePicker,
} from "react-google-flight-datepicker";
import { useEffect } from "react";

const SearchFlight = () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [countDewasa, setCountDewasa] = useState(0);
  const [countAnak, setCountAnak] = useState(0);
  const [date, setDate] = useState("");

  // const [countBaby, setCountBaby] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [selected, setSelected] = useState("oneway");
  const dispatch = useDispatch();
  const ticket = useSelector((state) => state.ticket);

  useEffect(() => {
    console.info(ticket);
  }, [dispatch]);

  // console.log(
  //   { from, to, type: selected },
  //   { countBaby, countAnak, countDewasa }
  // );

  console.log(date);

  const handleChange = (event) => {
    setSelected(event.target.value);
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

  const redirect = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submited");
    dispatch(
      retriveTickets({ params: { from, to, type: selected }, redirect })
    );
  };
  return (
    <div>
      <Container className="card-flights">
        <form onSubmit={handleSubmit}>
          <Row className="opsi-flight">
            <Col md={2} sm={6} xs={6}>
              <input
                type="radio"
                id="sekalijalanInput"
                className="me-1"
                name="contact"
                value="oneway"
                onClick={() => {
                  setVisible1(true);
                  setVisible2(false);
                }}
                checked={selected === "oneway"}
                onChange={handleChange}
              ></input>
              <label htmlFor="sekalijalanInput">Sekali Jalan</label>
            </Col>
            <Col md={2} sm={6} xs={6} className="opsi-flight-right">
              <input
                type="radio"
                id="pulangpergiInput"
                className="me-1"
                name="contact"
                value="roundtrip"
                onClick={() => {
                  setVisible1(false);
                  setVisible2(true);
                }}
                checked={selected === "roundtrip"}
                onChange={handleChange}
              ></input>
              <label htmlFor="pulangpergiInput">Pulang Pergi</label>
            </Col>
          </Row>
          <br></br>
          <Row className="form-outline">
            <Col md={2} className="mb-0">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="kotaberangkat">Dari</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input form-style"
                  id="kotaberangkat"
                  placeholder="Pilih Kota Keberangkatan"
                  onChange={fromOnChange}
                  value={from}
                />
              </Form.Group>
            </Col>
            <button className="btn-switch-city" onClick={switchCity}>
              <img src={switchbtn} alt="Switch City Button" />
            </button>
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="kotatujuan">Ke</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input form-style"
                  id="kotatujuan"
                  placeholder="Pilih Kota Tujuan"
                  onChange={toOnChange}
                  value={to}
                />
              </Form.Group>
            </Col>
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="sekalijalan">Tanggal Berangkat</Form.Label>

                {visible1 && (
                  <div>
                    <SingleDatePicker
                      startDate={new Date()}
                      minDate={new Date()}
                      startDatePlaceholder=" "
                      id="single-date-picker"
                      dateFormat="D"
                      monthFormat="MMM YYYY"
                      onChange={(startDate) => setDate(startDate)}
                    />
                  </div>
                )}

                {visible2 && (
                  <div>
                    <RangeDatePicker
                      startDate={new Date()}
                      endDate={new Date()}
                      minDate={new Date()}
                      startDatePlaceholder=" "
                      endDatePlaceholder=" "
                      id="range-date-picker"
                      onChange={(startDate) => setDate(startDate)}
                    />
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col md={2} className="form hidden-form">
              {visible2 && (
                <Form.Label htmlFor="pulangpergi" className="pulangpergi">
                  Tanggal Pergi
                </Form.Label>
              )}
            </Col>

            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label>Traveler</Form.Label>
                <DropdownButton
                  title={countDewasa + countAnak + ` Traveler`}
                  id="dropdown-traveler"
                >
                  <div className="dropdown-item-traveler dewasa">
                    <Row className="align-items-center">
                      <Col md={6} sm={6} className="p-0">
                        <p className="traveler-title">Dewasa</p>
                        <p className="traveler-desc">Umur 12+</p>
                      </Col>
                      <Col md={2} sm={2} className="p-1">
                        <button
                          className="decrement-btn"
                          onClick={() => setCountDewasa(countDewasa - 1)}
                          disabled={countDewasa === 0}
                        >
                          -
                        </button>
                      </Col>
                      <Col md={2} sm={2}>
                        <p>{countDewasa}</p>
                      </Col>
                      <Col md={2} sm={2} className="p-1">
                        <button
                          className="increment-btn fw-bold"
                          onClick={() => setCountDewasa(countDewasa + 1)}
                          disabled={countDewasa + countAnak >= 6}
                        >
                          +
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <div className="dropdown-item-traveler anak">
                    <Row className="align-items-center">
                      <Col md={6} sm={6} className="p-0">
                        <p className="traveler-title">Anak-Anak</p>
                        <p className="traveler-desc">Umur 2-11</p>
                      </Col>
                      <Col md={2} sm={2} className="p-1">
                        <button
                          className="decrement-btn"
                          onClick={() => setCountAnak(countAnak - 1)}
                          disabled={countAnak === 0}
                        >
                          -
                        </button>
                      </Col>
                      <Col md={2} sm={2}>
                        <p>{countAnak}</p>
                      </Col>
                      <Col md={2} sm={2} className="p-1">
                        <button
                          className="increment-btn fw-bold"
                          onClick={() => setCountAnak(countAnak + 1)}
                          disabled={countDewasa + countAnak >= 6}
                        >
                          +
                        </button>
                      </Col>
                    </Row>
                  </div>
                  {/* <div className="dropdown-item-traveler bayi">
                    <Row className="align-items-center">
                      <Col md={6} sm={6} className="p-0">
                        <p className="traveler-title">Bayi</p>
                        <p className="traveler-desc"> {"<"}2 tahun</p>
                      </Col>
                      <Col md={2} sm={2} className="p-1">
                        <button
                          className="decrement-btn"
                          onClick={() => setCountBaby(countBaby - 1)}
                          disabled={countBaby === 0}
                        >
                          -
                        </button>
                      </Col>
                      <Col md={2} sm={2}>
                        <p>{countBaby}</p>
                      </Col>
                      <Col md={2} sm={2} className="p-1">
                        <button
                          className="increment-btn fw-bold"
                          onClick={() => setCountBaby(countBaby + 1)}
                          disabled={countDewasa + countAnak + countBaby >= 6}
                        >
                          +
                        </button>
                      </Col>
                    </Row>
                  </div> */}
                </DropdownButton>
              </Form.Group>
            </Col>
            <Col md={2} className="form">
              <Button
                type="submit"
                className="search-flight-btn"
                variant="secondary"
              >
                Cari Penerbangan
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default SearchFlight;
