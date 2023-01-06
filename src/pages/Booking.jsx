import React, { useState, useEffect } from 'react'
import { Footer, HeaderBooking } from '../components'
import {
    Container,
    Row,
    Col,
    Form,
    Badge,
    Accordion,
    Button,
    Spinner,
} from 'react-bootstrap'
import '../assets/styles/booking.css'
import logo from '../assets/images/binair-logo.svg'
import PhoneInput from 'react-phone-number-input'
import DatePicker from 'react-date-picker'
import ReactFlagsSelect from 'react-flags-select'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { newTrans } from '../redux/slices/transactionSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Booking = () => {
    const [phone, setPhone] = useState()
    // const [value, onChange] = useState(new Date());
    // const [datebirth, setDatebirth] = useState(new Date());
    const [visible, setVisible] = useState('ktp')
    const [nation, setNation] = useState('')
    // const [title, setTitle] = useState("tuan");
    // const [sameContact, setSameContact] = useState(false);
    const [promoCode, setPromoCode] = useState(null)
    const { search, ticketById } = useSelector((state) => state.ticket)
    const { loading, status, message, transactionById } = useSelector(
        (state) => state.transaction
    )

    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const getTotalAmount = () => {
        let total = 0
        total =
            total +
            ticketById.adult_price * search.countDewasa +
            ticketById.child_price * search.countAnak
        return total
    }
    const getAdultPrice = () => {
        let total = 0
        total = total + ticketById.adult_price * search.countDewasa
        return total
    }
    const getChildPrice = () => {
        let total = 0
        total = total + ticketById.child_price * search.countAnak
        return total
    }
    let adultFormInit = []
    let childFormInit = []
    for (let i = 1; i <= search.countDewasa; i++) {
        adultFormInit.push({
            index: i,
            title: 'tuan',
            name: '',
            surname: '',
            datebirth: new Date(),
            nationality: 'indonesia',
            id_card: 'ktp',
            no_ktp: '',
            type: 'adult',
        })
    }
    for (let i = 1; i <= search.countAnak; i++) {
        childFormInit.push({
            index: i,
            title: '',
            name: '',
            surname: '',
            datebirth: new Date(),
            nationality: 'indonesia',
            id_card: '',
            no_ktp: '',
            type: 'child',
        })
    }
    const [adultForm, setAdultForm] = useState(adultFormInit)
    const [childForm, setChildForm] = useState(childFormInit)
    const handleChangeAdult = (e) => {
        const index = e.target.name.split(':')[1] - 1
        const target = e.target.name.split(':')[0]
        setAdultForm((prevFormData) => {
            return {
                ...prevFormData,
                [index]: {
                    ...prevFormData[index],
                    [target]: e.target.value,
                },
            }
        })
    }
    const handleChangeChild = (e) => {
        const index = e.target.name.split(':')[1] - 1
        const target = e.target.name.split(':')[0]
        setChildForm((prevFormData) => {
            return {
                ...prevFormData,
                [index]: {
                    ...prevFormData[index],
                    [target]: e.target.value,
                },
            }
        })
    }
    // const handleChecked = (event, index) =>{
    //     if(sameContact){
    //         setSameContact(false)
    //         setAdultForm(prevFormData => {
    //             return {
    //                 ...prevFormData,
    //                 [index]: {
    //                     ...prevFormData[index],
    //                     title: "",
    //                     name: "",
    //                     surname: "",
    //                 }
    //             }
    //         })
    //     }
    //     else{
    //         setSameContact(true)
    //         setForm(prevFormData =>{
    //             return {
    //                 ...prevFormData,
    //                 title: user.gender=="perempuan" ? `nyonya`: `tuan`,
    //                 name: user.firstname,
    //                 surname: user.lastname,
    //             }
    //         })
    //     }
    // }
    const redirect = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const travelers = []
        for (const property in adultForm) {
            travelers.push(adultForm[property])
        }
        for (const property in childForm) {
            travelers.push(childForm[property])
        }
        const submitForm = {
            ticketsId: ticketById.id,
            promo_code: promoCode ? promoCode : null,
            quantity: {
                adult: search.countDewasa,
                child: search.countAnak,
            },
            traveler: travelers,
        }
        dispatch(newTrans({ submitForm, redirect }))
        console.info({ message })
        if (message === 'promo code not found / invalid') {
            toast.error(message)
        }
    }

    return (
        <div>
            <HeaderBooking />
            <section className='booking-section'>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={8} className='left-section'>
                                <div className='contact-info-session'>
                                    <div className='info-header'>
                                        <h3 className='card-title'>
                                            Informasi Kontak
                                        </h3>
                                    </div>
                                    <div className='info-content'>
                                        <Row>
                                            <Col
                                                md={8}
                                                className='left-col-section'
                                            >
                                                <Form.Group className='mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0'>
                                                    <Form.Label>
                                                        <h4>Pilih Kontak</h4>
                                                    </Form.Label>
                                                    <br />
                                                    <select
                                                        name='contact'
                                                        className='dropdown-toggle'
                                                    >
                                                        <option value=''>
                                                            {user?.gender ==
                                                            'perempuan'
                                                                ? `Ny. ${user.firstname} ${user.lastname}`
                                                                : `Tn. ${user.firstname} ${user.lastname}`}
                                                        </option>
                                                    </select>
                                                </Form.Group>
                                            </Col>
                                            <Col
                                                md={8}
                                                className='left-col-section'
                                            >
                                                <Form.Group className='mb-4 border border-top-0 border-start-0 border-end-0 rounded-0 p-0'>
                                                    <Form.Label>
                                                        <h4>
                                                            Gelar{' '}
                                                            <span className='required'>
                                                                *
                                                            </span>
                                                        </h4>
                                                    </Form.Label>
                                                    <br />
                                                    <select
                                                        name='title'
                                                        className='dropdown-toggle'
                                                        value={
                                                            user?.gender ==
                                                            'perempuan'
                                                                ? `nyonya`
                                                                : `tuan`
                                                        }
                                                    >
                                                        <option value='tuan'>
                                                            Tuan
                                                        </option>
                                                        <option value='nyonya'>
                                                            Nyonya
                                                        </option>
                                                        <option value='nona'>
                                                            Nona
                                                        </option>
                                                    </select>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                md={4}
                                                className='left-col-section'
                                            >
                                                <Form.Group className='mb-4'>
                                                    <Form.Label>
                                                        <h4>
                                                            Nama
                                                            <span className='required'>
                                                                {' '}
                                                                *
                                                            </span>
                                                        </h4>
                                                    </Form.Label>
                                                    <Form.Control
                                                        autoComplete='off'
                                                        required
                                                        name='name'
                                                        className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                        placeholder='ex: Rangga Laksana'
                                                        value={user.firstname}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4} className='ps-0'>
                                                <Form.Group className='mb-4'>
                                                    <Form.Label>
                                                        <h4>
                                                            Nama Belakang
                                                            <span className='required'>
                                                                {' '}
                                                                *
                                                            </span>
                                                        </h4>
                                                    </Form.Label>
                                                    <Form.Control
                                                        autoComplete='off'
                                                        required
                                                        name='lastname'
                                                        className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                        placeholder='ex: Haryanto'
                                                        value={user.lastname}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col
                                                md={4}
                                                className='left-col-section'
                                            >
                                                <Form.Group className='mb-4'>
                                                    <Form.Label>
                                                        <h4>
                                                            Nomor Ponsel
                                                            <span className='required'>
                                                                {' '}
                                                                *
                                                            </span>
                                                        </h4>
                                                    </Form.Label>
                                                    <PhoneInput
                                                        international
                                                        defaultCountry='ID'
                                                        countryCallingCodeEditable={
                                                            false
                                                        }
                                                        value={phone}
                                                        onChange={setPhone}
                                                        className='form-input-phone'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={4} className='ps-0'>
                                                <Form.Group className=' mb-4'>
                                                    <Form.Label>
                                                        <h4>
                                                            Email
                                                            <span className='required'>
                                                                {' '}
                                                                *
                                                            </span>
                                                        </h4>
                                                    </Form.Label>
                                                    <Form.Control
                                                        autoComplete='off'
                                                        required
                                                        name='email'
                                                        className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                        placeholder='ex: yourmail@binair.com'
                                                        value={user.email}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <div className='traveler-info-section'>
                                    <div className='info-header'>
                                        <h3 className='card-title'>
                                            Informasi Traveler
                                        </h3>
                                    </div>
                                    <div className='info-content'>
                                        {/* Form untuk dewasa */}
                                        {adultFormInit.map((item) => {
                                            return (
                                                <Container key={item.ids}>
                                                    <Row className='traveler-type'>
                                                        <Col
                                                            md={2}
                                                            sm={3}
                                                            xs={4}
                                                        >
                                                            {' '}
                                                            <h3 className='card-title'>
                                                                <i className='ri-user-line icon'></i>
                                                                <span>
                                                                    Traveler{' '}
                                                                    {item.index}
                                                                </span>
                                                            </h3>
                                                        </Col>
                                                        <Col
                                                            md={1}
                                                            sm={1}
                                                            xs={1}
                                                            className='text-center'
                                                        >
                                                            {' '}
                                                            <p> | </p>{' '}
                                                        </Col>
                                                        <Col
                                                            md={2}
                                                            sm={3}
                                                            xs={7}
                                                        >
                                                            {' '}
                                                            <p>Dewasa</p>{' '}
                                                        </Col>
                                                        <Col
                                                            md={7}
                                                            sm={5}
                                                            xs={12}
                                                            className='d-flex flex-row-reverse checklist-box'
                                                        >
                                                            <Form.Group
                                                                className=''
                                                                controlId='formBasicCheckbox'
                                                            >
                                                                <Form.Check
                                                                    type='checkbox'
                                                                    label='Sama dengan Kontak'
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row className='traveler-info'>
                                                        <p className='info'>
                                                            Nama sesuai
                                                            KTP/paspor tanpa
                                                            gelar dan tanda baca
                                                        </p>
                                                        <Col md={8}>
                                                            <Form.Group className=' mb-4 mt-2 border border-top-0 border-start-0 border-end-0'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Pilih
                                                                        Data
                                                                        Traveler
                                                                    </h4>
                                                                </Form.Label>
                                                                <br />
                                                                <select
                                                                    name='traveler'
                                                                    className='dropdown-toggle '
                                                                >
                                                                    <option value='tuan'>
                                                                        {user?.gender ==
                                                                        'perempuan'
                                                                            ? `Ny. ${user.firstname} ${user.lastname}`
                                                                            : `Tn. ${user.firstname} ${user.lastname}`}
                                                                    </option>
                                                                </select>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={8}>
                                                            <Form.Group className=' mb-4 border border-top-0 border-start-0 border-end-0'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Gelar
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <br />
                                                                <select
                                                                    name={`title:${item.index}`}
                                                                    className='dropdown-toggle '
                                                                    // onChange={(e) => setTitle(e.target.value)}
                                                                    onChange={
                                                                        handleChangeAdult
                                                                    }
                                                                    value={
                                                                        adultForm[
                                                                            item.index -
                                                                                1
                                                                        ].title
                                                                    }
                                                                >
                                                                    <option value='tuan'>
                                                                        Tuan
                                                                    </option>
                                                                    <option value='nyonya'>
                                                                        Nyonya
                                                                    </option>
                                                                    <option value='nona'>
                                                                        Nona
                                                                    </option>
                                                                </select>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row className='traveler-row'>
                                                        <Col md={4}>
                                                            <Form.Group className=' mb-4'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Nama
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <Form.Control
                                                                    autoComplete='off'
                                                                    required
                                                                    name={`name:${item.index}`}
                                                                    className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                                    placeholder='ex: Rangga Laksana'
                                                                    onChange={
                                                                        handleChangeAdult
                                                                    }
                                                                    value={
                                                                        adultForm[
                                                                            item.index -
                                                                                1
                                                                        ].name
                                                                    }
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className=' mb-4'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Nama
                                                                        Belakang
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <Form.Control
                                                                    autoComplete='off'
                                                                    required
                                                                    name={`surname:${item.index}`}
                                                                    className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                                    placeholder='ex: Miller'
                                                                    onChange={
                                                                        handleChangeAdult
                                                                    }
                                                                    value={
                                                                        adultForm[
                                                                            item.index -
                                                                                1
                                                                        ]
                                                                            .surname
                                                                    }
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row className='traveler-row'>
                                                        <Col md={8}>
                                                            <Form.Group className=' mb-4 border border-top-0 border-start-0 border-end-0 rounded-0'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Tanggal
                                                                        Lahir
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <br></br>
                                                                <DatePicker
                                                                    // onChange={handleDateChangeAdult(item.index-1)}
                                                                    value={
                                                                        adultForm[
                                                                            item.index -
                                                                                1
                                                                        ]
                                                                            .datebirth
                                                                    }
                                                                    clearIcon={
                                                                        null
                                                                    }
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row className='traveler-row'>
                                                        <Col md={8}>
                                                            <Form.Group className='mb-2 border border-top-0 border-start-0 border-end-0'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Tipe
                                                                        Dokumen
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <br />
                                                                <select
                                                                    name={`id_card:${item.index}`}
                                                                    className='dropdown-toggle'
                                                                    // onChange={(e)=>(handleChange(e))}
                                                                    onChange={
                                                                        handleChangeAdult
                                                                    }
                                                                    // onChange={handleChange}
                                                                    value={
                                                                        adultForm[
                                                                            item.index -
                                                                                1
                                                                        ]
                                                                            .id_card
                                                                    }
                                                                >
                                                                    <option value='ktp'>
                                                                        Kartu
                                                                        Tanda
                                                                        Penduduk
                                                                    </option>
                                                                    <option value='paspor'>
                                                                        Paspor
                                                                    </option>
                                                                </select>
                                                            </Form.Group>
                                                            <p className='note-document-type'>
                                                                Jika Anda warga
                                                                negara asing,
                                                                silahkan pilih
                                                                paspor.
                                                            </p>
                                                        </Col>
                                                        {adultForm[
                                                            item.index - 1
                                                        ].id_card === 'ktp' && (
                                                            <Col md={8}>
                                                                <Form.Group className='mt-3 mb-3'>
                                                                    <Form.Label>
                                                                        <h4>
                                                                            Nomor
                                                                            KTP
                                                                            <span className='required'>
                                                                                {' '}
                                                                                *
                                                                            </span>
                                                                        </h4>
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        autoComplete='off'
                                                                        required
                                                                        name={`no_ktp:${item.index}`}
                                                                        className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                                        placeholder='ex: 17459274810102'
                                                                        onChange={
                                                                            handleChangeAdult
                                                                        }
                                                                        value={
                                                                            adultForm[
                                                                                item.index -
                                                                                    1
                                                                            ]
                                                                                .no_ktp
                                                                        }
                                                                    />
                                                                </Form.Group>
                                                            </Col>
                                                        )}

                                                        {adultForm[
                                                            item.index - 1
                                                        ].id_card ===
                                                            'paspor' && (
                                                            <Row className='paspor-row'>
                                                                <Col md={3}>
                                                                    <Form.Group className='mt-3 mb-3'>
                                                                        <Form.Label>
                                                                            <h4>
                                                                                Nomor
                                                                                Paspor
                                                                                <span className='required'>
                                                                                    {' '}
                                                                                    *
                                                                                </span>
                                                                            </h4>
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            autoComplete='off'
                                                                            required
                                                                            name={`no_ktp:${item.index}`}
                                                                            className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                                            placeholder='ex: X1520212'
                                                                            onChange={
                                                                                handleChangeAdult
                                                                            }
                                                                            value={
                                                                                adultForm[
                                                                                    item.index -
                                                                                        1
                                                                                ]
                                                                                    .no_ktp
                                                                            }
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <Form.Group className='mt-3 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0 p-0'>
                                                                        <Form.Label>
                                                                            <h4>
                                                                                Negara
                                                                                Penerbit
                                                                                <span className='required'>
                                                                                    {' '}
                                                                                    *
                                                                                </span>
                                                                            </h4>
                                                                        </Form.Label>
                                                                        <ReactFlagsSelect
                                                                            selected={
                                                                                nation
                                                                            }
                                                                            onSelect={(
                                                                                code
                                                                            ) =>
                                                                                setNation(
                                                                                    code
                                                                                )
                                                                            }
                                                                            placeholder='Pilih Negara'
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <Form.Group className='mt-3 mb-3 border border-top-0 border-start-0 border-end-0 rounded-0 p-0'>
                                                                        <Form.Label>
                                                                            <h4>
                                                                                Berlaku
                                                                                Hingga
                                                                                <span className='required'>
                                                                                    {' '}
                                                                                    *
                                                                                </span>
                                                                            </h4>
                                                                        </Form.Label>
                                                                        <br></br>
                                                                        {/* <DatePicker onChange={onChange} value={value} clearIcon={null}/> */}
                                                                        <DatePicker
                                                                            clearIcon={
                                                                                null
                                                                            }
                                                                        />
                                                                    </Form.Group>
                                                                </Col>
                                                            </Row>
                                                        )}
                                                    </Row>
                                                </Container>
                                            )
                                        })}

                                        {/* Form untuk anak-anak */}
                                        {childFormInit.map((item) => {
                                            return (
                                                <Container>
                                                    <Row className='traveler-type'>
                                                        <Col
                                                            md={2}
                                                            sm={3}
                                                            xs={4}
                                                        >
                                                            {' '}
                                                            <h3 className='card-title'>
                                                                <i className='ri-user-line icon'></i>
                                                                <span>
                                                                    Traveler{' '}
                                                                    {item.index}
                                                                </span>
                                                            </h3>
                                                        </Col>
                                                        <Col
                                                            md={1}
                                                            sm={1}
                                                            xs={1}
                                                            className='text-center'
                                                        >
                                                            {' '}
                                                            <p> | </p>{' '}
                                                        </Col>
                                                        <Col
                                                            md={2}
                                                            sm={3}
                                                            xs={7}
                                                        >
                                                            {' '}
                                                            <p>
                                                                Anak-anak
                                                            </p>{' '}
                                                        </Col>
                                                        <Col
                                                            md={7}
                                                            sm={5}
                                                            xs={12}
                                                            className='d-flex flex-row-reverse checklist-box'
                                                        ></Col>
                                                    </Row>
                                                    <Row className='traveler-info'>
                                                        <p className='info'>
                                                            Nama sesuai
                                                            KTP/paspor tanpa
                                                            gelar dan tanda baca
                                                        </p>
                                                        <Col md={8}>
                                                            <Form.Group className=' mb-4 mt-2 border border-top-0 border-start-0 border-end-0'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Pilih
                                                                        Data
                                                                        Traveler
                                                                    </h4>
                                                                </Form.Label>
                                                                <br />
                                                                <select
                                                                    name='traveler'
                                                                    className='dropdown-toggle '
                                                                >
                                                                    <option value='tuan'>
                                                                        {user?.gender ==
                                                                        'perempuan'
                                                                            ? `Ny. ${user.firstname} ${user.lastname}`
                                                                            : `Tn. ${user.firstname} ${user.lastname}`}
                                                                    </option>
                                                                </select>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row className='traveler-row'>
                                                        <Col md={4}>
                                                            <Form.Group className=' mb-4'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Nama
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <Form.Control
                                                                    autoComplete='off'
                                                                    required
                                                                    name={`name:${item.index}`}
                                                                    className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                                    placeholder='ex: Rangga Laksana'
                                                                    onChange={
                                                                        handleChangeChild
                                                                    }
                                                                    value={
                                                                        childForm[
                                                                            item.index -
                                                                                1
                                                                        ].name
                                                                    }
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                        <Col md={4}>
                                                            <Form.Group className=' mb-4'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Nama
                                                                        Belakang
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <Form.Control
                                                                    autoComplete='off'
                                                                    required
                                                                    name={`surname:${item.index}`}
                                                                    className='form-input border border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                                                    placeholder='ex: Miller'
                                                                    onChange={
                                                                        handleChangeChild
                                                                    }
                                                                    value={
                                                                        childForm[
                                                                            item.index -
                                                                                1
                                                                        ]
                                                                            .surname
                                                                    }
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                    <Row className='traveler-row'>
                                                        <Col md={8}>
                                                            <Form.Group className=' mb-4 border border-top-0 border-start-0 border-end-0 rounded-0'>
                                                                <Form.Label>
                                                                    <h4>
                                                                        Tanggal
                                                                        Lahir
                                                                        <span className='required'>
                                                                            {' '}
                                                                            *
                                                                        </span>
                                                                    </h4>
                                                                </Form.Label>
                                                                <br></br>
                                                                <DatePicker
                                                                    // onChange={handleDateChangeChild}
                                                                    value={
                                                                        childForm[
                                                                            item.index -
                                                                                1
                                                                        ]
                                                                            .datebirth
                                                                    }
                                                                    clearIcon={
                                                                        null
                                                                    }
                                                                />
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='adding-section'>
                                    <div className='info-header'>
                                        <h3 className='card-title'>Tambahan</h3>
                                    </div>
                                    <Row className='rute-detail'>
                                        <Col md={10} sm={10} xs={10}>
                                            <p>
                                                {ticketById.from} -{' '}
                                                {ticketById.to}{' '}
                                            </p>
                                        </Col>
                                        <Col
                                            md={2}
                                            sm={2}
                                            xs={2}
                                            className='d-flex flex-row-reverse'
                                        >
                                            <p>ID7511</p>
                                        </Col>
                                    </Row>
                                    <Row className='baggage-weight-row'>
                                        <Col md={8}>
                                            <Form.Group className='border border-top-0 border-start-0 border-end-0 rounded-0 p-0'>
                                                <Form.Label>
                                                    <h4>Dewasa 1</h4>
                                                </Form.Label>
                                                <br />
                                                <select
                                                    name='kontak'
                                                    className='dropdown-toggle baggage-weight-dropdown'
                                                >
                                                    <option value='20kg'>
                                                        20kg - Gratis
                                                    </option>
                                                    <option value='25kg'>
                                                        5+20kg - Rp292.500
                                                    </option>
                                                    <option value='30kg'>
                                                        10+20kg - Rp585.000
                                                    </option>
                                                    <option value='40kg'>
                                                        20+20kg - Rp1.170.000
                                                    </option>
                                                    <option value='50kg'>
                                                        30+20kg - Rp1.755.000
                                                    </option>
                                                    <option value='60kg'>
                                                        40+20kg - Rp2.340.000
                                                    </option>
                                                </select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={4} className='right-section'>
                                <div className='flight-detail-sections'>
                                    <div className='info-header'>
                                        <h3 className='card-title'>
                                            Rincian Penerbangan
                                        </h3>
                                    </div>
                                    <div className='info-content'>
                                        <Row className='departure-flight align-items-center'>
                                            <Col md={8} sm={8} xs={8}>
                                                <h3>
                                                    Penerbangan Keberangkatan
                                                </h3>
                                                <p>{ticketById.date_start}</p>
                                            </Col>
                                            <Col
                                                md={4}
                                                sm={4}
                                                xs={4}
                                                className='d-flex flex-row-reverse'
                                            >
                                                <Badge>
                                                    {' '}
                                                    Gratis 20kg bagasi{' '}
                                                </Badge>
                                            </Col>
                                        </Row>
                                        <Row className='flight-type align-items-center'>
                                            <Col md={8} sm={8} xs={8}>
                                                <h3>BinAir</h3>
                                                <p>QZ7518</p>
                                            </Col>
                                            <Col
                                                md={4}
                                                sm={4}
                                                xs={4}
                                                className='d-flex flex-row-reverse'
                                            >
                                                <img
                                                    src={logo}
                                                    alt='logo'
                                                    className='logo-flight'
                                                    loading='eager'
                                                />
                                            </Col>
                                        </Row>
                                        <hr></hr>
                                        {/* timeline pesawat*/}
                                        <div className='flight-timeline'>
                                            <div className='departure-timeline bullet timeline-object not-complete'>
                                                <div className='timeline-status'>
                                                    {' '}
                                                </div>
                                                <Row className='timeline-content pb-2'>
                                                    <Col md={5} sm={5} xs={5}>
                                                        <h3>
                                                            {
                                                                ticketById.departure_time
                                                            }
                                                        </h3>
                                                        <p>
                                                            {
                                                                ticketById.date_start
                                                            }
                                                        </p>
                                                    </Col>
                                                    <Col md={7} sm={7} xs={7}>
                                                        <h3>
                                                            {ticketById.from}{' '}
                                                        </h3>
                                                        <p>
                                                            {
                                                                ticketById.airport_from
                                                            }
                                                        </p>
                                                        
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className='duration'>
                                                <p>
                                                    <span>
                                                        <i className='ri-time-line'></i>
                                                    </span>{' '}
                                                    1h 50m
                                                </p>
                                            </div>
                                            <div className='homecoming-timeline bullet timeline-object complete'>
                                                <div className='timeline-status'>
                                                    {' '}
                                                </div>
                                                <Row className='timeline-content'>
                                                    <Col md={5} sm={5} xs={5}>
                                                        <h3>
                                                            {
                                                                ticketById.arrival_time
                                                            }
                                                        </h3>
                                                        <p>
                                                            {
                                                                ticketById.date_start
                                                            }
                                                        </p>
                                                    </Col>
                                                    <Col md={7} sm={7} xs={7}>
                                                        <h3>
                                                            {ticketById.to}{' '}
                                                        </h3>
                                                        <p>
                                                            {
                                                                ticketById.airport_to
                                                            }
                                                        </p>
                                                        
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className='flight-facility'>
                                            <ul>
                                                <li>
                                                    <p className='information'>
                                                        <i className='ri-information-line icon'></i>
                                                        <span>
                                                            {' '}
                                                            Bisa Refund
                                                        </span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='information'>
                                                        <i className='ri-information-line icon'></i>
                                                        <span>
                                                            {' '}
                                                            Perubahan Jadwal
                                                        </span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className='information'>
                                                        <i className='ri-information-line icon'></i>
                                                        <span>
                                                            {' '}
                                                            Perkiraan Penerbitan
                                                            Tiket
                                                        </span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className='ri-checkbox-circle-line icon'></i>
                                                        <span>
                                                            {' '}
                                                            Bagasi Kabin 7kg
                                                        </span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className='ri-suitcase-3-line icon'></i>
                                                        <span>
                                                            {' '}
                                                            Bagasi 20kg
                                                        </span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <i className='ri-gamepad-line icon'></i>
                                                        <span> Hiburan</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* start voucher section */}
                                <div className='voucher-section'>
                                    <div className='voucher-header'>
                                        <h3>Voucher/Kode Promo</h3>
                                    </div>
                                    <div className='voucher-content'>
                                        <Row>
                                            <Form.Group className='mb-4 ps-0 pe-0'>
                                                <Form.Control
                                                    autoComplete='off'
                                                    required
                                                    name='name'
                                                    className='form-input'
                                                    placeholder='Masukkan Kode Disini'
                                                    value={promoCode}
                                                    onChange={(e) =>
                                                        setPromoCode(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Row>
                                    </div>
                                </div>
                                {/* end voucher section */}
                                <div className='price-section'>
                                    <div className='price-header'>
                                        <h2 className='card-title'>
                                            Keterangan Harga
                                        </h2>
                                    </div>
                                    <div className='price-content'>
                                        <Accordion
                                            defaultActiveKey={['0']}
                                            alwaysOpen
                                        >
                                            <Accordion.Item eventKey='0'>
                                                <Accordion.Header>
                                                    <Row>
                                                        <Col
                                                            md={7}
                                                            sm={7}
                                                            xs={7}
                                                            className='accordion-timeline'
                                                        >
                                                            <h3>
                                                                Berangkat (
                                                                {
                                                                    search.from
                                                                        .code
                                                                }{' '}
                                                                <span>
                                                                    <i className='ri-arrow-right-line'></i>
                                                                </span>{' '}
                                                                {search.to.code}
                                                                )
                                                            </h3>
                                                        </Col>
                                                        <Col
                                                            md={5}
                                                            sm={5}
                                                            xs={5}
                                                            className='accordion-timeline d-flex flex-row-reverse'
                                                        >
                                                            <h3>
                                                                {getTotalAmount()?.toLocaleString(
                                                                    'id-ID',
                                                                    {
                                                                        style: 'currency',
                                                                        currency:
                                                                            'IDR',
                                                                    }
                                                                )}{' '}
                                                            </h3>
                                                        </Col>
                                                    </Row>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Col
                                                            md={7}
                                                            sm={7}
                                                            xs={6}
                                                            className='accordion-timeline'
                                                        >
                                                            <p>
                                                                Dewasa x{' '}
                                                                {
                                                                    search.countDewasa
                                                                }
                                                            </p>
                                                        </Col>
                                                        <Col
                                                            md={5}
                                                            sm={5}
                                                            xs={6}
                                                        >
                                                            <p className='d-flex flex-row-reverse'>
                                                                {getAdultPrice()?.toLocaleString(
                                                                    'id-ID',
                                                                    {
                                                                        style: 'currency',
                                                                        currency:
                                                                            'IDR',
                                                                    }
                                                                )}
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    {search.countAnak > 0 && (
                                                        <Row>
                                                            <Col
                                                                md={7}
                                                                sm={7}
                                                                xs={6}
                                                                className='accordion-timeline'
                                                            >
                                                                <p>
                                                                    Anak-anak x{' '}
                                                                    {
                                                                        search.countAnak
                                                                    }
                                                                </p>
                                                            </Col>
                                                            <Col
                                                                md={5}
                                                                sm={5}
                                                                xs={6}
                                                            >
                                                                <p className='d-flex flex-row-reverse'>
                                                                    {getChildPrice()?.toLocaleString(
                                                                        'id-ID',
                                                                        {
                                                                            style: 'currency',
                                                                            currency:
                                                                                'IDR',
                                                                        }
                                                                    )}
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                    )}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            {ticketById.type == 'roundtrip' && (
                                                <Accordion.Item eventKey='1'>
                                                    <Accordion.Header>
                                                        <Row>
                                                            <Col
                                                                md={7}
                                                                sm={7}
                                                                xs={7}
                                                                className='accordion-timeline'
                                                            >
                                                                <h3>
                                                                    Pulang (
                                                                    {
                                                                        search
                                                                            .to
                                                                            .code
                                                                    }{' '}
                                                                    <span>
                                                                        <i className='ri-arrow-right-line'></i>
                                                                    </span>{' '}
                                                                    {
                                                                        search
                                                                            .from
                                                                            .code
                                                                    }
                                                                    )
                                                                </h3>
                                                            </Col>
                                                            <Col
                                                                md={5}
                                                                sm={5}
                                                                xs={5}
                                                                className='accordion-timeline d-flex flex-row-reverse'
                                                            >
                                                                <h3>
                                                                    {getTotalAmount()?.toLocaleString(
                                                                        'id-ID',
                                                                        {
                                                                            style: 'currency',
                                                                            currency:
                                                                                'IDR',
                                                                        }
                                                                    )}
                                                                </h3>
                                                            </Col>
                                                        </Row>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <Row>
                                                            <Col
                                                                md={7}
                                                                sm={7}
                                                                xs={6}
                                                                className='accordion-timeline'
                                                            >
                                                                <p>
                                                                    Dewasa x{' '}
                                                                    {
                                                                        search.countDewasa
                                                                    }
                                                                </p>
                                                            </Col>
                                                            <Col
                                                                md={5}
                                                                sm={5}
                                                                xs={6}
                                                            >
                                                                <p className='d-flex flex-row-reverse'>
                                                                    {getAdultPrice()}
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                        {search.countAnak >
                                                            0 && (
                                                            <Row>
                                                                <Col
                                                                    md={7}
                                                                    sm={7}
                                                                    xs={6}
                                                                    className='accordion-timeline'
                                                                >
                                                                    <p>
                                                                        Anak-anak
                                                                        x{' '}
                                                                        {
                                                                            search.countAnak
                                                                        }
                                                                    </p>
                                                                </Col>
                                                                <Col
                                                                    md={5}
                                                                    sm={5}
                                                                    xs={6}
                                                                >
                                                                    <p className='d-flex flex-row-reverse'>
                                                                        {getChildPrice()?.toLocaleString(
                                                                            'id-ID',
                                                                            {
                                                                                style: 'currency',
                                                                                currency:
                                                                                    'IDR',
                                                                            }
                                                                        )}
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        )}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )}
                                        </Accordion>
                                    </div>
                                    <div className='price-total'>
                                        <Row>
                                            <Col md={7} sm={7} xs={7}>
                                                <h3>Total Harga</h3>
                                            </Col>
                                            <Col md={5} sm={5} xs={5}>
                                                <h3 className='d-flex flex-row-reverse'>
                                                    {getTotalAmount()?.toLocaleString(
                                                        'id-ID',
                                                        {
                                                            style: 'currency',
                                                            currency: 'IDR',
                                                        }
                                                    )}
                                                </h3>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                {/* <Link to={`/payment`}>
                                <Button className="continue-btn">Lanjutkan</Button>
                            </Link> */}
                                <Button
                                    className='continue-btn'
                                    type='submit'
                                    onClick={handleSubmit}
                                >
                                    {loading ? (
                                        <Spinner
                                            animation='border'
                                            variant='info'
                                        />
                                    ) : (
                                        'Lanjutkan'
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Booking
