import React, {useState} from "react";
import { Footer, HeaderBooking } from "../components";
import copy from "copy-to-clipboard";  
import "../assets/styles/paymentConfirmation.css";
import { Container, Row, Col, Badge, Accordion, Button, Form, Alert, OverlayTrigger,Popover } from "react-bootstrap";
import { Link } from "react-router-dom";

import bca_va from "../assets/images/bca.webp";
import logo from "../assets/images/binair-logo.svg";
import Countdown from 'react-countdown';

const PaymentConfirmation = () => {
    let [copyText, setCopyText] = useState('');
    let [copyRekening, setCopyRekening] = useState('');

    copyText = "189.000";
    copyRekening = "397360000004138264";

    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 

    const handleCopyRekening = (e) => {
        setCopyRekening(e.target.value);
    }

    const [showAlert, setShowAlert] = useState('');

    const copyToClipboard = () => {
        copy(copyText);
        //alert(`You have copied "${copyText}"`);
    };

    const copyToClipboardRekening = () => {
        copy(copyRekening);
    };
    const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">PENTING!</Popover.Header>
        <Popover.Body>
            Silahkan bayar di konter kasir sesuai dengan total harga sebelum waktu habis. 
            Sistem kami akan melakukan pengecekan dan memperbarui status pembayaran anda secara otomatis.
        </Popover.Body>
    </Popover>
    );
    return (
        <div>
        <HeaderBooking />
        <section className="payment-section">
            <div className="booking-countdown text-center">
                <p>Selesaikan booking anda dalam <Countdown className="countdown" daysInHours="true" date={Date.now() + 5400000} /></p>
            </div>
            <Container>
                {showAlert && (
                        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                            <p className="text-center">Berhasil disalin!</p>
                        </Alert>
                )}
                <Row> 
                    <Col md={8} className="left-payment-section">
                            <div className="payment-method">
                                <div className="payment-method-confirm">
                                    <Row>
                                        <Col md={12} sm={12} xs={12}>
                                            <p>Metode pembayaran yang dipilih Anda saat ini:</p>
                                            <h4>Virtual Account - BCA Virtual Account</h4>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="total-payment-confirm">
                                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <Row>
                                                    <Col md={4} sm={6} xs={6}>
                                                        <p>Total Harga</p>
                                                        <OverlayTrigger placement="right" overlay={popover} show="true">
                                                            <h3><span>Rp. {copyText} </span><Button className="btn-copy-price" variant="btn-link" 
                                                            onClick={() => {copyToClipboard(); setShowAlert(true);}} onChange={handleCopyText}><i className="ri-file-copy-line ri-lg"></i></Button></h3>
                                                        </OverlayTrigger>
                                                        
                                                    </Col>
                                                </Row>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Col md={9} sm={9} xs={9} >
                                                        <p>Harga</p>
                                                    </Col>
                                                    <Col md={3} sm={3} xs={3}>
                                                        <p className="d-flex flex-row-reverse">Rp. 849.000</p>
                                                    </Col>
                                                </Row>
                                                 <Row>
                                                    <Col md={9} sm={9} xs={9} >
                                                        <p>Biaya Proses</p>
                                                    </Col>
                                                    <Col md={3} sm={3} xs={3}>
                                                        <p className="d-flex flex-row-reverse">Rp 80.130</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={9} sm={9} xs={9} >
                                                        <p className="fw-bold">Jumlah</p>
                                                    </Col>
                                                    <Col md={3} sm={3} xs={3}>
                                                        <p className="d-flex flex-row-reverse fw-bold">Rp 1.682.716</p>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>                              
                                </div>
                        </div>
                        <div className="payment-instruction-section">
                            <Row className="payment-type">
                                <Col md={12} sm={12} xs={12}>
                                    <p>BCA Virtual Account</p>
                                    <img src={bca_va} alt="bca_va" />
                                </Col>
                            </Row>
                            <Row className="payment-codes">
                                <Col md={3} sm={3} xs={3}>
                                    <p>Bank</p>
                                    <p>Kode Pembayaran</p>
                                </Col>
                                <Col md={1} sm={1} xs={1}>
                                    <p>:</p>
                                    <p>:</p>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <p className="fw-bold">BCA Virtual Account</p>
                                    <p className="fw-bold"><span>{copyRekening}</span><Button className="btn-copy-price" variant="btn-link" 
                                        onClick={() => {copyToClipboardRekening(); setShowAlert(true);}} onChange={handleCopyRekening}><i className="ri-file-copy-line ri-lg"></i></Button></p>
                                </Col>  
                            </Row>
                            <Row className="line-divider">
                                <Col md={12} sm={12} xs={12}>
                                    <hr></hr>
                                </Col>
                            </Row>
                            <Row className="instruction">
                                <Col md={12} sm={12} xs={12}>
                                            <h4>Petunjuk Pembayaran:</h4>
                                            <ol className="instruction-list">
                                                <li>
                                                    <p>Klik bayar.</p>
                                                </li>
                                                <li>
                                                    <p>Salin kode pembayaran.</p>
                                                </li>
                                                <li>
                                                    <p>Buka aplikasi BCA Mobile</p>
                                                </li>
                                                <li>
                                                    <p>Masukkan ke akun rekening BCA anda.</p>
                                                </li>
                                                <li>
                                                    <p>Klik transfer dan pilih BCA Virtual Account.</p>
                                                </li>
                                                <li>
                                                    <p>Tempel kode pembayaran.</p>
                                                </li>
                                                <li>
                                                    <p>Silahkan periksa kembali nominalnya dan lakukan pembayaran.</p>
                                                </li>
                                                <li>
                                                    <p>Silahkan periksa kembali nominalnya dan lakukan pembayaran.</p>
                                                </li>
                                                <li>
                                                    <p>Simpan bukti pembayaran jika pembayaran berhasil.</p>
                                                </li>
                                            </ol>
                                        </Col>
                            </Row>
                        </div>
                        <p className="note-payment">Setelah selesai melakukan pembayaran, silakan klik tombol di bawah dan kami akan mengirim e-ticket ke email address anda.</p>
                        <div className="button-payment-section">
                            <Row className="align-items-center">
                                <Col md={7} sm={8} xs={12}>
                                    <Link to={`/payment`}>
                                        <Button
                                    value="paymentMethod" className="payment-method-btn" variant="link"><p><i className="ri-arrow-left-s-line ri-xl"></i><span>Pilih Metode Lain</span></p></Button>
                                    </Link> 
                                    
                                </Col>
                                <Col md={5} sm={4} xs={12} className="d-flex flex-row-reverse">
                                    <Button className="payment-btn">Cek Status Pembayaran</Button>
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