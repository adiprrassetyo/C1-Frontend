import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import WhiteLogo from '../assets/images/binair-white-logo.svg'
import { resetPass, clearState } from '../redux/slices/authSlice'
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Dropdown,
    Spinner,
    Alert,
} from 'react-bootstrap'
import '../assets/styles/auth.css'

const Reset = () => {
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const [email, setEmail] = useState('')

    const { loading, message, user, status } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user'))?.token
        if (token) {
            redirect(-1)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(resetPass(email))
    }

    function handleChange(event) {
        const { value } = event.target
        setEmail(value)
    }

    return (
        <Container fluid className='auth'>
            <Container className='auth-content'>
                <Container className='auth-logo'>
                    <img
                        src={WhiteLogo}
                        alt='Binair Logo'
                        className='binair-logo fluid'
                        loading='eager'
                    />
                </Container>
                <Container className='auth-main rounded-2'>
                    <Row>
                        <Col>
                            {message && (
                                <Alert
                                    variant={
                                        status === 'success'
                                            ? 'success'
                                            : status === 'error'
                                            ? 'danger'
                                            : 'warning'
                                    }
                                >
                                    <center>
                                        {status === 'success'
                                            ? 'Check your email to reset password'
                                            : message}
                                    </center>
                                </Alert>
                            )}
                            <h3>
                                <p className='text-secondary mt-4'>
                                    Konfirm email Anda, lalu kami akan
                                    mengirimkan sebuah tautan untuk mengganti
                                    password Anda.
                                </p>
                            </h3>
                        </Col>
                    </Row>
                    <Row className='auth-form pt-2'>
                        <Form onSubmit={handleSubmit}>
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
                                    value={email}
                                    onChange={handleChange}
                                    type='email'
                                    className='form-input border mb-4 border-top-0 border-start-0 border-end-0 rounded-0 p-0'
                                    placeholder='Masukan Alamat Email'
                                />
                            </Form.Group>
                            <Button
                                variant='primary'
                                type='submit'
                                className='btn-login my-2 d-flex justify-content-center align-items-center'
                            >
                                Ubah Password
                            </Button>
                            <center>
                                <h4>
                                    Bukan member Binair?
                                    <b>
                                        <Link
                                            to='/auth'
                                            onClick={() => {
                                                dispatch(clearState())
                                            }}
                                            className='btn-switchForm ms-1 fw-normal '
                                        >
                                            Daftar sekarang
                                        </Link>
                                    </b>
                                </h4>
                            </center>
                        </Form>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}

export default Reset
