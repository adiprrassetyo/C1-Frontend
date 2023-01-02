import { React, useState } from 'react'
import { Header, Footer } from '../components'
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
    useAccordionButton,
    Modal,
} from 'react-bootstrap'
import '../assets/styles/detail.css'
import Baggage from '../assets/images/baggage.svg'
import Payment from '../assets/images/payment-logo.svg'
import logo from '../assets/images/binair-logo.svg'
import Slider from '../assets/images/slider.svg'
import Clock from '../assets/images/timeflight.svg'
import Refund from '../assets/images/Refund.svg'
import Reschedule from '../assets/images/reschedule.svg'
import Cabin from '../assets/images/cabin.svg'
import Entertainment from '../assets/images/entertainment.svg'
import { toast } from 'react-toastify'
// import Nodata from "../assets/images/no-data.svg";

const Order = () => {
    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!')
        )

        return (
            <button
                type='button'
                style={{ borderStyle: 'none', background: 'none' }}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        )
    }

    function TampilkanDetail(props) {
        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header className='modal-header-detail' closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        <h2>Detail</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body-detail'>
                    <div className='panel'>
                        <div className='panel-block d-flex justify-content-between'>
                            <div className='p-4 pb-0 pt-2'>
                                <p className='is-grey mb-0'>
                                    Penerbangan Keberangkatan
                                </p>
                                <h3 className='normal'>
                                    Jakarta (CGK){' '}
                                    <i class='remix-icon ri-arrow-right-line is-grey ms-2'></i>{' '}
                                    Bali Denpasar (DPS){' '}
                                </h3>
                                <p className='is-grey'>1 Traveler | Langsung</p>
                            </div>
                        </div>
                        <div className='flight-detail-content d-flex'>
                            <div className='flight-detail-airline-info p-4'>
                                <img src={logo} alt='' />
                                <div>
                                    <p className='mb-0 mt-2'>BinAir</p>
                                    <p className='is-grey'>JT12</p>
                                </div>
                            </div>
                            <div className='flight-detail-container p-4 ps-0'>
                                <div className='modal-flight-timeline d-flex'>
                                    <div className='time-line d-flex flex-column justify-content-center align-items-center'>
                                        <div className='icon circle icon-fw d-inline-flex justify-content-center align-items-center'>
                                            <svg
                                                class='svg-inline--fa fa-circle fa-w-16 fa-fw'
                                                data-prefix='far'
                                                data-icon='circle'
                                                role='img'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 512 512'
                                                data-fa-i2svg=''
                                            >
                                                <path
                                                    fill='currentColor'
                                                    d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z'
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='line is-vertical m-v-10'></div>
                                        <div className='icon circle icon-fw d-inline-flex justify-content-center align-items-center'>
                                            <svg
                                                class='svg-inline--fa fa-circle fa-w-16 fa-fw'
                                                data-prefix='fas'
                                                data-icon='circle'
                                                role='img'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 512 512'
                                                data-fa-i2svg=''
                                            >
                                                <path
                                                    fill='currentColor'
                                                    d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='modal-timeline-info'>
                                        <div className='modal-timeline-departure d-flex'>
                                            <div className='timeline-datetime mt-3'>
                                                <h3 className='normal mb-0'>
                                                    12:00
                                                </h3>
                                                <p className='is-grey mb-0 normal me-3'>
                                                    2 Januari 2023
                                                </p>
                                            </div>
                                            <div className='modal-timeline-cityairport mt-3'>
                                                <h3 className='normal mb-0'>
                                                    Jakarta (CGK)
                                                </h3>
                                                <p className='is-grey mb-0 normal'>
                                                    Bandara Internasional
                                                    Soekarno Hatta
                                                </p>
                                                <p className='is-grey mb-0 normal'>
                                                    Terminal 2E
                                                </p>
                                            </div>
                                        </div>
                                        <div className='timeline-duration-wrapper'>
                                            <p className='timeline-duration self-center is-grey normal mt-3 mb-4'>
                                                <i class='ri-time-line'></i>
                                                1h 50m
                                            </p>
                                        </div>
                                        <div className='modal-timeline-arrival d-flex'>
                                            <div className='timeline-datetime mt-3'>
                                                <h3 className='normal mb-0'>
                                                    14:50
                                                </h3>
                                                <p className='is-grey normal mb-0 me-3'>
                                                    2 Januari 2023
                                                </p>
                                            </div>
                                            <div className='modal-timeline-cityairport mt-3'>
                                                <h3 className='normal mb-0'>
                                                    Bali Denpasar (DPS)
                                                </h3>
                                                <p className='is-grey normal mb-0'>
                                                    Bandara Internasional Ngurah
                                                    Rai
                                                </p>
                                                <p className='is-grey normal mb-0'>
                                                    Terminal Domestic
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='modal-flight-facility p-4'>
                                <div className='flight-facility pt-3'>
                                    <div className='facility-item d-flex mb-2'>
                                        <img src={Refund} alt='' />
                                        <p className='normal ms-2 mb-0'>
                                            Bisa Refund
                                        </p>
                                    </div>
                                    <div className='facility-item d-flex mb-2'>
                                        <img src={Reschedule} alt='' />
                                        <p className='normal ms-2 mb-0'>
                                            Perubahan Jadwal
                                        </p>
                                    </div>
                                    <div className='facility-item d-flex mb-2'>
                                        <img src={Cabin} alt='' />
                                        <p className='normal ms-2 mb-0'>
                                            Bagasi Kabin 7kg
                                        </p>
                                    </div>
                                    <div className='facility-item d-flex mb-2'>
                                        <img src={Baggage} alt='' />
                                        <p className='normal ms-3 mb-0'>
                                            Bagasi 20kg
                                        </p>
                                    </div>
                                    <div className='facility-item d-flex mb-2'>
                                        <img src={Entertainment} alt='' />
                                        <p className='normal ms-2 mb-0'>
                                            Hiburan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }

    function Histori(props) {
        return (
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
            >
                <Modal.Header className='modal-header-history' closeButton>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        <h2>Riwayat Pembayaran</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modal-payment-history-container'>
                        <div className='modal-payment-detail d-flex justify-content-between align-items-center p-2'>
                            <div className='modal-payment-bank-info'>
                                <img src={logo} alt='' />
                                <h3 className='mt-3'>BinAir Virtual Account</h3>
                                <h3>Rp 780.280</h3>
                            </div>
                            <div className='modal-payment-status-info d-flex flex-column align-items-end'>
                                <span className='status-badge is-warning'>
                                    Memproses
                                </span>
                                <h3 className='normal mt-4'>
                                    Jumat, 30 Desember 2022
                                </h3>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }

    const [modalShowDetail, setModalShowDetail] = useState(false)
    const [modalShowHistori, setModalShowHistori] = useState(false)
    return (
        <div>
            <Header />
            <Container fluid className='account-box p-5'>
                <Container fluid='xl' className='account-main p-3'>
                    <Row>
                        <Col xs={3} className='left-panel left-flex'>
                            <Button
                                href='/#/account/profile'
                                className='mb-3'
                                variant='light'
                                size='lg'
                            >
                                <i class='remix-icon ri-user-3-line'></i>
                                <span>Profil</span>
                            </Button>
                            <Button
                                href='/#/account/password'
                                className='mb-3'
                                variant='light'
                                size='lg'
                            >
                                <i class='remix-icon ri-key-2-line'></i>
                                <span>Ubah Password</span>
                            </Button>
                            <Button
                                href='/#/account/passenger'
                                className='mb-3'
                                variant='light'
                                size='lg'
                            >
                                <i class='remix-icon ri-list-check'></i>
                                <span>Daftar Traveler</span>
                            </Button>
                            <Button
                                href='/#/account/order'
                                className='mb-3'
                                variant='info'
                                size='lg'
                            >
                                <div className='selected'>
                                    <i class='remix-icon ri-calendar-check-line'></i>
                                    <span>Daftar Pesanan</span>
                                </div>
                            </Button>
                            <Button
                                href='/#/account/wishlist'
                                className='mb-3'
                                variant='light'
                                size='lg'
                            >
                                <i class='remix-icon ri-shopping-basket-2-line'></i>
                                <span>Wishlist</span>
                            </Button>
                            <Button
                                className='mb-3'
                                variant='light'
                                size='lg'
                                onClick={() => {
                                    // setDataUser({});
                                    dispatch(logout())
                                    toast.success('Logout Success')
                                }}
                            >
                                <i class='remix-icon ri-logout-box-r-line'></i>
                                <span>Keluar</span>
                            </Button>
                        </Col>
                        <Col xs={9} className='content-panel ps-5'>
                            <Button
                                className='back-button ms-3 mb-2'
                                href='#/account/order'
                                variant='outline-info'
                            >
                                Kembali
                            </Button>
                            <Container className='order-detail'>
                                <Card className='first-detail p-2'>
                                    <Card.Header className='d-flex justify-content-between align-items-center'>
                                        <div className='first-detail-left'>
                                            <h2>Detail Pemasanan</h2>
                                            <p className='is-grey'>
                                                KODE BINAIR :{' '}
                                                <strong>1017993455</strong>
                                            </p>
                                            <p className='is-grey'>
                                                <strong>
                                                    Tanggal pemesanan 30
                                                    Desember 2022
                                                </strong>
                                            </p>
                                        </div>
                                        <div className='first-detail-right status-badge is-warning'>
                                            Pembayaran dalam proses
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className='is-grey'>
                                            Kadaluarsa pada Jum, 30 Des 2022
                                            18:47 (GMT + 7)
                                        </p>
                                        <Button
                                            href='#/flight/booking'
                                            variant='outline-info'
                                        >
                                            Lanjutkan ke Pembayaran
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <Card className='second-detail p-3'>
                                    <h2>Kontak</h2>
                                    <Row className='mt-4'>
                                        <Col>
                                            <h3 className='is-grey'>Nama</h3>
                                            <p className='normal'>
                                                Mr Damas Muhammad
                                            </p>
                                        </Col>
                                        <Col>
                                            <h3 className='is-grey'>Email</h3>
                                            <p className='normal'>
                                                muhammaddamas81@gmail.com
                                            </p>
                                        </Col>
                                        <Col>
                                            <h3 className='is-grey'>
                                                Nomor Handphone
                                            </h3>
                                            <p className='normal'>
                                                +62 812 3456 782
                                            </p>
                                        </Col>
                                    </Row>
                                </Card>
                                <Accordion className='third-detail'>
                                    <Accordion.Item eventKey='0'>
                                        <div className='detail-header p-4 pb-0'>
                                            <h2>Penumpang</h2>
                                        </div>
                                        <Accordion.Header>
                                            <div className='detail-header-second'>
                                                <p className='normal'>
                                                    Mr. Damas Muhammad{' '}
                                                    <span className='is-grey'>
                                                        | Dewasa
                                                    </span>
                                                </p>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <Row className='passenger-detail mt-4'>
                                                <Col>
                                                    <h3 className='is-grey'>
                                                        Tanggal Lahir
                                                    </h3>
                                                    <p className='normal'>
                                                        1997-12-26
                                                    </p>
                                                </Col>
                                                <Col>
                                                    <h3 className='is-grey'>
                                                        Kewarganegaraan
                                                    </h3>
                                                    <p className='normal'>
                                                        Indonesia
                                                    </p>
                                                </Col>
                                                <Col>
                                                    <h3 className='is-grey'>
                                                        Nomor KTP
                                                    </h3>
                                                    <p className='normal'>
                                                        1234567890123456
                                                    </p>
                                                </Col>
                                            </Row>
                                            <div className='passenger-baggage-section'>
                                                <h3 className='is-grey'>
                                                    Bagasi
                                                </h3>
                                                <div className='passenger-baggage d-flex normal'>
                                                    <p className='mb-0'>
                                                        CGK - DPS
                                                    </p>
                                                    <img
                                                        src={Baggage}
                                                        className='ms-2'
                                                        alt=''
                                                    />
                                                    <p className='mb-0 ms-2'>
                                                        20kg
                                                    </p>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Card className='fourth-detail mt-4 p-4'>
                                    <div className='fourth-detai-header d-flex justify-content-between'>
                                        <h2>Rincian penerbangan</h2>
                                        <Button
                                            variant='outline-info'
                                            onClick={() =>
                                                setModalShowDetail(true)
                                            }
                                        >
                                            Tampilkan Detail
                                        </Button>
                                        <TampilkanDetail
                                            show={modalShowDetail}
                                            onHide={() =>
                                                setModalShowDetail(false)
                                            }
                                            animation={false}
                                        />
                                    </div>
                                    <div className='flight-detail mt-3'>
                                        <div className='panel-grey d-flex'>
                                            <div className='p-3'>
                                                <p className='normal'>
                                                    Berangkat : Jakarta (CGK)
                                                    <i class='remix-icon ri-arrow-right-line is-grey ms-2'></i>
                                                    Bali Denpasar (DPS)
                                                </p>
                                                <p className='is-grey'>
                                                    1 Traveler | Langsung
                                                </p>
                                            </div>
                                        </div>
                                        <div className='panel-flight-detail ms-3'>
                                            <div className='flight-detail-content d-flex align-items-center'>
                                                <div className='flight-detail-airline-info'>
                                                    <img src={logo} alt='' />
                                                    <div>
                                                        <h3>BinAir</h3>
                                                        <h3 className='is-grey'>
                                                            JT12
                                                        </h3>
                                                    </div>
                                                </div>
                                                <Container className='flight-timeline p-4 ms-0'>
                                                    <div className='flight-timeline-horizontal d-flex'>
                                                        <div className='timeline-departure'>
                                                            <p className='normal mb-0'>
                                                                12:00{' '}
                                                                <span className='is-grey'>
                                                                    | Sen, 02
                                                                    Jan 2023
                                                                </span>
                                                            </p>
                                                            <p className='is-grey mb-0'>
                                                                Jakarta (CGK)
                                                            </p>
                                                            <p className='is-grey'>
                                                                Terminal 2E
                                                            </p>
                                                        </div>
                                                        <div className='time-line-wrapper d-flex flex-column justify-content-center'>
                                                            <p className='timeline-duration self-center is-grey'>
                                                                <i class='ri-time-line'></i>
                                                                1h 50m
                                                            </p>
                                                            <div className='time-line d-flex justify-content-center is-relative is-grey'>
                                                                <div className='divider'></div>
                                                                <svg
                                                                    class='svg-inline--fa fa-plane fa-w-18 fa-fw'
                                                                    data-prefix='fal'
                                                                    data-icon='plane'
                                                                    role='img'
                                                                    xmlns='http://www.w3.org/2000/svg'
                                                                    viewBox='0 0 576 512'
                                                                    data-fa-i2svg=''
                                                                >
                                                                    <path
                                                                        fill='currentColor'
                                                                        d='M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-88.36c-10.63 0-18.3 10.17-15.38 20.39L192 192h-64l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H72c5.04 0 9.78-2.37 12.8-6.4L128 320h64l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h88.36c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64zm0 96H347.14L237.43 480h-57.86l54.86-192H112l-48 64H37.35l27.98-96-28-96H64l48 64h122.42L179.57 32h57.87l109.71 192H480c26.24 0 62.61 21.75 64 31.91-1.39 10.34-37.76 32.09-64 32.09z'
                                                                    ></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className='timeline-arrival has-text-right'>
                                                            <p className='normal mb-0'>
                                                                14:50{' '}
                                                                <span className='is-grey'>
                                                                    | Sen, 02
                                                                    Jan 2023
                                                                </span>
                                                            </p>
                                                            <p className='is-grey mb-0'>
                                                                Bali Denpasar
                                                                (DPS)
                                                            </p>
                                                            <p className='is-grey'>
                                                                Terminal
                                                                Domestic
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Container>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Container className='fifth-detail'>
                                    <h2 className='p-3'>Detail Harga</h2>
                                    <div className='price-summary-content'>
                                        <Accordion>
                                            <Card className='summary'>
                                                <Card.Header className='price-summary-header d-flex justify-content-between ps-2 pb-0'>
                                                    <CustomToggle eventKey='0'>
                                                        <h4 className=''>
                                                            Berangkat (CGK{' '}
                                                            <i class='remix-icon ri-arrow-right-line is-grey ms-2'></i>{' '}
                                                            DPS)
                                                        </h4>
                                                    </CustomToggle>
                                                    <h4 className='d-inline-flex normal'>
                                                        Rp 780.280
                                                    </h4>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey='0'>
                                                    <Card.Body className='price-summary-body pt-0'>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className='is-grey mb-0'>
                                                                Dewasa x 1
                                                            </p>
                                                            <p className='is-grey mb-0'>
                                                                Rp 800.280
                                                            </p>
                                                        </div>
                                                        <div className='d-flex justify-content-between'>
                                                            <p className='is-grey'>
                                                                Diskon
                                                            </p>
                                                            <p className='is-green'>
                                                                - Rp 20.080
                                                            </p>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </div>
                                    <div className='total-price-wrapper'>
                                        <div className='p-3 pt-0 d-flex justify-content-between'>
                                            <h2>Total Harga</h2>
                                            <h2>Rp 780.280</h2>
                                        </div>
                                    </div>
                                </Container>
                                <Container className='sixth-detail mt-3 p-3'>
                                    <div className='order-payment d-flex justify-content-between p-2'>
                                        <h2>Pembayaran Terbaru</h2>
                                        <Button
                                            variant='outline-info'
                                            onClick={() =>
                                                setModalShowHistori(true)
                                            }
                                        >
                                            Histori
                                        </Button>
                                        <Histori
                                            show={modalShowHistori}
                                            onHide={() =>
                                                setModalShowHistori(false)
                                            }
                                            animation={false}
                                        />
                                    </div>
                                    <div className='order-payment-content p-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='payment-bank-info'>
                                                <img
                                                    src={logo}
                                                    alt='payment'
                                                    className='mb-3'
                                                />
                                                <h3>BinAir Virtual Account</h3>
                                                <p className='normal'>
                                                    Rp 780.280
                                                </p>
                                            </div>
                                            <div className='payment-status-info d-flex flex-column align-items-end'>
                                                <span className='status-badge is-warning mb-2'>
                                                    Memproses
                                                </span>
                                                <p className='normal mt-3'>
                                                    Jumat, 30 Desember 2022
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Container>
                        </Col>
                    </Row>

                    <Card
                        className='payment-content mt-5'
                        style={{ width: '13rem' }}
                    >
                        <Card.Body>
                            <Card.Title>
                                <strong>Jenis Pembayaran:</strong>
                            </Card.Title>
                            <Card.Text>
                                <img
                                    src={Payment}
                                    alt='
                                            payment'
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
export default Order
