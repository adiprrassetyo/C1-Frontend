import React from "react";
import { Header, Footer } from "../components";
import {Container, Row, Col, Form, Button, Carousel} from "react-bootstrap";
import SearchFlight from "../components/Homepage/SearchFlight";
import banner_img from "../assets/images/banner-img.png";
import feature1 from "../assets/images/feature1.svg";
import feature2 from "../assets/images/feature2.svg";
import feature3 from "../assets/images/feature3.svg";
import mobile_mockup from "../assets/images/mobile-mockup.svg";
import google_play from "../assets/images/google-play.svg";
import "../assets/styles/homepage.css"


const Home = () => {
  return (
    <div>
      <Header />
      <section className="banner" id="home">
      <div className="jumbotron text-center">
        <h1 className="banner-title">Temukan Pengalaman Terbang<br></br>Terbaik Bersama Kami</h1>
        <img src={banner_img} alt="banner-pic" width="1200"></img>
      </div>
      <div>
        <SearchFlight />
      </div>
    </section>

    <section className="feature-section" >
      <Container className="text-center">
        <h3>Mengapa Binair?</h3>
        <div class="feature">
          <Row>
            <Col md={4} className="feature-col">
              <img src={feature1} alt="feature-1"></img>
              <p className="feature-title">Mempermudah Pengalaman Booking Anda</p>
              <p>Rasakan fleksibilitas dan kemudahan selama proses pemesanan</p>
            </Col>
            <Col md={4}>
              <img src={feature2} alt="feature-2"></img>
              <p className="feature-title">Kenyamanan Booking Ke Seluruh Indonesia</p>
              <p>Pengalaman memesan bebas stress dengan pembayaran, mata uang, dan bahasa lokal</p>
            </Col>
            <Col md={4}>
              <img src={feature3} alt="feature-3"></img>
              <p className="feature-title">Banyak Pilihan Destinasi</p>
              <p>Nikmati momen yang mengesankan dengan jutaan penerbangan dan akomodasi yang menguntungkan</p>
            </Col>
            <Col md={4}>
              <img src={feature3} alt="feature-3"></img>
              <p className="feature-title">Banyak Pilihan Destinasi</p>
              <p>Nikmati momen yang mengesankan dengan jutaan penerbangan dan akomodasi yang menguntungkan</p>
            </Col>
            <Col md={4}>
              <img src={feature3} alt="feature-3"></img>
              <p className="feature-title">Banyak Pilihan Destinasi</p>
              <p>Nikmati momen yang mengesankan dengan jutaan penerbangan dan akomodasi yang menguntungkan</p>
            </Col>
            <Col md={4}>
              <img src={feature3} alt="feature-3"></img>
              <p className="feature-title">Banyak Pilihan Destinasi</p>
              <p>Nikmati momen yang mengesankan dengan jutaan penerbangan dan akomodasi yang menguntungkan</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    <section className="promo-section">
      <Container>
        <Row>
          <Col md={5}>
            <h3>Lihat Promo Menarik</h3>
            <p>Ingin perjalanan menyenangkan dengan budget yang ramah dikantong? Yuk temukan promo menarik yang menanti perjalanmu dengan BinAir</p>
            <Button href="#" className="btn see-more-btn">Lihat Selengkapnya</Button> 
          </Col>
          <Col md={7}>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={banner_img}
          width="500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={banner_img}
          width="500"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_img}
          width="500"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={mobile_mockup} alt="mobile-mockup" className="mobile-mockup" width="400" />
          </Col>
          <Col>
            
          </Col>
        </Row>
      </Container>
      
      <div className="mobile-section">
        <Container>
          <Row className="align-items-center">
            <Col></Col>
            <Col className="text-mobile-section">
              <p>Unduh Aplikasi BinAir Sekarang,Pesan tiket pesawat dengan lebih mudah!</p>
            <img src={google_play} alt="google play logo" width="150" />
            </Col>
          </Row>
        </Container>
      </div>
      
    </section>
    <Footer/>
    </div>
    
  );
};

export default Home;
