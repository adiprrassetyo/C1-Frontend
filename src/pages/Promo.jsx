import React, { useEffect } from "react";
import { Header, Footer } from "../components";
import { Container, Row, Col, Button, Carousel, Card } from "react-bootstrap";
import promo_banner from "../assets/images/promo-banner.webp";
import payment_img from "../assets/images/payment-img.webp";
import "../assets/styles/promo.css";
import { useSelector, useDispatch } from "react-redux";
import { retrivePromos } from "./../redux/slices/promoSlice";
import { Link } from "react-router-dom";

const Promo = () => {
  const { loading, status, message, promos } = useSelector(
    (state) => state.promo
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.info("dispatch");
    dispatch(retrivePromos());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <section className="carousel-banner">
        <Carousel>
          {promos.map((promo, i) => (
            <Carousel.Item key={promo.id}>
              <img
                className="d-block"
                src={promo.promo_image}
                alt={`${i}-slide`}
              />
            </Carousel.Item>
          ))}

          {/* <Carousel.Item>
            <img className="d-block" src={promo_banner} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block" src={promo_banner} alt="Third slide" />
          </Carousel.Item> */}
        </Carousel>
      </section>

      <section className="card-promo-section">
        <Container>
          <Row>
            {promos.map((promo) => {
              // Buat objek Date dari tanggal mulai dan tanggal selesai
              const startDate = new Date(promo.createdAt);
              const endDate = new Date(promo.expire);

              // Hitung selisih hari antara tanggal selesai dan tanggal mulai
              const diffDays = Math.ceil(
                (endDate - startDate) / (1000 * 60 * 60 * 24)
              );

              // Tampilkan periode promosi
              const period = `${startDate.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
              })} - ${endDate.toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })} (${diffDays} hari)`;
              return (
                <Col md={4}>
                  <Card>
                    <Card.Img variant="top" src={promo.promo_image} />
                    <Card.Body>
                      <Card.Title>
                        <a href="#">{promo.title}</a>
                        <p>{promo.desc}</p>
                      </Card.Title>

                      <Row className="periode-promo-container">
                        <Col md={6} className="periode-promo-left">
                          <p className="periode-promo-title">Periode Promo</p>
                          <p className="periode-promo-desc">{period}</p>
                        </Col>
                        <Col md={6}>
                          <p className="periode-promo-title">
                            Periode Perjalanan
                          </p>
                          <p className="periode-promo-desc">Anytime</p>
                        </Col>
                      </Row>

                      <Link to={`/promo/view/${promo.id}`}>
                        <Button variant="light" className="detail-button">
                          Detail Lebih Lanjut
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}

            {/* <Col md={4}>
              <Card>
                <Card.Img variant="top" src={promo_banner} />
                <Card.Body>
                  <Card.Title>
                    <a href="#">
                      Stay Happy Weekly Bersama OCBC NISP, Dapatkan Diskon 12%
                    </a>
                    <p>Harga Hemat Bersama OCBC NISP</p>
                  </Card.Title>

                  <Row className="periode-promo-container">
                    <Col md={6} className="periode-promo-left">
                      <p className="periode-promo-title">Periode Promo</p>
                      <p className="periode-promo-desc">
                        1 Feb - 31 Desember 2022
                      </p>
                    </Col>
                    <Col md={6}>
                      <p className="periode-promo-title">Periode Perjalanan</p>
                      <p className="periode-promo-desc">
                        4 Februari 2022 - 31 Desember 2024
                      </p>
                    </Col>
                  </Row>
                  <Button
                    href="/promo/view/1"
                    variant="light"
                    className="detail-button"
                  >
                    Detail Lebih Lanjut
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={promo_banner} />
                <Card.Body>
                  <Card.Title>
                    <a href="#">
                      Stay Happy Weekly Bersama OCBC NISP, Dapatkan Diskon 12%
                    </a>
                    <p>Harga Hemat Bersama OCBC NISP</p>
                  </Card.Title>

                  <Row className="periode-promo-container">
                    <Col md={6} sm={6} xs={6} className="periode-promo-left">
                      <p className="periode-promo-title">Periode Promo</p>
                      <p className="periode-promo-desc">
                        1 Feb - 31 Desember 2022
                      </p>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <p className="periode-promo-title">Periode Perjalanan</p>
                      <p className="periode-promo-desc">
                        4 Februari 2022 - 31 Desember 2024
                      </p>
                    </Col>
                  </Row>
                  <Button
                    href="/promo/view/1"
                    variant="light"
                    className="detail-button"
                  >
                    Detail Lebih Lanjut
                  </Button>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="jenis-pembayaran-section">
        <Container>
          <h3 className="jenis-pembayaran-title">Jenis Pembayaran:</h3>
          <img
            className="payment_img"
            src={payment_img}
            alt="Metode Pembayaran"
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Promo;
