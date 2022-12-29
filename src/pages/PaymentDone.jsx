import React, {useState} from "react";
import { Footer, HeaderBookingDone } from "../components";
import { Container, Table, Row, Col, Form, Badge, Accordion, Button} from "react-bootstrap";
import "../assets/styles/paymentDone.css";
import logo from "../assets/images/binair-logo.svg";
import paymentSuccess from "../assets/images/payment-success-logo.svg";
import airasia from "../assets/images/airasia.svg";
import PhoneInput from "react-phone-number-input";
import DatePicker from 'react-date-picker';
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

const PaymentDone = () => {
    return (
        <div>
            <HeaderBookingDone />
            <section className="e-ticket-section">
                <Container fluid className="me-5 mb-5 p-5 ms-0 ">
                    <Container className="content mb-5 mt-5 p-5">
                        <div className="d-flex flex-column align-items-center mb-5">
                            <img src={paymentSuccess} alt="" />
                            <h1 className="is-bold">Pembayaran Selesai</h1>
                        </div>
                        
                        <hr className="head-line" />
                        <br />
                        <div className="d-flex justify-content-between m-5">
                            <div className="e-ticket-logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <h2 className="is-bold">E-Ticket</h2>
                                <p className="is-bold">Penerbangan Keberangkatan</p>
                                <p className="is-bold">Kode Booking: WHXBY</p>
                            </div>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between align-items-center m-5">
                            <div className="flight-logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="me-3">
                                <p className="is-bold">23 November 2022</p>
                                <p className="is-grey">22:15 - Jakarta ( CGK )</p>
                                <p className="is-grey">Bandara Internasional Soekarno Hatta</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center m-5">
                            <div>
                                <p className="is-bold">Indonesia AirAsia (QZ7518)</p>
                            </div>
                            <div className="me-5">
                                <p className="is-bold">24 November 2022</p>
                                <p className="is-grey">01:05 - Bali Denpasar ( DPS )</p>
                                <p className="is-grey">Bandara Internasional Ngurah Rai</p>
                            </div>
                        </div>
                        <Table striped bordered hover className="mt-5 mb-5">
                            <thead>
                                <tr>
                                <th>No</th>
                                <th>Nama Penumpang</th>
                                <th>Tipe Penumpang</th>
                                <th>Fasilitas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Muhammad Damas</td>
                                    <td>Dewasa</td>
                                    <td>Bagasi 20 Kg</td>
                                </tr>
                            </tbody>
                            </Table>

                    </Container>
                </Container>
            </section>
            {/* <section className="booking-section">
                <Container>
                    <Row>
                        <Col md={8} className="left-section">
                            <div className="contact-info-session">
                                <div className="info-header">
                                    <h3 className="card-title">Informasi Kontak</h3>
                                </div>
                                <div className="info-content">
                                    <Row>
                                    <Col md={8} className="left-col-section">
                                        <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                        <Form.Label>
                                        <h4>Pilih Kontak</h4>
                                        </Form.Label>
                                        <br />
                                        <select
                                        name="contact"
                                        className="dropdown-toggle"
                                        >
                                        <option value="noviyana">Mrs. Noviyana</option>
                                        </select>
                                    </Form.Group>
                                    </Col>
                                    <Col md={8} className="left-col-section">
                                        <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                        <Form.Label>
                                        <h4>Gelar <span className="required">*</span></h4>
                                        </Form.Label>
                                        <br />
                                        <select
                                        name="title"
                                        className="dropdown-toggle"
                                        >
                                        <option value="tuan">Tuan</option>
                                        <option value="nyonya">Nyonya</option>
                                        <option value="nona">Nona</option>
                                        </select>
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} className="left-col-section">
                                        <Form.Group className="mb-4">
                                        <Form.Label>
                                        <h4>Nama<span className="required"> *</span></h4>
                                        </Form.Label>
                                        <Form.Control
                                        autoComplete="off"
                                        required
                                        name="name"
                                        className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                        placeholder="ex: Rangga Laksana"
                                        />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-4">
                                        <Form.Label>
                                        <h4>Nama Belakang<span className="required"> *</span></h4>
                                        </Form.Label>
                                        <Form.Control
                                        autoComplete="off"
                                        required
                                        name="lastname"
                                        className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                        placeholder="ex: Haryanto"
                                        />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} className="left-col-section">
                                        <Form.Group className="mb-4">
                                        <Form.Label>
                                        <h4>Nomor Ponsel<span className="required"> *</span></h4>
                                        </Form.Label>
                                        <PhoneInput
                                        international
                                        defaultCountry="ID"
                                        countryCallingCodeEditable={false}
                                        value={phone}
                                        onChange={setPhone}
                                        className="form-input-phone"
                                        />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className=" mb-4">
                                        <Form.Label>
                                        <h4>Email<span className="required"> *</span></h4>
                                        </Form.Label>
                                        <Form.Control
                                        autoComplete="off"
                                        required
                                        name="email"
                                        className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                        placeholder="ex: yourmail@binair.com"
                                        />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                </div>
                                
                            </div>
                            <div className="traveler-info-section">
                                <div className="info-header">
                                    <h3 className="card-title">Informasi Traveler</h3>
                                </div>
                                <div className="info-content">
                                <Container>
                                    <Row className="traveler-type">
                                        <Col md={2} sm={3} xs={4}> <h3 className="card-title"><i className="ri-user-line icon"></i><span>Traveler 1</span></h3></Col>
                                        <Col md={1} sm={1} xs={1} className="text-center"> <p> | </p> </Col>
                                        <Col md={2} sm={3} xs={7}> <p>Dewasa</p> </Col>
                                        <Col md={7} sm={5} xs={12} className="d-flex flex-row-reverse checklist-box">
                                            <Form.Group className="" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Sama dengan Kontak" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="traveler-info">
                                        <p className="info">Nama sesuai KTP/paspor tanpa gelar dan tanda baca</p>
                                        <Col md={8}>
                                            <Form.Group className=" mb-4 mt-2 border border-top-0 border-start-0 border-end-0">
                                                <Form.Label>
                                                <h4>Pilih Data Traveler</h4>
                                                </Form.Label>
                                                <br />
                                                <select
                                                name="traveler"
                                                className="dropdown-toggle "
                                                >
                                                <option value="tuan">Mrs. Noviyana</option>
                                                </select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={8}>
                                            <Form.Group className=" mb-4 border border-top-0 border-start-0 border-end-0">
                                                <Form.Label>
                                                <h4>Gelar<span className="required"> *</span></h4>
                                                </Form.Label>
                                                <br />
                                                <select
                                                name="kontak"
                                                className="dropdown-toggle "
                                                >
                                                <option value="tuan">Tuan</option>
                                                <option value="nyonya">Nyonya</option>
                                                <option value="nona">Nona</option>
                                                </select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="traveler-row">
                                        <Col md={4}>
                                            <Form.Group className=" mb-4">
                                            <Form.Label>
                                            <h4>Nama<span className="required"> *</span></h4>
                                            </Form.Label>
                                            <Form.Control
                                            autoComplete="off"
                                            required
                                            name="name"
                                            className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                            placeholder="ex: Rangga Laksana"
                                            />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className=" mb-4">
                                            <Form.Label>
                                            <h4>Nama Belakang<span className="required"> *</span></h4>
                                            </Form.Label>
                                            <Form.Control
                                            autoComplete="off"
                                            required
                                            name="lastname"
                                            className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                            placeholder="ex: Miller"
                                            />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="traveler-row">
                                        <Col md={8}>
                                            <Form.Group className=" mb-4 border border-top-0 border-start-0 border-end-0 rounded-0">
                                            <Form.Label>
                                            <h4>Tanggal Lahir<span className="required"> *</span></h4>
                                            </Form.Label>
                                            <br></br>
                                            <DatePicker onChange={onChange} value={value} clearIcon={null}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="traveler-row">
                                        <Col md={8}>
                                            <Form.Group className="mb-2 border border-top-0 border-start-0 border-end-0">
                                                <Form.Label>
                                                <h4>Tipe Dokumen<span className="required"> *</span></h4>
                                                </Form.Label>
                                                <br />
                                                <select
                                                name="document-type"
                                                className="dropdown-toggle"
                                                onChange={(e)=>(handleChange(e))}
                                                >
                                                <option value="ktp">Kartu Tanda Penduduk</option>
                                                <option value="paspor">Paspor</option>
                                                </select>
                                            </Form.Group>
                                            <p className="note-document-type">Jika Anda warga negara asing, silahkan pilih paspor.</p>
                                        </Col>
                                        {visible ==='ktp' && (
                                                <Col md={8}>
                                                    <Form.Group className="mt-3 mb-3">
                                                    <Form.Label>
                                                    <h4>Nomor KTP<span className="required"> *</span></h4>
                                                    </Form.Label>
                                                    <Form.Control
                                                    autoComplete="off"
                                                    required
                                                    name="name"
                                                    className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                                    placeholder="ex: 17459274810102"
                                                    />
                                                    </Form.Group>
                                                </Col>
                                        )}

                                       {visible==='paspor' && (
                                            <Row className="paspor-row">
                                                <Col md={3}>
                                                    <Form.Group className="mt-3 mb-3">
                                                    <Form.Label>
                                                    <h4>Nomor Paspor<span className="required"> *</span></h4>
                                                    </Form.Label>
                                                    <Form.Control
                                                    autoComplete="off"
                                                    required
                                                    name="paspor-number"
                                                    className="form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0"
                                                    placeholder="ex: X1520212"
                                                    />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Group className="mt-3 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                                    <Form.Label>
                                                    <h4>Negara Penerbit<span className="required"> *</span></h4>
                                                    </Form.Label>
                                                    <ReactFlagsSelect
                                                        selected={nation}
                                                        onSelect={(code) => setNation(code)}
                                                        placeholder="Pilih Negara"
                                                    />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={3}>
                                                    <Form.Group className="mt-3 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                                    <Form.Label>
                                                    <h4>Berlaku Hingga<span className="required"> *</span></h4>
                                                    </Form.Label>
                                                    <br></br>
                                                    <DatePicker onChange={onChange} value={value} clearIcon={null}/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            
                                        )}
                                        
                                    </Row>
                                </Container>
                                </div>

                            </div>
                            <div className="adding-section">
                                <div className="info-header">
                                    <h3 className="card-title">Tambahan</h3>
                                </div>
                                <Row className="rute-detail">
                                    <Col md={10} sm={10} xs={10} >
                                        <p>Jakarta (HLP) - Surabaya (SUB) </p>
                                    </Col>
                                    <Col md={2} sm={2} xs={2} className="d-flex flex-row-reverse">
                                        <p>ID7511</p>
                                    </Col>
                                </Row>
                                <Row className="baggage-weight-row">
                                    <Col md={8}>

                                            <Form.Group className="border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                                <Form.Label>
                                                <h4>Dewasa 1</h4>
                                                </Form.Label>
                                                <br />
                                                <select
                                                name="kontak"
                                                className="dropdown-toggle baggage-weight-dropdown"
                                                >
                                                <option value="20kg">20kg - Gratis</option>
                                                <option value="25kg">5+20kg - Rp292.500</option>
                                                <option value="30kg">10+20kg - Rp585.000</option>
                                                <option value="40kg">20+20kg - Rp1.170.000</option>
                                                <option value="50kg">30+20kg - Rp1.755.000</option>
                                                <option value="60kg">40+20kg - Rp2.340.000</option>
                                                </select>
                                            </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={4} className="right-section">
                            <div className="flight-detail-sections">
                                <div className="info-header">
                                    <h3 className="card-title">Rincian Penerbangan</h3>
                                </div>
                                <div className="info-content">
                                        <Row className="departure-flight align-items-center">
                                        <Col md={8} sm={8} xs={8}>
                                            <h3>Penerbangan Keberangkatan</h3>
                                            <p>Rabu, 23 November 2022</p>
                                        </Col>
                                        <Col md={4} sm={4} xs={4} className="d-flex flex-row-reverse">
                                            <Badge> Gratis 20kg bagasi </Badge>
                                        </Col>
                                    </Row>
                                    <Row className="flight-type align-items-center">
                                        <Col md={8} sm={8} xs={8}>
                                            <h3>BinAir</h3>
                                            <p>QZ7518</p>
                                        </Col>
                                        <Col md={4}sm={4} xs={4} className="d-flex flex-row-reverse">
                                            <img src={logo} alt="logo" className="logo-flight"/>
                                        </Col>
                                    </Row>
                                    <hr></hr> */}
                                    {/* timeline pesawat*/}
                                    {/* <div className="flight-timeline">
                                        <div className="departure-timeline bullet timeline-object not-complete">
                                            <div className="timeline-status"> </div>
                                            <Row className="timeline-content">
                                                <Col md={5} sm={5} xs={5}>
                                                    <h3>22:15</h3>
                                                    <p>23 November 2022</p>
                                                </Col>
                                                <Col md={7} sm={7} xs={7}>
                                                    <h3>Jakarta (CGK) </h3>
                                                    <p>Bandara Internasional Soekarno Hatta</p>
                                                    <p>Terminal 1A</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="duration">
                                            <p><span><i className="ri-time-line"></i></span> 1h 50m</p>
                                        </div>
                                        <div className="homecoming-timeline bullet timeline-object complete">
                                            <div className="timeline-status"> </div>
                                            <Row className="timeline-content">
                                                <Col md={5} sm={5} xs={5}>
                                                    <h3>01:05</h3>
                                                    <p>24 November 2022</p>
                                                </Col>
                                                <Col md={7} sm={7} xs={7}>
                                                    <h3>Bali Denpasar (DPS) </h3>
                                                    <p>Bandara Internasional Ngurah Rai</p>
                                                    <p>Terminal Domestic</p>
                                                </Col>
                                            </Row>
                                        </div> 
                                    </div>
                                    <hr></hr>
                                    <div className="flight-facility">
                                        <ul>
                                            <li><p className="information"><i className="ri-information-line icon"></i><span> Bisa Refund</span></p></li>
                                            <li><p className="information"><i className="ri-information-line icon"></i><span> Perubahan Jadwal</span></p></li>
                                            <li><p className="information"><i className="ri-information-line icon"></i><span> Perkiraan Penerbitan Tiket</span></p></li>
                                            <li><p><i className="ri-checkbox-circle-line icon"></i><span> Bagasi Kabin 7kg</span></p></li>
                                            <li><p><i className="ri-suitcase-3-line icon"></i><span> Bagasi 20kg</span></p></li>
                                            <li><p><i className="ri-gamepad-line icon"></i><span> Hiburan</span></p></li>
                                        </ul>
                                    </div>
                                </div>

                                    
                            </div>

                            <div className="price-section">
                                <div className="price-header">
                                    <h2 className="card-title">Keterangan Harga</h2>
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
                            <Link to={`/payment`}>
                                <Button className="continue-btn">Lanjutkan</Button>
                            </Link>
                            
                        </Col>
                    </Row>
                </Container>
            </section>*/}
            <Footer /> 
        </div>
    );
}

export default PaymentDone;