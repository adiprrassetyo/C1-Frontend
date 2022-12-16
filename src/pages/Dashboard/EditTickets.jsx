import { Squash as Hamburger } from "hamburger-react";
import React, { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { SingleDatePicker } from "react-google-flight-datepicker";
import TimePicker from "react-bootstrap-time-picker";
import { Typeahead } from "react-bootstrap-typeahead";
import axios from "axios";

const EditTickets = () => {
  const [isToggled, setIsToggled] = useOutletContext();
  const [from, setFrom] = useState([{ code: null, city: null, airport: null }]);
  const [to, setTo] = useState([{ code: null, city: null, airport: null }]);
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
    <div id="page-content-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
        <div className="d-flex align-items-center">
          <Container className="bg-white rounded me-2 p-0">
            <Hamburger
              size={22}
              toggled={isToggled}
              toggle={() => {
                setIsToggled(!isToggled);
              }}
              style={{ margin: 0 }}
            />
          </Container>
          <h2 className="fs-4 m-0 text-white">Add</h2>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle second-text fw-bold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-user me-2" />
                John Doe
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid px-4 m-2">
        <div className="row my-2 p-4 bg-white rounded shadow-sm">
          <Form className="" style={{ width: "40%" }}>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>From</Form.Label>
                <Typeahead
                  id="kotaberangkat"
                  value={from}
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
              <Form.Group className="mb-3">
                <Form.Label>To</Form.Label>
                <Typeahead
                  id="labelkey-example"
                  value={to}
                  className="form-input form-style fs-5"
                  size={"sm"}
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
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Arrival Time</Form.Label>
                  <TimePicker start="10:00" end="21:00" step={30} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Departure Time</Form.Label>
                  <TimePicker start="10:00" end="21:00" step={30} />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <SingleDatePicker
                  startDate={new Date()}
                  minDate={new Date()}
                  startDatePlaceholder="Tanggal Keberangkatan"
                  id="single-date-picker"
                  monthFormat="MMM YYYY"
                  onChange={(startDate) => startEndDateChange(startDate)}
                />
              </Form.Group>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Adult Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan harga tiket dewasa"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Child Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukan harga tiket anak - anak"
                  />
                </Form.Group>
              </Col>
              <Row>
                <Col className="me-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" defaultValue="Option 2">
                      <option value="rountrip">Roundtrip</option>
                      <option value="oneway">Oneway</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukan jumlah stok"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditTickets;
