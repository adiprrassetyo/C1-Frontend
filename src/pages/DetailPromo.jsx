import React, {useState} from "react";
import { Header, Footer} from "../components";
import copy from "copy-to-clipboard";  
import { Container, Row, Col, Form, InputGroup, Button, Alert, Toast, ToastHeader } from "react-bootstrap";
import SearchFlight from "../components/Homepage/SearchFlight";
import promo_banner from "../assets/images/promo-banner.webp";
import payment_img from "../assets/images/payment-img.webp"
import "../assets/styles/detailPromo.css";

const DetailPromo = () => {
    let [copyText, setCopyText] = useState('');

    copyText = "TRDANAMON80";
  
    const handleCopyText = (e) => {
       setCopyText(e.target.value);
    } 

    const copyToClipboard = () => {
       copy(copyText);
       
       //alert(`You have copied "${copyText}"`);
    }

    const [showAlert, setShowAlert] = useState('');

    /*
    if(showAlert){
        return(
            <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Oh you success!</Alert.Heading>
                <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        )
    }
    */

    return(
        <div>
            
            <Header />
            <section className="jumbotron-section">
                <img src={promo_banner} alt="promo-banner" className="jumbotron-img" />
            </section>
            <SearchFlight />
            <section className="promo-section">
                <Container>
                    <h2 className="promo-section-title">Nikmati Traveling Akhir Tahun Luar Biasa ke Asia!</h2>
                    <h3 className="promo-section-subtitle">Akhir tahun sudah dekat, yuk cepetan booking penerbangmu sekarang! 😍</h3>
                    <p class="promo-section-booking">Bisa booking melalui website atau aplikasi Airpaz</p>
                    <p class="promo-section-periode">Periode promo 1 Desember 2022 - 31 Desember 2022</p>
                </Container>
            </section>
            <section className="discount-section">
                <Container>
                    {showAlert && (
                        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                            <p className="text-center">Kode <strong>{copyText}</strong> berhasil disalin!</p>
                        </Alert>
                )}
                    <Row className="discount-row">
                        <Col md={6} className="discount-card">
                            <h3 className="discount-card-title">diskon Rp 80.000</h3>
                            <p className="discount-card-subtitle">Minimal transaksi Rp 1.500.000</p>
                             <div>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    value={copyText} 
                                    onChange={handleCopyText} 
                                    readOnly
                                    />
                                    <Button variant="light" id="button-addon2" className="copy-button" 
                                    onClick={() => {copyToClipboard(); setShowAlert(true); }}>
                                        <i class="ri-file-copy-line ri-xl"></i>
                                        <p>Salin</p>
                                    </Button>
                                </InputGroup>
                             </div>
                        </Col>
                        <Col md={6} className="discount-card">
                            <h3 className="discount-card-title">diskon Rp 80.000</h3>
                            <p className="discount-card-subtitle">Minimal transaksi Rp 1.500.000</p>
                             <div>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    value={copyText} 
                                    onChange={handleCopyText} 
                                    readOnly
                                    />
                                    <Button variant="light" id="button-addon2" className="copy-button" 
                                    onClick={() => {copyToClipboard(); setShowAlert(true); }}>
                                        <i class="ri-file-copy-line ri-xl"></i>
                                        <p>Salin</p>
                                    </Button>
                                </InputGroup>
                             </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="rules-section">
                <Container>
                    <h3 className="rules-section-title">Syarat & Kondisi</h3>
                    <ol className="rules-section-list">
                        <li><p>Periode Penerbangan: 1 Desember – 31 Desember 2022</p></li>
                        <li><p>Periode Perjalanan: Kapan pun</p></li>
                        <li><p>Promosi ini berlaku setiap hari selama periode promo.</p></li>
                    </ol>
                    <div className="share-discount text-center">
                        <p>Berbagi dengan teman anda:</p>
                        <div className="share-discount-icon">
                            <a href="#"><i class="ri-facebook-fill ri-xl"></i></a>
                            <a href="#"><i class="ri-twitter-fill ri-xl"></i></a>
                            <a href="#"><i class="ri-whatsapp-fill ri-xl"></i></a>
                            <a href="#"><i class="ri-mail-fill ri-xl"></i></a>
                        </div>
                        
                    </div>
                </Container>
                
            </section>
            <section className="jenis-pembayaran-section">
                <Container>
                <h3 class="jenis-pembayaran-title">Jenis Pembayaran:</h3>
                <img className="payment_img" src={payment_img} alt="Metode Pembayaran"/>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default DetailPromo;