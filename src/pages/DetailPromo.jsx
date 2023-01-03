import React, { useState, useEffect } from 'react'
import { Header, Footer } from '../components'
import copy from 'copy-to-clipboard'
import {
    Container,
    Row,
    Col,
    Form,
    InputGroup,
    Button,
    Alert,
    Toast,
    ToastHeader,
} from 'react-bootstrap'
import SearchFlight from '../components/Homepage/SearchFlight'
import promo_banner from '../assets/images/promo-banner.webp'
import payment_img from '../assets/images/payment-img.webp'
import '../assets/styles/detailPromo.css'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { retrivePromo } from '../redux/slices/promoSlice'
import { toast, ToastContainer } from 'react-toastify'

const DetailPromo = () => {
    const { loading, status, message, promoById } = useSelector(
        (state) => state.promo
    )
    const dispatch = useDispatch()
    const { promoId } = useParams()
    useEffect(() => {
        dispatch(retrivePromo(promoId))
    }, [dispatch])

    let [copyText, setCopyText] = useState(promoById.promo_code)

    // Buat objek Date dari tanggal mulai dan tanggal selesai
    const startDate = new Date(promoById.createdAt)
    const endDate = new Date(promoById.expire)

    // Hitung selisih hari antara tanggal selesai dan tanggal mulai
    const diffDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))

    // Tampilkan periode promosi
    const period = `${startDate.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
    })} - ${endDate.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })} (${diffDays} hari)`

    copyText = promoById.promo_code

    const handleCopyText = (e) => {
        setCopyText(e.target.value)
    }

    const copyToClipboard = () => {
        copy(copyText)
    }

    const [showAlert, setShowAlert] = useState('')

    useEffect(() => {
        showAlert && toast.success(`Kode promo berhasil disalin!`)
    }, [showAlert])

    return (
        <div>
            <Header />
            <section className='jumbotron-section'>
                <img
                    src={promoById.promo_image}
                    alt='promo-banner'
                    className='jumbotron-img'
                />
            </section>
            <SearchFlight />
            {
                <>
                    <section className='promo-section'>
                        <Container>
                            <h2 className='promo-section-title'>
                                {promoById.title}
                            </h2>
                            <h3 className='promo-section-subtitle'>
                                {promoById.desc}
                            </h3>
                            <p className='promo-section-booking'>
                                Bisa booking melalui website atau aplikasi
                                Airpaz
                            </p>
                            <p className='promo-section-periode'>
                                Periode promo {period}
                            </p>
                        </Container>
                    </section>
                    <section className='discount-section'>
                        <Container>
                            {/* {showAlert &&
                toast.success(
                  `Kode ${copyText} berhasil disalin!`
                )} */}
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
                            <Row className='discount-row'>
                                <Col md={6} className='discount-card'>
                                    <h3 className='discount-card-title'>
                                        diskon {promoById.discount}%
                                    </h3>
                                    {/* <p className="discount-card-subtitle">
                    Minimal transaksi Rp 1.500.000
                  </p> */}
                                    <div>
                                        <InputGroup className='mb-3'>
                                            <Form.Control
                                                placeholder="Recipient's username"
                                                aria-label="Recipient's username"
                                                aria-describedby='basic-addon2'
                                                value={copyText}
                                                onChange={handleCopyText}
                                                readOnly
                                            />
                                            <Button
                                                variant='light'
                                                id='button-addon2'
                                                className='copy-button'
                                                onClick={() => {
                                                    copyToClipboard()
                                                    setShowAlert(true)
                                                }}
                                            >
                                                <i className='ri-file-copy-line ri-xl'></i>
                                                <p>Salin</p>
                                            </Button>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className='rules-section'>
                        <Container>
                            <h3 className='rules-section-title'>
                                Syarat & Kondisi
                            </h3>
                            <ol className='rules-section-list'>
                                <li>
                                    <p>Periode Penerbangan: {period}</p>
                                </li>
                                <li>
                                    <p>Periode Perjalanan: Kapan pun</p>
                                </li>
                                <li>
                                    <p>
                                        Promosi ini berlaku setiap hari selama
                                        periode promo.
                                    </p>
                                </li>
                            </ol>
                            <div className='share-discount text-center'>
                                <p>Berbagi dengan teman anda:</p>
                                <div className='share-discount-icon'>
                                    <a href='#'>
                                        <i className='ri-facebook-fill ri-xl'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='ri-twitter-fill ri-xl'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='ri-whatsapp-fill ri-xl'></i>
                                    </a>
                                    <a href='#'>
                                        <i className='ri-mail-fill ri-xl'></i>
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </section>
                </>
            }

            <section className='jenis-pembayaran-section'>
                <Container>
                    <h3 className='jenis-pembayaran-title'>
                        Jenis Pembayaran:
                    </h3>
                    <img
                        className='payment_img'
                        src={payment_img}
                        alt='Metode Pembayaran'
                    />
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default DetailPromo
