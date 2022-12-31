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
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

const Whislist = () => {
  // const [onEdit, setOnEdit] = useState(false);

  // const handleChange = (event) => {
  //     event.preventDefault();
  //     setOnEdit((prev) => !prev);
  // };

  const dispatch = useDispatch();
  const redirect = useNavigate();

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
              <Button
                href="/#/account/order"
                className="mb-3"
                variant="light"
                size="lg"
              >
                <i class="remix-icon ri-calendar-check-line"></i>
                <span>Daftar Pesanan</span>
              </Button>
              <Button
                href="/#/account/whislist"
                className="mb-3"
                variant="info"
                size="lg"
              >
                <div className="selected">
                  <i class="remix-icon ri-shopping-basket-2-line"></i>
                  <span>Whislist</span>
                </div>
              </Button>
              <Button
                className="mb-3"
                variant="light"
                size="lg"
                onClick={() => {
                  // setDataUser({});
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
                    <i class="remix-icon ri-shopping-basket-2-line"></i>
                    <span>Whislist</span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="content-flex-passenger p-5">
                    <h1 className="content-h1-txt">OOPS !</h1>
                    <p className="content-p-txt">Tidak Ada Whislist</p>
                    <Button className="mb-3" variant="info" size="lg">
                      <div className="selected submit">
                        <i class="remix-icon ri-coupon-2-line"></i>
                        <span>Cari Tiket</span>
                      </div>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
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
export default Whislist;
