import { Squash as Hamburger } from 'hamburger-react'
import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Row, Col, Spinner } from 'react-bootstrap'
import { useOutletContext, useParams } from 'react-router-dom'
import moment from 'moment/moment'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SingleDatePicker } from 'react-google-flight-datepicker'
import { toast } from 'react-toastify'
import Loader from 'react-loader-advanced'
import PhoneInput from 'react-phone-number-input'
import Nav from './Nav'
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import { retriveUser, updateUsers } from '../../redux/slices/userSlice'

const EditUsers = () => {
    const { loading, user } = useSelector((state) => state.user)

    const { userId } = useParams()
    const [isToggled, setIsToggled] = useOutletContext()
    const dispatch = useDispatch()

    const redirect = useNavigate()
    const [profile_image, setProfile_image] = useState(null)
    const [formData, setFormData] = useState({
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        email: user.email,
        role: user.role,
        password: null,
    })
    const [phone, setPhone] = useState(user.phone)
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (e) => {
        e.preventDefault
        setShowPassword((prev) => !prev)
    }

    useEffect(() => {
        dispatch(retriveUser(userId))
    }, [userId, dispatch])

    useEffect(() => {
        setFormData({
            firstname: user.firstname,
            lastname: user.lastname,
            gender: user.gender,
            email: user.email,
            role: user.role,
            password: user.password,
        })
    }, [user])

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

        if (!profile_image) {
            dispatch(
                updateUsers({
                    formData: { ...formData, phone },
                    id: userId,
                    redirect,
                })
            )
        } else {
            dispatch(
                updateUsers({
                    formData: { ...formData, phone, profile_image },
                    id: userId,
                    redirect,
                })
            )
        }
        toast.success('User Successfully Updated!')
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
                    <div
                        className='row my-2 p-4 bg-white rounded shadow-sm'
                        style={{ minHeight: '80vh' }}
                    >
                        <Form
                            className=''
                            onSubmit={handleSubmit}
                            style={{ width: '40%' }}
                        >
                            <Row>
                                <Row>
                                    <Col>
                                        <Form.Group className=' mb-3'>
                                            <Form.Label className='p-0'>
                                                <h4>Nama Depan</h4>
                                            </Form.Label>
                                            <Form.Control
                                                autoComplete='off'
                                                required
                                                name='firstname'
                                                onChange={handleChange}
                                                value={formData.firstname}
                                                placeholder='Jhon'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className=' mb-3'>
                                            <Form.Label className='p-0'>
                                                <h4>Nama Belakang</h4>
                                            </Form.Label>
                                            <Form.Control
                                                autoComplete='off'
                                                required
                                                name='lastname'
                                                onChange={handleChange}
                                                value={formData.lastname}
                                                placeholder='Dhoe'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className=' mb-3'>
                                            <Form.Label className='p-0'>
                                                <h4>Nomor Ponsel</h4>
                                            </Form.Label>
                                            <PhoneInput
                                                international
                                                defaultCountry='ID'
                                                value={phone}
                                                onChange={setPhone}
                                                countryCallingCodeEditable={
                                                    false
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className=' mb-3'>
                                            <Form.Label className='p-0'>
                                                <h4>Jenis Kelamin</h4>
                                            </Form.Label>
                                            <br />
                                            <select
                                                name='gender'
                                                value={formData.gender}
                                                onChange={handleChange}
                                                className='dropdown-toggle'
                                            >
                                                <option value='Laki-laki'>
                                                    Laki - Laki
                                                </option>
                                                <option value='Perempuan'>
                                                    Perempuan
                                                </option>
                                            </select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group
                                    className=' mb-3'
                                    controlId='formBasicEmail'
                                >
                                    <Form.Label className='p-0'>
                                        <h4>Email</h4>
                                    </Form.Label>
                                    <Form.Control
                                        autoComplete='off'
                                        required
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        type='email'
                                        placeholder='Masukan Alamat Email'
                                    />
                                </Form.Group>
                                <Form.Group
                                    className='form mb-3'
                                    controlId='formBasicPassword'
                                >
                                    <Form.Label className='p-0'>
                                        <h4>Password</h4>
                                    </Form.Label>
                                    <Row>
                                        <Col>
                                            <Form.Control
                                                required
                                                autoComplete='off'
                                                name='password'
                                                value={formData.password}
                                                onChange={handleChange}
                                                type={
                                                    showPassword
                                                        ? 'text'
                                                        : 'password'
                                                }
                                                placeholder='Masukan Password'
                                            />
                                        </Col>
                                        <Col xs={1}>
                                            <Form.Text
                                                id='passwordHelpBlock'
                                                muted
                                            >
                                                <button
                                                    type='button'
                                                    className='btn-switchForm'
                                                    onClick={handleShowPassword}
                                                >
                                                    {showPassword ? (
                                                        <EyeSlash />
                                                    ) : (
                                                        <Eye />
                                                    )}
                                                </button>
                                            </Form.Text>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className=' mb-3'>
                                    <Form.Label className='p-0'>
                                        <h4>Role</h4>
                                    </Form.Label>
                                    <br />
                                    <select
                                        name='role'
                                        onChange={handleChange}
                                        className='dropdown-toggle'
                                        defaultValue={formData.role}
                                    >
                                        <option value='admin'>Admin</option>
                                        <option value='member'>Member</option>
                                    </select>
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label className='m-0 p-0'>
                                        Profile Image
                                    </Form.Label>
                                    <Form.Control
                                        type='file'
                                        size='md'
                                        name='profile_image'
                                        onChange={(e) => {
                                            setProfile_image(e.target.files[0])
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

export default EditUsers
