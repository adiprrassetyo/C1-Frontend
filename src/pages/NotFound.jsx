import React from 'react'
import Ilustration404 from '../assets/images/404-page.svg'
import { Button, Image, Stack } from 'react-bootstrap'
import '../assets/styles/notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main className='notFound d-flex bg-white w-100 h-100  align-items-center justify-content-center'>
            <Stack
                direction='horizontal'
                className='container-sm'
                style={{ height: '100vh' }}
            >
                <div className='w-50 '>
                    <Stack gap={2} className='col-md-5 mx-auto w-50'>
                        <h1 className='text-secondary'>Error : 404</h1>
                        <h1 className='fw-bold fs-1'>
                            Oops, <br />
                            Page not found !
                        </h1>
                        <h3 className='text-secondary'>
                            Maaf, halaman ini tidak tersedia.
                        </h3>
                        <Link to='/'>
                            <Button
                                variant='info'
                                type='submit'
                                className='btn-backHome my-3 text-white'
                                style={{ width: '150px', height: '55px' }}
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </Stack>
                </div>
                <div className='w-50'>
                    <Stack>
                        <Image src={Ilustration404} className='fluid mx-auto' />
                    </Stack>
                </div>
            </Stack>
        </main>
    )
}

export default NotFound
