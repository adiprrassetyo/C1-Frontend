import { Squash as Hamburger } from 'hamburger-react'
import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Row, Col, Spinner } from 'react-bootstrap'
import { useOutletContext, useParams } from 'react-router-dom'
import {
    SingleDatePicker,
    RangeDatePicker,
} from 'react-google-flight-datepicker'
import TimePicker from 'react-bootstrap-time-picker'
import { Typeahead } from 'react-bootstrap-typeahead'
import axios from 'axios'
import moment from 'moment/moment'
import { useDispatch, useSelector } from 'react-redux'
import { retriveTicket, updateTickets } from '../../redux/slices/ticketSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Loader from 'react-loader-advanced'
import Nav from './Nav'

const EditTicket = () => {
    const { loading, ticketById } = useSelector((state) => state.ticket)
    const [isToggled, setIsToggled] = useOutletContext()
    const [from, setFrom] = useState([
        { code: '', city: ticketById.from, airport: ticketById.airport_from },
    ])
    const [to, setTo] = useState([
        { code: '', city: ticketById.to, airport: ticketById.airport_to },
    ])
    const [options, setOptions] = useState([])
    const [type, setType] = useState(ticketById.type)
    const [departure_time, setDeparture_time] = useState(
        ticketById.departure_time
    )
    const [isAvailable, setIsAvailable] = useState(ticketById.available)
    const [arrival_time, setArrival_time] = useState(ticketById.arrival_time)
    const dispatch = useDispatch()
    const { ticketId } = useParams()

    useEffect(() => {
        dispatch(retriveTicket(ticketId))
    }, [ticketId, dispatch])

    useEffect(() => {
        setFormData({
            date_start: ticketById.date_start,
            date_end: ticketById.date_end ? ticketById.date_end : null,
            adult_price: ticketById.adult_price,
            child_price: ticketById.child_price,
            init_stock: ticketById.init_stock,
        })
        setType(ticketById.type)
        setDeparture_time(ticketById.departure_time)
        setIsAvailable(ticketById.available)
        setArrival_time(ticketById.arrival_time)
        setFrom([
            {
                code: '',
                city: ticketById.from,
                airport: ticketById.airport_from,
            },
        ])
        setTo([
            { code: '', city: ticketById.to, airport: ticketById.airport_to },
        ])
    }, [ticketById])

    const [formData, setFormData] = useState({
        date_start: ticketById.date_start,
        date_end: ticketById.date_end ? ticketById.date_end : null,
        adult_price: ticketById.adult_price,
        child_price: ticketById.child_price,
        init_stock: ticketById.init_stock,
    })

    const redirect = useNavigate()

    useEffect(() => {
        const getOptions = async () => {
            const res = await axios.get(
                'https://c1-backend-production.up.railway.app/api/v1/search'
            )
            setOptions(res.data.data)
        }

        getOptions()
    }, [])

    const handleType = (e) => {
        setType(e.target.value)
    }

    const startEndDateChange = (startDt, endDt) => {
        if (startDt) {
            setFormData((prev) => ({
                ...prev,
                date_start: moment(startDt).format('MM-DD-YYYY'),
            }))
            endDt === null &&
                setFormData((prev) => ({ ...prev, date_end: endDt }))
        }
        if (endDt) {
            const momentEndDt = moment(endDt, 'MM/DD/YYYY')
            if (momentEndDt.isValid()) {
                setFormData((prev) => ({
                    ...prev,
                    date_end: moment(endDt).format('MM-DD-YYYY'),
                }))
            }
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = event.target //event target destructuring

        setFormData((prevFormData) => {
            //set State Value
            return {
                ...prevFormData, //take prev state to new object
                [name]: type === 'checkbox' ? checked : value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(
            updateTickets({
                formData: {
                    ...formData,
                    adult_price: parseInt(formData.adult_price),
                    child_price: parseInt(formData.child_price),
                    type,
                    from: from[0]?.city,
                    to: to[0]?.city,
                    airport_from: from[0].airport,
                    airport_to: to[0].airport,
                    init_stock: parseInt(formData.init_stock),
                    curr_stock: parseInt(formData.init_stock),
                    available: isAvailable,
                    departure_time,
                    arrival_time,
                },
                id: ticketId,
                redirect,
            })
        )

        toast.success('Ticket Successfully Updated!')
    }

    return (
        <Loader
            show={loading}
            message={
                <>
                    <Spinner animation='border' variant='info' size='xl' />
                </>
            }
            className={'w-100'}
        >
            <div id='page-content-wrapper'>
                <Nav
                    isToggled={isToggled}
                    setIsToggled={setIsToggled}
                    title={'Edit'}
                />

                <div className='container-fluid px-4 m-2'>
                    <div className='row my-2 p-4 bg-white rounded shadow-sm'>
                        <Form
                            className=''
                            onSubmit={handleSubmit}
                            style={{ width: '40%' }}
                        >
                            <Row>
                                <Form.Group className='mb-3'>
                                    <Form.Label>From</Form.Label>
                                    <Typeahead
                                        id='kotaberangkat'
                                        value={from}
                                        inputProps={{
                                            required: false,
                                            className:
                                                'form-input form-style p-0 ps-1',
                                            style: {},
                                        }}
                                        size={'sm'}
                                        labelKey={(option) =>
                                            `${option.city} (${option.code})`
                                        }
                                        onInputChange={(selected) => {
                                            setFrom([
                                                {
                                                    code: '',
                                                    city: selected,
                                                    airport: '',
                                                },
                                            ])
                                        }}
                                        onChange={(selectedOpt) => {
                                            setFrom(selectedOpt)
                                        }}
                                        options={options}
                                        placeholder='Pilih Kota Keberangkatan'
                                        renderMenuItemChildren={(option) => (
                                            <div className='sugest container w-fluid m-0 p-0'>
                                                <span
                                                    className='fw-bold fs-6'
                                                    style={{ fontSize: '1px' }}
                                                >
                                                    {option.city} ({option.code}
                                                    )
                                                </span>{' '}
                                                <br />
                                                <span className='text-secondary'>
                                                    {option.airport})
                                                </span>
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>To</Form.Label>
                                    <Typeahead
                                        id='labelkey-example'
                                        value={to}
                                        className='form-input form-style fs-5'
                                        size={'sm'}
                                        onChange={(selectedOpt) => {
                                            setTo(selectedOpt)
                                        }}
                                        onInputChange={(selected) => {
                                            setTo({
                                                code: '',
                                                city: selected,
                                                airport: '',
                                            })
                                        }}
                                        labelKey={(option) =>
                                            `${option.city} (${option.code})`
                                        }
                                        inputProps={{
                                            required: false,
                                            className:
                                                'form-input form-style p-0 ps-1',
                                            style: {},
                                        }}
                                        options={options}
                                        placeholder='Pilih Kota Tujuan'
                                        renderMenuItemChildren={(option) => (
                                            <div className='sugest container w-fluid m-0 p-0'>
                                                <span
                                                    className='fw-bold fs-6 m-0 p-0'
                                                    style={{ fontSize: '1px' }}
                                                >
                                                    {option.city} ({option.code}
                                                    )
                                                </span>{' '}
                                                <br />
                                                <span className='text-secondary'>
                                                    {option.airport})
                                                </span>
                                            </div>
                                        )}
                                    />
                                </Form.Group>
                                <Col>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Departure Time</Form.Label>
                                        <Form.Control
                                            as='select'
                                            defaultValue={departure_time}
                                            onChange={(e) =>
                                                setDeparture_time(
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {Array(48)
                                                .fill()
                                                .map((_, i) => {
                                                    let hour = Math.floor(i / 2)
                                                    let minute =
                                                        i % 2 === 0
                                                            ? '00'
                                                            : '30'
                                                    let time = `${hour
                                                        .toString()
                                                        .padStart(
                                                            2,
                                                            '0'
                                                        )}:${minute
                                                        .toString()
                                                        .padStart(2, '0')}`

                                                    return (
                                                        <option
                                                            key={i}
                                                            value={time}
                                                        >
                                                            {time}
                                                        </option>
                                                    )
                                                })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Arrival Time</Form.Label>
                                        <Form.Control
                                            as='select'
                                            defaultValue={arrival_time}
                                            onChange={(e) =>
                                                setArrival_time(e.target.value)
                                            }
                                        >
                                            {Array(48)
                                                .fill()
                                                .map((_, i) => {
                                                    let hour = Math.floor(i / 2)
                                                    let minute =
                                                        i % 2 === 0
                                                            ? '00'
                                                            : '30'
                                                    let time = `${hour
                                                        .toString()
                                                        .padStart(
                                                            2,
                                                            '0'
                                                        )}:${minute
                                                        .toString()
                                                        .padStart(2, '0')}`

                                                    return (
                                                        <option value={time}>
                                                            {time}
                                                        </option>
                                                    )
                                                })}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Row>
                                    <Col className='me-3'>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control
                                                as='select'
                                                defaultValue={type}
                                                onChange={handleType}
                                            >
                                                <option value='rountrip'>
                                                    Roundtrip
                                                </option>
                                                <option value='oneway'>
                                                    Oneway
                                                </option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Stock</Form.Label>
                                            <Form.Control
                                                type='number'
                                                value={formData.init_stock}
                                                onChange={handleChange}
                                                name='init_stock'
                                                placeholder='Masukan jumlah stok'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Date</Form.Label>
                                    {type === 'oneway' ? (
                                        <SingleDatePicker
                                            startDate={formData.date_start}
                                            minDate={new Date()}
                                            startDatePlaceholder={
                                                formData.date_start
                                            }
                                            id='single-date-picker'
                                            monthFormat='MMM YYYY'
                                            onChange={(startDate) =>
                                                startEndDateChange(startDate)
                                            }
                                        />
                                    ) : (
                                        <RangeDatePicker
                                            startDate={formData.date_start}
                                            endDate={formData.date_end}
                                            // endDate={new Date()}
                                            minDate={new Date()}
                                            startDatePlaceholder={`${formData.date_start}`}
                                            endDatePlaceholder={`${formData.date_end}`}
                                            id='range-date-picker'
                                            onChange={(startDate, endDate) =>
                                                startEndDateChange(
                                                    startDate,
                                                    endDate
                                                )
                                            }
                                        />
                                    )}
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Adult Price</Form.Label>
                                            <Form.Control
                                                type='number'
                                                value={formData.adult_price}
                                                onChange={handleChange}
                                                placeholder='Masukan harga tiket dewasa'
                                                name='adult_price'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Child Price</Form.Label>
                                            <Form.Control
                                                type='number'
                                                value={formData.child_price}
                                                onChange={handleChange}
                                                name='child_price'
                                                placeholder='Masukan harga tiket anak - anak'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group
                                    className='mb-3'
                                    controlId='formBasicCheckbox'
                                >
                                    <Form.Check
                                        type='checkbox'
                                        label='Available ?'
                                        checked={isAvailable}
                                        onChange={(e) => {
                                            setIsAvailable(event.target.checked)
                                        }}
                                    />
                                </Form.Group>

                                <Button variant='primary' type='submit'>
                                    Submit
                                </Button>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export default EditTicket
