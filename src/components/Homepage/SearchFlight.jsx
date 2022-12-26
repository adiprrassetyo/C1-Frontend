import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "../../assets/styles/flightDatepicker.css";
import "../../assets/styles/searchFlight.css";

// import "react-google-flight-datepicker/dist/main.css";
import moment from "moment";
import {
  RangeDatePicker,
  SingleDatePicker,
} from "react-google-flight-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { retriveTickets, setSearch } from "../../redux/slices/ticketSlice";

const SearchFlight = () => {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(false);
  const [countDewasa, setCountDewasa] = useState(1);
  const [countAnak, setCountAnak] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const toRef = useRef();
  const fromRef = useRef();

  // const [countBaby, setCountBaby] = useState(0);
  const [from, setFrom] = useState([{ code: null, city: null, airport: null }]);
  const [to, setTo] = useState([{ code: null, city: null, airport: null }]);
  const [selected, setSelected] = useState("oneway");
  const dispatch = useDispatch();
  const { loading, status, ticket } = useSelector((state) => state.ticket);
  const redirect = useNavigate();

  const handleChange = (event) => {
    setSelected(event.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setSearch({
        from: from[0],
        to: to[0],
        type: selected,
        startDate: startDate,
        endDate: endDate,
        // willFly: false,
        countDewasa,
        countAnak,
      })
    );
    dispatch(
      retriveTickets({
        params: {
          from: from[0],
          to: to[0],
          type: selected,
          date: startDate,
          willFly: true,
        },
        redirect,
      })
    );
  };

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
                {/* <Form.Control
                  type="text"
                  className="form-input form-style"
                  id="kotaberangkat"
                  placeholder="Pilih Kota Keberangkatan"
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
                  labelKey={(option) => `${option.city} (${option.code})`}
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
                    <div className="sugest container w-fluid m-0 p-0">
                      <span
                        className="fw-bold fs-6"
                        style={{ fontSize: "1px" }}
                      >
                        {option.city} ({option.code})
                      </span>{" "}
                      <br />
                      <span className="text-secondary">{option.airport})</span>
                    </div>
                  )}
                />
              </Form.Group>
            </Col>
            {/* <button className="btn-switch-city" onClick={switchCity}>
              <img src={switchbtn} alt="Switch City Button" />
            </button> */}
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="kotatujuan">Ke</Form.Label>
                {/* <Form.Control
                  type="text"
                  className="form-input form-style"
                  id="kotatujuan"
                  placeholder="Pilih Kota Tujuan"
                  value={to}
                  onChange={fromOnChange}
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
                  labelKey={(option) => `${option.city} (${option.code})`}
                  inputProps={{
                    required: true,
                    className: "form-input form-style p-0 ps-1",
                    style: {},
                  }}
                  options={options}
                  placeholder="Pilih Kota Tujuan"
                  renderMenuItemChildren={(option) => (
                    <div className="sugest container w-fluid m-0 p-0">
                      <span
                        className="fw-bold fs-6 m-0 p-0"
                        style={{ fontSize: "1px" }}
                      >
                        {option.city} ({option.code})
                      </span>{" "}
                      <br />
                      <span className="text-secondary">{option.airport})</span>
                    </div>
                  )}
                />
              </Form.Group>
            </Col>
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="sekalijalan">
                  Tanggal Penerbangan
                </Form.Label>

                {visible1 && (
                  <div>
                    <SingleDatePicker
                      startDate={startDate}
                      minDate={new Date()}
                      startDatePlaceholder="Tanggal Keberangkatan"
                      id="single-date-picker"
                      // dateFormat="D"
                      monthFormat="MMM YYYY"
                      onChange={(startDate) => startEndDateChange(startDate)}
                    />
                  </div>
                )}

                {visible2 && (
                  <div>
                    <RangeDatePicker
                      startDate={startDate}
                      endDate={endDate}
                      // endDate={new Date()}
                      // minDate={new Date()}
                      startDatePlaceholder="Tanggal Keberangkatan"
                      endDatePlaceholder="Tanggal Kepulangan"
                      id="range-date-picker"
                      onChange={(startDate, endDate) =>
                        startEndDateChange(startDate, endDate)
                      }
                    />
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col md={2} className="form hidden-form">
              {/* {visible2 && (
                <Form.Label htmlFor="pulangpergi" className="pulangpergi">
                  Tanggal Pergi
                </Form.Label>
              )} */}
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
                          type="button"
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
                          type="button"
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
                          type="button"
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
                          type="button"
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
                className="search-flight-btn p-2"
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
