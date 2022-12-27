import React, {useState} from "react";
import { Footer, HeaderBooking } from "../components";
import "../assets/styles/paymentBooking.css";
import { Container, Row, Col, Badge, Accordion, Button, Form } from "react-bootstrap";
import bca_va from "../assets/images/bca.webp";
import mandiri from "../assets/images/mandiri.webp";
import bni from "../assets/images/BNI.webp";
import cimb from "../assets/images/CIMB.webp";
import permata from "../assets/images/Permata.webp";
import qris from "../assets/images/qris.webp";
import credit_card from "../assets/images/credit-card.webp";
import klikbca from "../assets/images/klikbca.webp";
import bcaklikpay from "../assets/images/bcaklikpay.webp";
import atome from "../assets/images/atome.webp";
import tmrw from "../assets/images/tmrw.webp";
import logo from "../assets/images/binair-logo.svg";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";

const PaymentBooking = () => {
    const [payment, setPayment] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(true);
    const [bank, setBank] = useState('');

    const handleChange = (event) => {
        setBank(event.target.value);
    };

    const handleClick = (event) => {
        console.log(event);
        setBank(event);
    };
    return (
        <div>
        <HeaderBooking />
        <section className="payment-section">
            <div className="booking-countdown text-center">
                <p>Selesaikan booking anda dalam <Countdown className="countdown" daysInHours="true" date={Date.now() + 86400000} /></p>
            </div>
            <Container>
                <Row> 
                    <Col md={8} className="left-payment-section">
                        {paymentMethod && (
                        <div className="payment-method">
                            <div className="payment-method-header">
                                <h3>Metode Pembayaran</h3>
                            </div>
                            <div className="payment-method-body">
                                <Row className="payment-method-item virtual-account">
                                    <p>Virtual Account</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <div>
                                                <Button className="btn-payment" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false);}}
                                                value="BCA">
                                                <img src={bca_va} alt="BCA" />
                                                </Button>
                                            </div>
                                            
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Mandiri" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }
                                                >
                                                <img src={mandiri} alt="Mandiri" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="BNI" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }>
                                                <img src={bni} alt="BNI" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="CIMB" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }>
                                                <img src={cimb} alt="CIMB" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Permata" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }>
                                                <img src={permata} alt="Permata" />
                                            </Button>
                                        </Col>
                                </Row>
                                <Row className="payment-method-item instant-payment">
                                    <p>Pembayaran Instan</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="QRIS" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }>
                                                <img src={qris} alt="qris" />
                                            </Button>
                                        </Col>
                                </Row>
                                <Row className="payment-method-item credit-card">
                                    <p>Kartu Kredit</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment">
                                                <img src={credit_card} alt="credit card" />
                                            </Button>
                                        </Col>
                                </Row>
                                <Row className="payment-method-item debit-card">
                                    <p>Kartu Debit</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment">
                                                <img src={credit_card} alt="credit card" />
                                            </Button>
                                        </Col>
                                </Row>
                                <Row className="payment-method-item internet-banking">
                                    <p>Internet Banking</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment">
                                                <img src={klikbca} alt="Klik BCA" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment">
                                                <img src={bcaklikpay} alt="BCA Klik Pay" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={3} xs={3}>
                                            <Button className="btn-payment">
                                                <img src={cimb} alt="CIMB Niaga" />
                                            </Button>
                                        </Col>
                                </Row>
                                <Row className="payment-method-item pay-later">
                                    <p>Pay Later</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Atome" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }>
                                                <img src={atome} alt="Atome" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="TMRW" onClick={e => { handleClick(e.currentTarget.value); setPayment(true); setPaymentMethod(false)} }>
                                                <img src={tmrw} alt="TMRW" />
                                            </Button>
                                        </Col>
                                </Row>
                            </div>
                        </div>
                    )}

                    {payment && (
                        <div>
                            <div className="payment-method">
                            <div className="payment-method-header">
                                <h3>Virtual Account</h3>
                            </div>
                            <div className="payment-method-body">
                                <div className="virtual-account-type">
                                    <Row>
                                        <Col md={12} sm={12} xs={12}>
                                            <img src={`/src/assets/images/${bank}.webp`} alt={bank} />
                                            <p>{bank} Virtual Account</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="total-payment">
                                    <Row>
                                        <Col md={9} sm={9} xs={7}>
                                            <p>Harga</p>
                                            <p>Biaya Proses</p>
                                        </Col>
                                        <Col md={3} sm={3} xs={5}>
                                            <p className="d-flex flex-row-reverse">Rp 1.000.000</p>
                                            <p className="d-flex flex-row-reverse">Rp 0</p>
                                        </Col>
                                    </Row>
                                    <Row className="line-divider">
                                        <Col md={12} sm={12} xs={12}>
                                            <hr></hr>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={9} sm={9} xs={7}>
                                            <p className="total">Total Harga</p>
                                        </Col>
                                        <Col md={3} sm={3} xs={5}>
                                            <h3 className="d-flex flex-row-reverse">Rp 1.000.000</h3>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="payment-instruction">
                                    <Row>
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
                                                    <p>Buka aplikasi {bank} Mobile</p>
                                                </li>
                                                <li>
                                                    <p>Masukkan ke akun rekening {bank} anda.</p>
                                                </li>
                                                <li>
                                                    <p>Klik transfer dan pilih {bank} Virtual Account.</p>
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
                                <div className="agreement-payment">
                                    <Row>
                                        <Col md={12} sm={12} xs={12}>
                                            <p>Dengan mengklik tombol tersebut, Anda telah setuju untuk &nbsp;<span><Link to={`/terms/condition`}><a href="#"> Syarat & Kondisi </a></Link></span>&nbsp; dari BinAir</p>
                                        </Col> 
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="button-payment-section">
                            <Row className="align-items-center">
                                <Col md={10} sm={8} xs={7}>
                                    <Button onClick={() => { setPayment(false); setPaymentMethod(true);}}
                                    value="paymentMethod" className="payment-method-btn" variant="link"><p><i className="ri-arrow-left-s-line ri-xl"></i><span>Pilih Metode Lain</span></p></Button>
                                </Col>
                                <Col md={2} sm={4} xs={5} className="d-flex flex-row-reverse">
                                    <Link to={`/payment/confirmation`}>
                                        <Button className="payment-btn">Bayar</Button>
                                    </Link>
                                    
                                </Col>
                            </Row>
                        </div>
                        </div>
                    )}

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
                                <Col md={6} sm={6} xs={6}>
                                    <h3>Status Pemesanan</h3>
                                </Col>
                                <Col md={6} sm={6} xs={6} className="d-flex flex-row-reverse">
                                    <Badge pill className="badge-payment">
                                        Perlu Dibayar
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

                        {/* start voucher section */}
                        <div className="voucher-section">
                            <div className="voucher-header">
                                <h3>Voucher/Kode Promo</h3>
                            </div>
                            <div className="voucher-content">
                                <Row>
                                    <Col md={8} sm={8}xs={8}>
                                        <Form.Group className="mb-4">
                                        <Form.Control
                                        autoComplete="off"
                                        required
                                        name="name"
                                        className="form-input"
                                        placeholder="Masukkan Kode Disini"
                                        />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4} sm={4} xs={4}>
                                        <Button className="verification-btn">Verifikasi</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        {/* end voucher section */}

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

export default PaymentBooking;