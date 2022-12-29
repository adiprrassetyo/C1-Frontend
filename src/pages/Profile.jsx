import {React, useState} from "react";
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
    InputGroup
  } from "react-bootstrap";
import "../assets/styles/profile.css";
import Payment from "../assets/images/payment-logo.svg";
import { TypeH1 } from "react-bootstrap-icons";

const Profile = () => {
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
                        <Button className="mb-3" variant="info" size="lg">
                            <div className="selected">
                                <i class="remix-icon ri-user-3-line"></i>
                                <span>Profil</span>
                            </div>
                        </Button>
                        <Button href="/#/account/password" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-key-2-line"></i>
                            <span>Ubah Password</span>
                        </Button>
                        <Button href="/#/account/passenger" className="mb-3" variant="light" size="lg">
                            <i class="remix-icon ri-list-check"></i>
                            <span>Daftar Traveler</span>
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
                            className="mb-2"
                            >
                            <Card.Header className="header-flex">
                                <div className="p-2 profile-header">
                                    <i class="remix-icon ri-user-3-line"></i>
                                    <span>Profil</span>
                                </div>
                                {onEdit ? (<></>) : (
                                    <Button onClick={handleChange} variant="outline-info" >
                                        Sunting
                                    </Button>
                                )}
                                
                                {/* <a href="/#/account/profile/edit" className="has-text-warning p-3">Sunting</a> */}
                            </Card.Header>
                            {onEdit ? (
                                <Card.Body>
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
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="text" placeholder="email@example.com" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Masukan Email yang valid.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Form.Group controlId="validationCustom03">
                                                    <Form.Label>Nomor Telepon</Form.Label>
                                                    <Form.Control type="text" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Masukan Nomor yang valid.
                                                    </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label>Foto Profil</Form.Label>
                                                <Form.Control type="file" />
                                            </Form.Group>
                                            <div className="d-flex justify-content-end">
                                                <Button variant="outline-info" size="lg" className="m-2" onClick={handleChange}>Cancel</Button>
                                                <Button variant="outline-info" size="lg" className="m-2" type="submit">Submit form</Button>
                                            </div> 
                                        </Form>
                                    </div>
                                </Card.Body>
                            ) : (
                                <Card.Body>
                                    <div className="content-flex">
                                        <div className="profile-item is-full p-2">
                                            <p className="mb-0 has-text-grey">Nama</p>
                                            <p className="mb-0 mt-1 normal">Mr Damas, Muhammad</p>
                                        </div>
                                        <div className="profile-item is-half p-2">
                                            <p className="mb-0 has-text-grey">Jenis Kelamin</p>
                                            <p className="mb-0 mt-1 normal">Laki-laki</p>
                                        </div>
                                        <div className="profile-item is-half p-2">
                                            <p className="mb-0 has-text-grey">Email</p>
                                            <p className="mb-0 mt-1 normal">-</p>
                                        </div>
                                        <div className="profile-item is-full p-2">
                                            <p className="mb-0 has-text-grey">Nomor Telepon</p>
                                            <p className="mb-0 mt-1 normal">-</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            )}
                            
                        </Card>
                    </Col>
                </Row> 

                <Card className="payment-content mt-5" style={{ width: "13rem" }}>
                    <Card.Title>
                        <strong>Jenis Pembayaran:</strong>
                    </Card.Title>
                    <Card.Body>
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
}

export default Profile;