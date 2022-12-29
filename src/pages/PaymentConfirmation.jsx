import React, {useState} from "react";
import { Footer, HeaderBooking } from "../components"; 
import "../assets/styles/paymentConfirmation.css";
import { Container, Row, Col, Badge, Accordion, Button, Form} from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/images/binair-logo.svg";
import Countdown from 'react-countdown';

const PaymentConfirmation = () => {
    const [visible, setVisible] = useState('banktransfer');
    const [errorMsg, setErrorMsg] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedFile, setSelectedFile] = useState();

    const handleChange = (event) => {
        const getDocument = event.target.value;
        console.log(getDocument);
        setVisible(getDocument);
    };

    const handleImage = (e) => {
        if(e.target.files.length > 0){
            console.log(e.target.files);
            setSelectedFile(URL.createObjectURL(e.target.files[0]));
        }
    }

    const handleform = (e) => {
        if (!selectedFile) {
            setErrorMsg("Please choose a file");
            setIsSuccess(false)
        }
        
        setErrorMsg("")
        setIsSuccess(true) 
    }

    return (
        <div>
        <HeaderBooking />
        <section className="payment-section">
            <div className="booking-countdown text-center">
                <p>Konfirmasi pembayaran anda dalam <Countdown className="countdown" daysInHours="true" date={Date.now() + 5400000} /></p>
            </div>
            <Container>
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
                                        <h4>Pilih Metode Pembayaran <span className="required"> *</span></h4>
                                        </Form.Label>
                                        <br />
                                        <select
                                        name="payment-method"
                                        className="dropdown-toggle"
                                        onChange={(e)=>(handleChange(e))}
                                        required
                                        >
                                        <option value="banktransfer">Bank Transfer</option>
                                        <option value="e-wallet">E-Wallet</option>
                                        </select>
                                    </Form.Group>
                                    </Col>
                                    {visible ==='banktransfer' && (
                                        <Col md={8}>
                                            <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                                <Form.Label>
                                                    <h4>Pilih Bank <span className="required"> *</span></h4>
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

                                       {visible==='e-wallet' && (
                                                <Col md={8}>
                                                    <Form.Group className="mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0">
                                                    <Form.Label>
                                                        <h4>Pilih E-Wallet <span className="required"> *</span></h4>
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
                                        <h3>Upload bukti pembayaran <span className="required"> *</span></h3>
                                        <input type="file" name="file" onChange={handleImage} onClick={handleform} className="file-upload" 
                                            accept="image/png, image/gif, image/jpeg" required/>
                                        <img src={selectedFile} className="confirm-image"/>
                                    </Col>
                                    <p className="error-message">{errorMsg}</p>
                                </Row>
                                </div>
                        </div>
                        <p className="note-payment">Setelah selesai mengupload bukti bayar, silakan klik tombol di bawah untuk konfirmasi pembayaran.</p>
                        <div className="button-payment-section">
                            <Row className="align-items-center">
                                <Col md={7} sm={8} xs={12}>
                                    <Link to={`/payment`}>
                                        <Button
                                    value="paymentMethod" className="payment-method-btn" variant="link"><p><i className="ri-arrow-left-s-line ri-xl"></i><span>Pilih Metode Lain</span></p></Button>
                                    </Link> 
                                    
                                </Col>
                                <Col md={5} sm={4} xs={12} className="d-flex flex-row-reverse">
                                {
                                    isSuccess
                                    ? 
                                        <Link to={`/payment`}>
                                            <Button className="payment-btn" onClick={handleform}>Konfirmasi Pembayaran</Button>
                                        </Link> 
                                    : 
                                        <Button className="payment-btn disabled" onClick={handleform}>Konfirmasi Pembayaran</Button>
                                }
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={4} className="right-payment-section">
                        {/* start payment status section */}
                        <div className="payment-status">
                            <Row>
                                <Col md={6} sm={6} xs={6}>
                                    <h3>Kode BinAir</h3>
                                </Col>
                                <Col md={6} sm={6} xs={6} className="d-flex flex-row-reverse">
                                    <p>1017905594</p>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col md={3} sm={6} xs={12}>
                                    <h3>Status Pemesanan</h3>
                                </Col>
                                <Col md={9} sm={6} xs={12} className="d-flex flex-row-reverse">
                                    <Badge pill className="badge-payment">
                                        Pembayaran Dalam Proses
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
                                            <p>Rabu, 23 November 2022</p>
                                        </Col>
                                        <Col md={4} sm={4} xs={4} className="d-flex flex-row-reverse">
                                            <Badge className="baggage-badge"> Gratis 20kg bagasi </Badge>
                                        </Col>
                                    </Row>
                                    <Row className="flight-type align-items-center">
                                        <Col md={8} sm={8} xs={8}>
                                            <h3>BinAir</h3>
                                            <p>QZ7518</p>
                                        </Col>
                                        <Col md={4} sm={4} xs={4} className="d-flex flex-row-reverse">
                                            <img src={logo} alt="logo" className="logo-flight"/>
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    {/* timeline pesawat*/}
                                    <div className="flight-timeline">
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
                        {/* end flight detail section*/}

                        {/* start price section */}
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
                                <Row>
                                    <Col md={9} sm={9} xs={9}>
                                        <ol>
                                            <li>Mrs. Noviyana</li>
                                        </ol>
                                    </Col>
                                    <Col md={3} sm={3} xs={3} className="d-flex flex-row-reverse">
                                        <p>Dewasa</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        {/* end traveler section */}

                        {/* start contact section */}
                        <div className="contact-section">
                            <div className="contact-header">
                                <h3>Keterangan Kontak</h3>
                            </div>
                            <div className="contact-content">
                                <h4 className="contact-name">Mrs. Noviyana Ling</h4>
                                <p>lingnoviyana123@gmail.com</p>
                                <p>+62 82176319252</p>
                            </div>
                        </div>
                        {/* end contact section */}
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />
        </div>
    );
}

export default PaymentConfirmation;