import React, { useState, useEffect } from 'react'
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
    NavLink,
} from 'react-bootstrap'
import Plane from '../assets/images/plane.svg'
import '../assets/styles/tickets.css'
import Lion from '../assets/images/binair-icon2.svg'
import Ticket404 from '../assets/images/ticketzero.svg'
import Arrow from '../assets/images/Vector.svg'
import Baggage from '../assets/images/baggage.svg'
import AirAsia from '../assets/images/airasia.svg'
import Payment from '../assets/images/payment-logo.svg'
import Clock from '../assets/images/timeflight.svg'
import Refund from '../assets/images/Refund.svg'
import Reschedule from '../assets/images/reschedule.svg'
import Cabin from '../assets/images/cabin.svg'
import Entertainment from '../assets/images/entertainment.svg'
import Slider from '../assets/images/slider.svg'

import { Header, Footer } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import SearchFlight from './../components/Homepage/SearchFlight'
import { BookmarkHeart } from 'react-bootstrap-icons'
import { BookmarkHeartFill } from 'react-bootstrap-icons'
import { createWishlist, deleteWishlist } from '../redux/slices/wishlistSlice'
import { retriveTickets } from './../redux/slices/ticketSlice'
import { toast, ToastContainer } from 'react-toastify'

const Tickets = () => {
    const { user, loading: loadingUser } = useSelector((state) => state.auth)
    const { message: wishMessage, wishlists } = useSelector(
        (state) => state.wishlist
    )
    const { loading, status, message, search, ticket } = useSelector(
        (state) => state.ticket
    )
    const dispatch = useDispatch()
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className='search-main'>
            <Header />
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <Container className='search-header'>
                <Row>
                    <Col className='mt-3 ms-5' sm='auto'>
                        <img src={Plane} loading='eager' />
                    </Col>
                    <Col>
                        <h3>
                            <strong>Pilih Penerbangan Keberangkatan</strong>
                        </h3>
                        <p>
                            {search?.from.code} - {search?.to.code}{' '}
                            <span>|</span>{' '}
                            {/* {search?.startDate
                ? search.startDate
                : new Date().toLocaleDateString("id-ID", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                  })} */}
                        </p>
                    </Col>
                    <Col xs={2}>
                        <Button
                            className='btn-switch'
                            variant='outline-info'
                            onClick={() => setShowSearch((prev) => !prev)}
                        >
                            Ubah Pencarian
                        </Button>{' '}
                    </Col>
                </Row>
                {showSearch ? (
                    <div className='mb-5'>
                        <SearchFlight />
                    </div>
                ) : null}
            </Container>
            <Container fluid className='search-box pt-3'>
                <Container fluid='xl' className='search'>
                    {!user?.firstname && (
                        <Container fluid className='recomlogin'>
                            <p className='m-0 p-0'>
                                Daftar atau log in sekarang untuk mendapatkan
                                pengalaman booking yang terbaik
                            </p>

                            <Button href='/#/auth' variant='outline-light'>
                                Login
                            </Button>
                        </Container>
                    )}

                    {ticket.length > 0 && !loading ? (
                        ticket.map((item) => {
                            let wished = wishlists?.find(
                                (w) => w.id === item.id
                            )
                            const timeDifferenceInMs = Math.abs(
                                new Date(
                                    `January 1, 1970 ${item.departure_time}`
                                ).getTime() -
                                    new Date(
                                        `January 1, 1970 ${item.arrival_time}`
                                    ).getTime()
                            )
                            const hours = Math.floor(
                                timeDifferenceInMs / 3600000
                            )
                            const minutes = Math.floor(
                                (timeDifferenceInMs % 3600000) / 60000
                            )
                            let date = new Date(item.date_start)
                            let formattedDate = date.toLocaleDateString(
                                'en-US',
                                {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                }
                            )

                            return (
                                <Accordion
                                    className='flight-content pb-2'
                                    key={item.id}
                                >
                                    <Accordion.Item eventKey='0'>
                                        {user && (
                                            <div
                                                className='free-baggage rounded-bottom-end'
                                                as='h5'
                                                style={{
                                                    width: 'fit-content',
                                                    padding: '0.7rem',
                                                }}
                                            >
                                                <Button
                                                    className='bg-transparent border-0'
                                                    onClick={() => {
                                                        if (!wished) {
                                                            dispatch(
                                                                createWishlist({
                                                                    adult_price:
                                                                        item.adult_price,
                                                                    airport_from:
                                                                        item.airport_from,
                                                                    airport_to:
                                                                        item.airport_to,
                                                                    arrival_time:
                                                                        item.arrival_time,
                                                                    available:
                                                                        item.available,
                                                                    child_price:
                                                                        item.child_price,
                                                                    createdAt:
                                                                        item.createdAt,
                                                                    curr_stock:
                                                                        item.curr_stock,
                                                                    date_end:
                                                                        item.date_end,
                                                                    date_start:
                                                                        item.date_start,
                                                                    departure_time:
                                                                        item.departure_time,
                                                                    from: item.from,
                                                                    id: item.id,
                                                                    init_stock:
                                                                        item.init_stock,
                                                                    to: item.to,
                                                                    type: item.type,
                                                                    updatedAt:
                                                                        item.updatedAt,
                                                                    search,
                                                                })
                                                            )
                                                            toast.success(
                                                                'Berhasil menambahkan item wishlist!'
                                                            )
                                                        } else {
                                                            dispatch(
                                                                deleteWishlist(
                                                                    item.id
                                                                )
                                                            )
                                                            toast.success(
                                                                'Berhasil menghapus item wishlist!'
                                                            )
                                                        }
                                                    }}
                                                >
                                                    {!wished ? (
                                                        <BookmarkHeart
                                                            size={20}
                                                        />
                                                    ) : (
                                                        <BookmarkHeartFill
                                                            size={20}
                                                        />
                                                    )}
                                                </Button>
                                            </div>
                                        )}
                                        <Accordion.Header>
                                            <Row className='flight-header mt-4 align-items-center'>
                                                <Col className='ms-4'>
                                                    <div className='flight-box-airline flight-flex'>
                                                        <img
                                                            src={Lion}
                                                            loading='eager'
                                                        />
                                                        <p className='mt-2'>
                                                            BinAir
                                                        </p>
                                                    </div>
                                                </Col>
                                                <Col className='me-5'>
                                                    <div className='flight-box-time time-flight-flex align-items-center'>
                                                        <div>
                                                            <h3>
                                                                <strong>
                                                                    {
                                                                        item.departure_time
                                                                    }
                                                                </strong>
                                                            </h3>
                                                            <p>{`${search?.from.code}`}</p>
                                                        </div>
                                                        <span className='has-text-grey-dark'>
                                                            <img
                                                                src={Arrow}
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                        </span>
                                                        <div>
                                                            <h3>
                                                                <strong>
                                                                    {
                                                                        item.arrival_time
                                                                    }
                                                                </strong>
                                                            </h3>
                                                            <p>{`${search?.to.code}`}</p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='me-5'>
                                                    <div className='flight-box-time time-flight-flex'>
                                                        <div>
                                                            <h3>
                                                                
                                                                    <strong>{`${hours}h ${
                                                                        minutes >
                                                                        0
                                                                            ? `${minutes}m`
                                                                            : ''
                                                                    }`}</strong>
                                                                
                                                            </h3>
                                                            <p className='txt-langsung'>
                                                                Langsung
                                                            </p>
                                                        </div>
                                                        <div className='baggage time-flight-flex'>
                                                            <img
                                                                src={Baggage}
                                                                alt='baggage'
                                                                loading='eager'
                                                            />
                                                            <h4>20kg</h4>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col className='flight-box-price pt-3'>
                                                    <h3>
                                                        <strong>
                                                            {item.adult_price.toLocaleString(
                                                                'id-ID',
                                                                {
                                                                    style: 'currency',
                                                                    currency:
                                                                        'IDR',
                                                                    minimumFractionDigits: 0,
                                                                }
                                                            )}
                                                        </strong>
                                                        <span>/Org</span>
                                                    </h3>
                                                </Col>
                                                <Col className='pt-2'>
                                                    <Button
                                                        variant='light'
                                                        className={`btn-flight my-2 p-2 ${
                                                            user?.firstname
                                                                ? ''
                                                                : 'disabled'
                                                        }`}
                                                        href={
                                                            '#/flight/confirm/' +
                                                            item.id
                                                        }
                                                    >
                                                        Pilih Penerbangan
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Accordion.Header>
                                        <Accordion.Body className='flight-detail-content p-4'>
                                            <Row>
                                                <Col
                                                    xs={2}
                                                    className='pt-3 ms-4'
                                                >
                                                    <div className='flight-detail-airline-info flight-flex'>
                                                        <img
                                                            src={Lion}
                                                            loading='eager'
                                                        />
                                                        <h4 className='mt-4'>
                                                            BinAir
                                                        </h4>
                                                        <h4>
                                                            <span>QG666</span>
                                                        </h4>
                                                    </div>
                                                </Col>
                                                <Col xs={7}>
                                                    <Row>
                                                        <Col
                                                            xs={1}
                                                            className='time-line p-0 text-center d-flex align-items-center'
                                                        >
                                                            <img
                                                                src={Slider}
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                        </Col>
                                                        <Col
                                                            xs={11}
                                                            className='timeline-info pt-3'
                                                        >
                                                            <div className='timeline-departure timeline-flex align-items-center'>
                                                                <div className='timeline-datetime me-5'>
                                                                    <h2 className='timeline-departure-time'>
                                                                        <strong>
                                                                            {
                                                                                item.departure_time
                                                                            }
                                                                        </strong>
                                                                    </h2>
                                                                    <p className='timeline-departure-date'>
                                                                        {
                                                                            formattedDate
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className='timeline-cityairport'>
                                                                    <p className='timeline-departure-city mb-3 fw-bold'>
                                                                        {
                                                                            item.from
                                                                        }
                                                                        &nbsp;
                                                                        {`(${search?.from.code})`}
                                                                    </p>
                                                                    <p className='timeline-departure-airport mb-0'>
                                                                        {
                                                                            item.airport_from
                                                                        }
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className='timeline-duration-wrapper mt-4 mb-4'>
                                                                <div className='timeline-duration'>
                                                                    <div className='icon-flex'>
                                                                        <img
                                                                            src={
                                                                                Clock
                                                                            }
                                                                            alt=''
                                                                            className='me-1'
                                                                            loading='eager'
                                                                        />
                                                                        {`${hours}h ${
                                                                            minutes >
                                                                            0
                                                                                ? `${minutes}m`
                                                                                : ''
                                                                        }`}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='timeline-arrival timeline-flex align-items-center'>
                                                                <div className='timeline-datetime me-5'>
                                                                    <h2 className='timeline-arrival-time'>
                                                                        <strong>
                                                                            {
                                                                                item.arrival_time
                                                                            }
                                                                        </strong>
                                                                    </h2>
                                                                    <p className='timeline-arrival-date'>
                                                                        {
                                                                            formattedDate
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div className='timeline-cityairport'>
                                                                    <p className='timeline-arrival-city mb-3 fw-bold'>
                                                                        {
                                                                            item.to
                                                                        }
                                                                        &nbsp;
                                                                        {`(${search?.to.code})`}
                                                                    </p>
                                                                    <p className='timeline-arrival-airport mb-0'>
                                                                        {
                                                                            item.airport_to
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col className='ms-4'>
                                                    <div className='flight-facility pt-3'>
                                                        <div className='facility-item facility-flex mb-2'>
                                                            <img
                                                                src={Refund}
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                            <p className='ms-2 mb-0 information'>
                                                                Bisa Refund
                                                            </p>
                                                        </div>
                                                        <div className='facility-item facility-flex mb-2'>
                                                            <img
                                                                src={Reschedule}
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                            <p className='ms-2 mb-0 information'>
                                                                Perubahan Jadwal
                                                            </p>
                                                        </div>
                                                        <div className='facility-item facility-flex mb-2'>
                                                            <img
                                                                src={Cabin}
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                            <p className='ms-2 mb-0'>
                                                                Bagasi Kabin
                                                                7kg
                                                            </p>
                                                        </div>
                                                        <div className='facility-item facility-flex mb-2'>
                                                            <img
                                                                src={Baggage}
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                            <p className='ms-3 mb-0'>
                                                                Bagasi 20kg
                                                            </p>
                                                        </div>
                                                        <div className='facility-item facility-flex mb-2'>
                                                            <img
                                                                src={
                                                                    Entertainment
                                                                }
                                                                alt=''
                                                                loading='eager'
                                                            />
                                                            <p className='ms-2 mb-0'>
                                                                Hiburan
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            )
                        })
                    ) : (
                        <Container className='d-flex flex-column align-items-center justify-content-center'>
                            <img src={Ticket404} loading='eager' />
                            <h3 className='text-secondary pt-4'>
                                <strong>
                                    Maaf, tidak ada penerbangan yang sesuai
                                    dengan kriteria anda
                                </strong>
                            </h3>
                            <Button
                                className='btn-switch mt-3'
                                variant='secondary-outlined'
                                onClick={() => setShowSearch((prev) => !prev)}
                            >
                                Ubah Pencarian
                            </Button>
                        </Container>
                    )}

                    {/* 2 */}

                    {/* 3 */}

                    {/* 4 */}

                    {/* 5 */}
                    {/* <Accordion className="flight-content pb-2">
            <Accordion.Item eventKey="4">
              <div className="free-baggage" as="h5" style={{ width: "13rem" }}>
                <li className="p-1">Gratis 20 Kg Bagasi</li>
              </div>
              <Accordion.Header>
                <Row className="flight-header">
                  <Col className="ms-4">
                    <div className="flight-box-airline flight-flex">
                      <img src={AirAsia} />
                      <p className="mt-2">Indonesia AirAsia</p>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>22:15</strong>
                        </h3>
                        <p>CGK</p>
                      </div>
                      <span className="has-text-grey-dark">
                        <img src={Arrow} alt="" />
                      </span>
                      <div>
                        <h3>
                          <strong>00:05</strong>
                          <span className="plus-one-day p-1">+1d</span>
                        </h3>
                        <p>DPS</p>
                      </div>
                    </div>
                  </Col>
                  <Col className="me-5">
                    <div className="flight-box-time time-flight-flex">
                      <div>
                        <h3>
                          <strong>1h 50m</strong>
                        </h3>
                        <p className="txt-langsung">Langsung</p>
                      </div>
                      <div className="baggage time-flight-flex">
                        <img src={Baggage} alt="baggage" />
                        <h4>20kg</h4>
                      </div>
                    </div>
                  </Col>
                  <Col className="flight-box-price pt-3">
                    <h3>
                      <strong>US$47.49</strong>
                      <span> /Org</span>
                    </h3>
                  </Col>
                  <Col className="pt-2">
                    <Button
                      variant="light"
                      type="submit"
                      className="btn-flight my-2"
                    >
                      Pilih Penerbangan
                    </Button>
                  </Col>
                </Row>
              </Accordion.Header>
              <Accordion.Body className="flight-detail-content p-4">
                <Row>
                  <Col xs={2} className="pt-3 ms-4">
                    <div className="flight-detail-airline-info flight-flex">
                      <img src={AirAsia} />
                      <h4 className="mt-4">Indonesia AirAsia</h4>
                      <h4>
                        <span>GK566</span>
                      </h4>
                    </div>
                  </Col>
                  <Col xs={7}>
                    <Row>
                      <Col xs={1} className="time-line p-0">
                        <img src={Slider} alt="" />
                      </Col>
                      <Col xs={11} className="timeline-info pt-3">
                        <div className="timeline-departure timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-departure-time">
                              <strong>22:15</strong>
                            </h2>
                            <p className="timeline-departure-date">
                              11 Dec 2022
                            </p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-departure-city mb-0">
                              Jakarta (CGK)
                            </p>
                            <p className="timeline-departure-airport mb-0">
                              Soekarno Hatta International Airport
                            </p>
                            <p className="timeline-departure-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                        <div className="timeline-duration-wrapper mt-4 mb-4">
                          <p className="timeline-duration">
                            <div className="icon-flex">
                              <img src={Clock} alt="" />
                              1h 50m
                            </div>
                          </p>
                        </div>
                        <div className="timeline-arrival timeline-flex">
                          <div className="timeline-datetime me-5">
                            <h2 className="timeline-arrival-time">
                              <strong>00:05</strong>
                              <span className="plus-one-day-detail p-1">
                                +1d
                              </span>
                            </h2>
                            <p className="timeline-arrival-date">12 Dec 2022</p>
                          </div>
                          <div className="timeline-cityairport">
                            <p className="timeline-arrival-city mb-0">
                              Bali Denpasar (DPS)
                            </p>
                            <p className="timeline-arrival-airport mb-0">
                              Ngurah Rai International Airport
                            </p>
                            <p className="timeline-arrival-terminal">
                              Terminal 2E
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="ms-4">
                    <div className="flight-facility pt-3">
                      <div className="facility-item facility-flex mb-2">
                        <img src={Refund} alt="" />
                        <p className="ms-2 mb-0">Refundable</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Reschedule} alt="" />
                        <p className="ms-2 mb-0">Reschedule</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Cabin} alt="" />
                        <p className="ms-2 mb-0">Cabin Baggage 7kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Baggage} alt="" />
                        <p className="ms-3 mb-0">Baggage 20kg</p>
                      </div>
                      <div className="facility-item facility-flex mb-2">
                        <img src={Entertainment} alt="" />
                        <p className="ms-2 mb-0">Entertainment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}

                    <Card
                        className='payment-content m-4 mt-5'
                        style={{ width: '18rem' }}
                    >
                        {/* <Card.Body>
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
            </Card.Body> */}
                    </Card>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}

export default Tickets
