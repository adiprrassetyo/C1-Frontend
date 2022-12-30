import {React, useState} from "react";
import { Header, Footer } from "../components";
import { RangeDatePicker } from 'react-google-flight-datepicker';
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
    InputGroup
  } from "react-bootstrap";
import "../assets/styles/passenger.css";
import Payment from "../assets/images/payment-logo.svg";


  const Passenger = () => {
    const [onEdit, setOnEdit] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        setOnEdit((prev) => !prev);
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

    setValidated(true);
    };

    return (
        <div>
            <Header />
                <Container fluid className="account-box p-5">
                    <Container fluid="xl" className="account-main p-3">
                        <Row>
                            <Col xs={3} className="left-panel left-flex">
                                <Button href="/#/account/profile"className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-user-3-line"></i>
                                    <span>Profil</span>
                                </Button>
                                <Button href="/#/account/password" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-key-2-line"></i>
                                    <span>Ubah Password</span>
                                </Button>
                                <Button href="/#/account/order" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-calendar-check-line"></i>
                                    <span>Daftar Pesanan</span>
                                </Button>
                                <Button href="/#/account/whislist" className="mb-3" variant="light" size="lg">
                                    <i class="remix-icon ri-shopping-basket-2-line"></i>
                                    <span>Wishlist</span>
                                </Button>
                                <Button className="mb-3" variant="light" size="lg"
                                    onClick={() => {
                                        // setDataUser({});
                                        dispatch(logout());
                                    }}
                                >
                                    <i class="remix-icon ri-logout-box-r-line"></i>
                                    <span>Keluar</span>
                                </Button>
                            </Col>
                            <Col xs={9} className="content-panel ps-5">
                                <Card
                                    bg="light"
                                    key="Light"
                                    text="dark"
                                    className="mb-2"
                                    >
                                    <Card.Header className="header-flex">
                                        {onEdit ? (
                                            <div className="p-2 profile-header">
                                                <i class="remix-icon ri-list-check"></i>
                                                <span>Tambah Penumpang</span>
                                            </div>) : (
                                                <div className="p-2 profile-header">
                                                <i class="remix-icon ri-list-check"></i>
                                                <span>Daftar Traveler</span>
                                            </div>
                                        )}
                                        
                                    </Card.Header>
                                    <Card.Body>
                                        {onEdit ? (
                                            <div>
                                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                            <Form.Label>Nama Depan</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                                                            <Form.Label>Nama Akhir</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                            />
                                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="mb-3">
                                                        <Form.Group as={Col} md="3" controlId="validationCustom03">
                                                            <Form.Label>Jenis Kelamin</Form.Label>
                                                            <Form.Select className="selectForm" aria-label="Default select example">
                                                                <option value="1">Laki-laki</option>
                                                                <option value="2">Perempuan</option>
                                                            </Form.Select>
                                                        </Form.Group>   
                                                        <Form.Group as={Col} md="9" controlId="validationCustom04">
                                                            <Form.Label>Nomor Telepon</Form.Label>
                                                            <Form.Control type="text" required />
                                                            <Form.Control.Feedback type="invalid">
                                                                Masukan Nomor yang valid.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Row>
                                                    <div className="d-flex justify-content-end">
                                                        <Button variant="outline-info" size="lg" className="m-2" onClick={handleChange}>Cancel</Button>
                                                        <Button variant="outline-info" size="lg" className="m-2" type="submit">Submit form</Button>
                                                    </div> 
                                                </Form>
                                        </div>
                                        ) : (
                                            <div className="content-flex-passenger p-5">
                                            <h1 className="content-h1-txt">OOPS !</h1>
                                            <p className="content-p-txt">Tidak Ada Penumpang</p>
                                            <Button onClick={handleChange} className="mb-3" variant="info" size="lg">
                                                <div className="selected submit">
                                                    <i class="remix-icon ri-list-check"></i>
                                                    <span>Tambah Penumpang</span>
                                                </div> 
                                            </Button>
                                        </div>
                                        )}
                                        

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
    )
  
}
export default Passenger;   