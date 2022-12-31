import React from "react";
import { Header, Footer } from "../components";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  Card,
  Accordion,
  Form,
  Pagination,
} from "react-bootstrap";
import "../assets/styles/order.css";
import Payment from "../assets/images/payment-logo.svg";
import Nodata from "../assets/images/no-data.svg";
import { useDispatch } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <Container fluid className="account-box p-5">
        <Container fluid="xl" className="account-main p-3">
          <Row>
            <Col xs={3} className="left-panel left-flex">
              <Button
                href="/#/account/profile"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-user-3-line"></i>
                <span>Profil</span>
              </Button>
              <Button
                href="/#/account/password"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-key-2-line"></i>
                <span>Ubah Password</span>
              </Button>
              <Button className="mb-3" variant="info" size="lg">
                <div className="selected">
                  <i class="remix-icon ri-calendar-check-line"></i>
                  <span>Daftar Pesanan</span>
                </div>
              </Button>
              <Button
                href="/#/account/whislist"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-shopping-basket-2-line"></i>
                <span>Wishlist</span>
              </Button>
              <Button
                className="mb-3"
                variant="light"
                size="lg"
                onClick={() => {
                  dispatch(logout());
                  redirect("/");
                }}
              >
                <i class="remix-icon ri-logout-box-r-line"></i>
                <span>Keluar</span>
              </Button>
            </Col>
            <Col xs={9} className="content-panel ps-5">
              <Card bg="light" key="Light" text="dark" className="mb-2">
                <Card.Header className="header-flex">
                  <div className="p-2 profile-header">
                    <i class="remix-icon ri-calendar-check-line"></i>
                    <span>Daftar Pesanan</span>
                  </div>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Kode BinAir"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-info">Search</Button>
                  </Form>
                </Card.Header>
                <Card.Body>
                  <div className="status-filter m-2">
                    <div>
                      <Button
                        className="ps-4 pe-4"
                        variant="secondary"
                        size="lg"
                      >
                        Dikonfirmasi
                      </Button>{" "}
                    </div>
                    <div>
                      <Button
                        className="ps-4 pe-4"
                        variant="secondary"
                        size="lg"
                      >
                        Selesai
                      </Button>{" "}
                    </div>
                    <div>
                      <Button
                        className="ps-4 pe-4"
                        variant="secondary"
                        size="lg"
                      >
                        Menunggu
                      </Button>{" "}
                    </div>
                    <div>
                      <Button
                        className="ps-4 pe-4"
                        variant="secondary"
                        size="lg"
                      >
                        Dibatalkan
                      </Button>{" "}
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <div className="img-box">
                <img src={Nodata} alt="" />
                <p>
                  <strong>Tidak Ada Data</strong>
                </p>
                <p className="txt">
                  Jika anda tidak bisa menyelesaikan proses pemesanan, kami akan
                  menyimpannya di sini!
                </p>
              </div>
            </Col>
          </Row>

          <Card className="payment-content mt-5" style={{ width: "13rem" }}>
            <Card.Body>
              <Card.Title>
                <strong>Jenis Pembayaran:</strong>
              </Card.Title>
              <Card.Text>
                <img
                  src={Payment}
                  alt="
                                            payment"
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>

      <Footer />
    </div>
  );
};
export default Order;
