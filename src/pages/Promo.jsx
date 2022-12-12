import React from "react";
import { Header, Footer } from "../components";
import { Container, Row, Col, Form, Button, Carousel, Card } from "react-bootstrap";
import promo_banner from "../assets/images/promo-banner.webp";
import "../assets/styles/promo.css";

const Promo = () => {
  return (
    <div>
      <Header />
      <section className="carousel-banner">
          <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src={promo_banner}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block"
          src={promo_banner}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={promo_banner}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      </section>
        
      <section className="card-promo-section">
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={promo_banner}/>
                <Card.Body>
                  <Card.Title>
                    <a href="#">Stay Happy Weekly Bersama OCBC NISP, Dapatkan Diskon 12%</a>
                    <p>Harga Hemat Bersama OCBC NISP</p>
                  </Card.Title>
                  
                    <Row className="periode-promo-container">
                      <Col md={6} className="periode-promo-left">
                        <p className="periode-promo-title">Periode Promo</p>
                        <p className="periode-promo-desc">1 Feb - 31 Desember 2022</p>
                      </Col>
                      <Col md={6}>
                        <p className="periode-promo-title">Periode Perjalanan</p>
                        <p className="periode-promo-desc">4 Februari 2022 - 31 Desember 2024</p>
                      </Col>
                    </Row>
                  <Button variant="light" className="detail-button">Detail Lebih Lanjut</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={promo_banner}/>
                <Card.Body>
                  <Card.Title>
                    <a href="#">Stay Happy Weekly Bersama OCBC NISP, Dapatkan Diskon 12%</a>
                    <p>Harga Hemat Bersama OCBC NISP</p>
                  </Card.Title>
                  
                    <Row className="periode-promo-container">
                      <Col md={6} className="periode-promo-left">
                        <p className="periode-promo-title">Periode Promo</p>
                        <p className="periode-promo-desc">1 Feb - 31 Desember 2022</p>
                      </Col>
                      <Col md={6}>
                        <p className="periode-promo-title">Periode Perjalanan</p>
                        <p className="periode-promo-desc">4 Februari 2022 - 31 Desember 2024</p>
                      </Col>
                    </Row>
                  <Button variant="light" className="detail-button">Detail Lebih Lanjut</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={promo_banner}/>
                <Card.Body>
                  <Card.Title>
                    <a href="#">Stay Happy Weekly Bersama OCBC NISP, Dapatkan Diskon 12%</a>
                    <p>Harga Hemat Bersama OCBC NISP</p>
                  </Card.Title>
                  
                    <Row className="periode-promo-container">
                      <Col sm={6} xs={6} md={6} className="periode-promo-left">
                        <p className="periode-promo-title">Periode Promo</p>
                        <p className="periode-promo-desc">1 Feb - 31 Desember 2022</p>
                      </Col>
                      <Col sm={6} xs={6} md={6} >
                        <p className="periode-promo-title">Periode Perjalanan</p>
                        <p className="periode-promo-desc">4 Februari 2022 - 31 Desember 2024</p>
                      </Col>
                    </Row>
                  <Button variant="light" className="detail-button">Detail Lebih Lanjut</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="jenis-pembayaran-section">
        <Container>
          <h3>Jenis Pembayaran</h3>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Promo;
