import React, { useEffect } from "react";
import { Header, Footer } from "../components";
import { Container, Row, Col, Form, Button, Carousel } from "react-bootstrap";
import SearchFlight from "../components/Homepage/SearchFlight";
import banner_img_svg from "../assets/images/banner-img-svg.svg";
import feature1 from "../assets/images/feature1.svg";
import feature2 from "../assets/images/feature2.svg";
import feature3 from "../assets/images/feature3.svg";
import feature4 from "../assets/images/feature4.svg";
import feature5 from "../assets/images/feature5.svg";
import feature6 from "../assets/images/feature6.svg";
import promo_img from "../assets/images/promo-img.webp";
import mobile_mockup from "../assets/images/mobile-mockup.svg";
import google_play from "../assets/images/google-play.svg";
import { useSelector, useDispatch } from "react-redux";
import { retrivePromos } from "./../redux/slices/promoSlice";

import "../assets/styles/homepage.css";

const Home = () => {
  const { loading, status, message, promos } = useSelector(
    (state) => state.promo
  );

  console.log(promos);
  const dispatch = useDispatch();
  useEffect(() => {
    console.info("dispatch");
    dispatch(retrivePromos(0));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <section className="banner" id="home">
        <div className="jumbotron text-center">
          <h1 className="banner-title">
            Temukan Pengalaman Terbang<br></br>Terbaik Bersama Kami
          </h1>
          <img
            src={banner_img_svg}
            alt="banner-pic"
            width="100%"
            className="banner-img"
          ></img>
        </div>
        <div>
          <SearchFlight />
        </div>
      </section>

      <section className="feature-section">
        <Container className="text-center">
          <h3 className="section-title">Mengapa Binair?</h3>
          <div className="feature ">
            <Row>
              <Col md={4} className="feature-col">
                <img
                  src={feature1}
                  alt="feature-1"
                  className="feature-img"
                ></img>
                <p className="feature-title">
                  Mempermudah Pengalaman Booking Anda
                </p>
                <p className="feature-desc">
                  Rasakan fleksibilitas dan kemudahan selama proses pemesanan
                </p>
              </Col>
              <Col md={4} className="feature-col">
                <img
                  src={feature2}
                  alt="feature-2"
                  className="feature-img"
                ></img>
                <p className="feature-title">
                  Kenyamanan Booking Ke Seluruh Indonesia
                </p>
                <p className="feature-desc">
                  Pengalaman memesan bebas stress dengan pembayaran, mata uang,
                  dan bahasa lokal
                </p>
              </Col>
              <Col md={4} className="feature-col">
                <img
                  src={feature3}
                  alt="feature-3"
                  className="feature-img"
                ></img>
                <p className="feature-title">Banyak Pilihan Destinasi</p>
                <p className="feature-desc">
                  Nikmati momen yang mengesankan dengan jutaan penerbangan dan
                  akomodasi yang menguntungkan
                </p>
              </Col>
              <Col md={4} className="feature-col">
                <img
                  src={feature4}
                  alt="feature-4"
                  className="feature-img"
                ></img>
                <p className="feature-title">Tawaran Eksklusif Setiap Hari</p>
                <p className="feature-desc">
                  Berbagai macam promo harian dengan harga yang terjangkau untuk
                  semua traveler
                </p>
              </Col>
              <Col md={4} className="feature-col">
                <img
                  src={feature5}
                  alt="feature-5"
                  className="feature-img"
                ></img>
                <p className="feature-title">Ahlinya Travel Agent</p>
                <p className="feature-desc">
                  Bersama dengan mitra terpercaya kami, memenuhi kebutuhan
                  traveler yang jumlah nya tak terhitung sejak 2011
                </p>
              </Col>
              <Col md={4}>
                <img
                  src={feature6}
                  alt="feature-6"
                  className="feature-img"
                ></img>
                <p className="feature-title">Layanan Pelanggan Yang Ramah</p>
                <p className="feature-desc">
                  Layanan pelanggan kami tersedia 24/7 memberikan bantuan
                  terbaik dalam bahasa lokal Anda
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="promo-section">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="promo-section-left">
              <h3 className="section-title">Lihat Promo Menarik</h3>
              <p className="section-desc">
                Ingin perjalanan menyenangkan dengan budget yang ramah
                dikantong? Yuk temukan promo menarik yang menanti perjalanmu
                dengan BinAir
              </p>
              <Button href="#" className="btn see-more-btn" variant="secondary">
                Lihat Selengkapnya
              </Button>
            </Col>
            <Col md={7} className="promo-section-right">
              <Carousel>
                {promos?.map((promo, i) => (
                  <Carousel.Item key={promo.id} interval={1000}>
                    <img
                      className="d-block w-100"
                      src={promo.promo_image}
                      width="500"
                      alt={`${i}-slide`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mobileapp-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} sm={6} xs={12}>
              <img
                src={mobile_mockup}
                alt="mobile-mockup"
                className="mobile-mockup"
                width="430"
              />
            </Col>
            <Col md={6} sm={6} xs={12}></Col>
          </Row>
        </Container>
        <div className="mobile-section-content">
          <Container>
            <Row className="align-items-center">
              <Col md={6} sm={6} xs={12}></Col>
              <Col md={6} sm={6} xs={12} className="text-mobile-section">
                <p>
                  Unduh Aplikasi BinAir Sekarang,Pesan tiket pesawat dengan
                  lebih mudah!
                </p>
                <a href="#">
                  <img
                    src={google_play}
                    alt="google play logo"
                    width="150"
                    className="google-play-logo"
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
