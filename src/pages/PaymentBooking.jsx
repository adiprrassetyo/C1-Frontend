import React, {useState} from "react";
import { Footer, HeaderBooking } from "../components";
import "../assets/styles/paymentBooking.css";
import { Container, Row, Col, Badge, Accordion, Button, Form, Alert, OverlayTrigger,Popover  } from "react-bootstrap";
import bca_va from "../assets/images/bca.webp";
import mandiri from "../assets/images/mandiri.webp";
import bni from "../assets/images/BNI.webp";
import cimb from "../assets/images/CIMB.webp";
import permata from "../assets/images/Permata.webp";
import gopay from "../assets/images/Gopay.png";
import ovo from "../assets/images/Ovo.png";
import dana from "../assets/images/Dana.png";
import linkaja from "../assets/images/LinkAja.png";
import shopeepay from "../assets/images/ShopeePay.png";
import qrcode from "../assets/images/QrCode.png";

import logo from "../assets/images/binair-logo.svg";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";
import copy from "copy-to-clipboard";  

const PaymentBooking = () => {
    const [bank, setBank] = useState(false);
    const [ewallet, setEwallet] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(true);
    const [payment, setPayment] = useState('');

    const handleClick = (event) => {
        setPayment(event);
    };

    let [copyText, setCopyText] = useState('');
    let [copyRekening, setCopyRekening] = useState('');

    copyText = "189.000";
    copyRekening = "8217631623";

    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 

    const handleCopyRekening = (e) => {
        setCopyRekening(e.target.value);
    }

    const [showAlert, setShowAlert] = useState('');

    const copyToClipboard = () => {
        copy(copyText);
    };

    const copyToClipboardRekening = () => {
        copy(copyRekening);
    };
    
    const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">PENTING!</Popover.Header>
        <Popover.Body>
            Silahkan bayar tiket sesuai dengan total harga sebelum waktu habis. 
            Pastikan juga untuk menyimpan bukti transfer dan konfirmasi pembayaran.
        </Popover.Body>
    </Popover>
    );

    return (
        <div>
        <HeaderBooking />
        <section className="payment-section">
            <div className="booking-countdown text-center">
                <p>Selesaikan booking anda dalam <Countdown className="countdown" daysInHours="true" date={Date.now() + 86400000} /></p>
            </div>
            <Container>
                {showAlert && (
                        <Alert className="alert-payment" variant="success" onClose={() => setShowAlert(false)} dismissible>
                            <p className="text-center">Berhasil disalin!</p>
                        </Alert>
                )}
                <Row> 
                    <Col md={8} className="left-payment-section">
                        {paymentMethod && (
                        <div className="payment-method">
                            <div className="payment-method-header">
                                <h3>Metode Pembayaran</h3>
                            </div>
                            <div className="payment-method-body">
                                <Row className="payment-method-item virtual-account">
                                    <p>Bank Transfer</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <div>
                                                <Button className="btn-payment" onClick={e => { handleClick(e.currentTarget.value); setBank(true); setPaymentMethod(false);}}
                                                value="BCA">
                                                <img src={bca_va} alt="BCA" />
                                                </Button>
                                            </div>
                                            
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Mandiri" onClick={e => { handleClick(e.currentTarget.value); setBank(true); setPaymentMethod(false)} }
                                                >
                                                <img src={mandiri} alt="Mandiri" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="BNI" onClick={e => { handleClick(e.currentTarget.value); setBank(true); setPaymentMethod(false)} }>
                                                <img src={bni} alt="BNI" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="CIMB" onClick={e => { handleClick(e.currentTarget.value); setBank(true); setPaymentMethod(false)} }>
                                                <img src={cimb} alt="CIMB" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Permata" onClick={e => { handleClick(e.currentTarget.value); setBank(true); setPaymentMethod(false)} }>
                                                <img src={permata} alt="Permata" />
                                            </Button>
                                        </Col>
                                </Row>
                                <Row className="payment-method-item instant-payment">
                                    <p>E-Wallet</p>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Gopay" onClick={e => { handleClick(e.currentTarget.value); setEwallet(true); setPaymentMethod(false)} }>
                                                <img src={gopay} alt="Gopay" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Ovo" onClick={e => { handleClick(e.currentTarget.value); setEwallet(true); setPaymentMethod(false)} }>
                                                <img src={ovo} alt="Ovo" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="Dana" onClick={e => { handleClick(e.currentTarget.value); setEwallet(true); setPaymentMethod(false)} }>
                                                <img src={dana} alt="Dana" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="LinkAja" onClick={e => { handleClick(e.currentTarget.value); setEwallet(true); setPaymentMethod(false)} }>
                                                <img src={linkaja} alt="Link Aja" />
                                            </Button>
                                        </Col>
                                        <Col md={3} sm={4} xs={4}>
                                            <Button className="btn-payment" value="ShopeePay" onClick={e => { handleClick(e.currentTarget.value); setEwallet(true); setPaymentMethod(false)} }>
                                                <img src={shopeepay} alt="Shopee Pay" />
                                            </Button>
                                        </Col>
                                </Row>
                            </div>
                        </div>
                    )}

                    {bank && (
                        <div>
                            <div className="payment-method">
                                <div className="payment-method-confirm">
                                    <Row>
                                        <Col md={12} sm={12} xs={12}>
                                            <p>Metode pembayaran yang dipilih Anda saat ini:</p>
                                            <h4>Bank Transfer - {payment}</h4>
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
                                    <p>{payment} Bank Transfer</p>
                                    <img src={`/src/assets/images/${payment}.webp`} alt={payment} />
                                </Col>
                            </Row>
                            <Row className="payment-codes">
                                <Col md={3} sm={3} xs={3}>
                                    <p>Bank</p>
                                    <p>Nomor Rekening</p>
                                </Col>
                                <Col md={1} sm={1} xs={1}>
                                    <p>:</p>
                                    <p>:</p>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <p className="fw-bold">{payment}</p>
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
                                                    <p>Salin nomor rekening yang ada</p>
                                                </li>
                                                <li>
                                                    <p>Buka aplikasi {payment} Mobile/Internet Banking</p>
                                                </li>
                                                <li>
                                                    <p>Pilih menu transfer</p>
                                                </li>
                                                <li>
                                                    <p>Pilih Bank {payment} dan masukkan kode bank terkait</p>
                                                </li>
                                                <li>
                                                    <p>Tempel nomor rekening</p>
                                                </li>
                                                <li>
                                                    <p>Periksa informasi yang tertera di layar. Pastikan nama rekening tujuan 
                                                        adalah BinAir</p>
                                                </li>
                                                <li>
                                                    <p>Masukkan nominal transfer sesuai total pembayaran yang tertera diatas</p>
                                                </li>
                                                <li>
                                                    <p>Simpan bukti pembayaran jika pembayaran berhasil</p>
                                                </li>
                                                <li>
                                                    <p>Klik tombol bayar dibawah</p>
                                                </li>
                                                <li>
                                                    <p>Konfirmasi pembayaran dan upload bukti bayar ke website BinAir</p>
                                                </li>
                                            </ol>
                                        </Col>
                            </Row>
                        </div>
                        <div className="button-payment-section">
                            <Row className="align-items-center">
                                <Col md={7} sm={8} xs={7}>
                                    <Button onClick={() => { setBank(false); setPaymentMethod(true);}}
                                    value="paymentMethod" className="payment-method-btn" variant="link"><p><i className="ri-arrow-left-s-line ri-xl"></i><span>Pilih Metode Lain</span></p></Button>
                                </Col>
                                <Col md={5} sm={4} xs={5} className="d-flex flex-row-reverse">
                                    <Link to={`/payment/confirmation`}>
                                        <Button className="payment-btn">Bayar</Button>
                                    </Link>
                                    
                                </Col>
                            </Row>
                        </div>
                        </div>
                    )}

                    {ewallet && (
                        <div>
                            <div className="payment-method">
                                <div className="payment-method-confirm">
                                    <Row>
                                        <Col md={12} sm={12} xs={12}>
                                            <p>Metode pembayaran yang dipilih Anda saat ini:</p>
                                            <h4>E-Wallet - {payment}</h4>
                                            <img src={`/src/assets/images/${payment}.png`} alt={payment} />
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
                                    <p>Kode QR:</p>
                                    <img src={qrcode} alt="QR Code" className="qr-code-img"/>
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
                                                    <p>Buka aplikasi E-Wallet {payment} di Smartphone anda</p>
                                                </li>
                                                <li>
                                                    <p>Pilih menu untuk transfer/pembayaran</p>
                                                </li>
                                                <li>
                                                    <p>Scan kode QR yang ada di atas</p>
                                                </li>
                                                <li>
                                                    <p>Pastikan nominal transfer sesuai dengan total pembayaran</p>
                                                </li>
                                                <li>
                                                    <p>Simpan bukti pembayaran jika pembayaran berhasil</p>
                                                </li>
                                                <li>
                                                    <p>Konfirmasi pembayaran dan upload bukti bayar ke website BinAir</p>
                                                </li>
                                            </ol>
                                        </Col>
                            </Row>
                        </div>
                        <div className="button-payment-section">
                            <Row className="align-items-center">
                                <Col md={7} sm={8} xs={7}>
                                    <Button onClick={() => { setEwallet(false); setPaymentMethod(true);}}
                                    value="paymentMethod" className="payment-method-btn" variant="link"><p><i className="ri-arrow-left-s-line ri-xl"></i><span>Pilih Metode Lain</span></p></Button>
                                </Col>
                                <Col md={5} sm={4} xs={5} className="d-flex flex-row-reverse">
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