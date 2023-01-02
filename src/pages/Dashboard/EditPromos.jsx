import { Squash as Hamburger } from 'hamburger-react'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { SingleDatePicker } from 'react-google-flight-datepicker'
import Loader from 'react-loader-advanced'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { retrivePromo } from '../../redux/slices/promoSlice'
import { updatePromo } from './../../redux/slices/promoSlice'
import Nav from './Nav'

const EditPromos = () => {
    const { loading, promoById } = useSelector((state) => state.promo)
    const [isToggled, setIsToggled] = useOutletContext()
    const dispatch = useDispatch()

    const redirect = useNavigate()
    const { promoId } = useParams()

    const [formData, setFormData] = useState({
        title: promoById.title,
        desc: promoById.desc,
        promo_code: promoById.promo_code,
        discount: promoById.discount,
        terms: promoById.terms,
        expire: promoById.expire,
    })

    useEffect(() => {
        dispatch(retrivePromo(promoId))
    }, [promoId, dispatch])

    useEffect(() => {
        setFormData({
            title: promoById.title,
            desc: promoById.desc,
            promo_code: promoById.promo_code,
            discount: promoById.discount,
            terms: promoById.terms,
            expire: promoById.expire,
        })
    }, [promoById])

    const [promo_image, setPromo_image] = useState()

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
            updatePromo({
                id: promoId,
                formData: { ...formData, promo_image },
                redirect,
            })
        )
        toast.success('Promo Successfully Updated!')
    }

    const startEndDateChange = (startDt, endDt) => {
        if (startDt) {
            setFormData((prev) => ({
                ...prev,
                expire: moment(startDt).format('MM-DD-YYYY'),
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
                                    <Form.Label className='m-0 p-0'>
                                        Title
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        type='text'
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder='Masukan judul promo'
                                        name='title'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='m-0 p-0'>
                                        Description
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        as='textarea'
                                        value={formData.desc}
                                        onChange={handleChange}
                                        placeholder='Masukan deskripsi promo'
                                        name='desc'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='m-0 p-0'>
                                        Code Promo
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        type='text'
                                        value={formData.promo_code}
                                        onChange={handleChange}
                                        placeholder='Masukan code promo'
                                        name='promo_code'
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className='m-0 p-0'>
                                                Discount
                                            </Form.Label>
                                            <Form.Control
                                                required
                                                type='number'
                                                value={formData.discount}
                                                min={15}
                                                max={100}
                                                onChange={handleChange}
                                                placeholder='Masukan discount promo (%)'
                                                name='discount'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Expire Date</Form.Label>
                                            <SingleDatePicker
                                                startDate={formData.expire}
                                                minDate={new Date()}
                                                startDatePlaceholder='Tanggal Expired Promo'
                                                id='single-date-picker'
                                                monthFormat='MMM YYYY'
                                                onChange={(startDate) =>
                                                    startEndDateChange(
                                                        startDate
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='m-0 p-0'>
                                        Terms
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        type='text'
                                        value={formData.terms}
                                        onChange={handleChange}
                                        placeholder='Masukan terms promo'
                                        name='terms'
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='m-0 p-0'>
                                        Promo Image
                                    </Form.Label>
                                    <Form.Control
                                        type='file'
                                        size='md'
                                        name='promo_image'
                                        onChange={(e) => {
                                            setPromo_image(e.target.files[0])
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

export default EditPromos
