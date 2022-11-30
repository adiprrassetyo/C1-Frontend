import React, { useState } from "react";
import {Container, Row, Col, Form, Button, Dropdown, DropdownButton} from "react-bootstrap";
import "../../assets/styles/searchFlight.css";

const SearchFlight = () => {
    const [visible, setVisible] = useState(false);
    const [countDewasa, setCountDewasa] = useState(0);
    const [countAnak, setCountAnak] = useState(0);
    const [countBaby, setCountBaby] = useState(0);
    return (
        <div>
            <Container className="card-flights">
          <Row>
            <Col md={2}>
              <input type="radio" id="sekalijalanInput" name="contact" value="sekalijalan" onClick={ () => setVisible(false)}></input>
              <label htmlFor="sekalijalanInput">Sekali Jalan</label>
            </Col>
            <Col md={2}>
              <input type="radio" id="pulangpergiInput" name="contact" value="pulangpergi" onClick={ () => setVisible(true)}></input>
              <label htmlFor="pulangpergiInput">Pulang Pergi</label>
            </Col>

            
          </Row>
          <br></br>
          <Row className="form-outline">
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label>Dari</Form.Label>
                  <Form.Select className="form-style">
                    <option>Pilih Kota Keberangkatan</option>
                    <option>Jakarta</option>
                    <option>Bali</option>
                  </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label>Ke</Form.Label>
                  <Form.Select className="form-style">
                    <option>Pilih Kota Tujuan</option>
                    <option>Jakarta</option>
                    <option>Bali</option>
                  </Form.Select>
              </Form.Group>
            </Col>
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label>Tanggal Berangkat</Form.Label>
                  <Form.Control type="date" className="form-style"/>
              </Form.Group>
            </Col>
            
            <Col md={2}>
            { visible &&
                <Form.Group className="mb-3 form">
                <Form.Label>Tanggal Pergi</Form.Label>
                  <Form.Control type="date"/>
               </Form.Group>
            }
            </Col>
            
            <Col md={2} className="form">
              <Form.Group className="mb-3">
                <Form.Label>Traveler</Form.Label>
                <DropdownButton
          
          title={countDewasa+countAnak+countBaby + ` Traveler`}
          id="dropdown-traveler"
          
        >
          <div class="dropdown-item-traveler dewasa">
              <Row className="align-items-center">
                <Col md={6} className="p-0">
                  <p className="traveler-title">Dewasa</p>
                  <p className="traveler-desc">Umur 12+</p>
                </Col>
                <Col md={2} className="p-1">
                  <button className="decrement-btn" onClick={ () => setCountDewasa(countDewasa - 1)} disabled={countDewasa === 0 } >-</button>
                </Col>
                <Col md={2}>
                  <p>{countDewasa}</p>
                </Col>
                <Col md={2} className="p-1">
                  <button className="increment-btn fw-bold" onClick={ () => setCountDewasa(countDewasa + 1)} disabled={countDewasa+countAnak+countBaby >= 6}>+</button>
                </Col>
              </Row>
          </div>
          <div class="dropdown-item-traveler anak">
              <Row className="align-items-center">
                <Col md={6} className="p-0">
                  <p className="traveler-title">Anak-Anak</p>
                  <p className="traveler-desc">Umur 2-11</p>
                </Col>
                <Col md={2} className="p-1">
                  <button className="decrement-btn" onClick={ () => setCountAnak(countAnak - 1)} disabled={countAnak === 0}>-</button>
                </Col>
                <Col md={2}>
                  <p>{countAnak}</p>
                </Col>
                <Col md={2} className="p-1">
                  <button className="increment-btn fw-bold" onClick={ () => setCountAnak(countAnak + 1)} disabled={countDewasa+countAnak+countBaby >= 6}>+</button>
                </Col>
              </Row>
          </div>
                    <div class="dropdown-item-traveler bayi">
              <Row className="align-items-center">
                <Col md={6} className="p-0">
                  <p className="traveler-title">Bayi</p>
                  <p className="traveler-desc"> {'<'}2 tahun</p>
                </Col>
                <Col md={2} className="p-1">
                  <button className="decrement-btn" onClick={ () => setCountBaby(countBaby - 1)} disabled={countBaby === 0}>-</button>
                </Col>
                <Col md={2}>
                  <p>{countBaby}</p>
                </Col>
                <Col md={2} className="p-1">
                  <button className="increment-btn fw-bold" onClick={ () => setCountBaby(countBaby + 1)} disabled={countDewasa+countAnak+countBaby >= 6}>+</button>
                </Col>
              </Row>
          </div>
        </DropdownButton>
                
              </Form.Group>
            </Col>
            <Col md={2} className="form">
              <Button type="submit" className="search-flight">Cari Penerbangan</Button>{' '}
            </Col>
          </Row>
        </Container>
        </div>
    );
};

export default SearchFlight;
