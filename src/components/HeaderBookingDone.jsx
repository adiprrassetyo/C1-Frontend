import React, { useEffect, useState } from 'react'
import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
    OverlayTrigger,
    Popover,
} from 'react-bootstrap'
// import { jwt } from "jsonwebtoken";
import { Bell, Check, CircleFill, ThreeDots } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../assets/images/binair-logo.svg'
import '../assets/styles/headerBooking.css'
import { logout } from '../redux/slices/authSlice'
import { io } from 'socket.io-client'
import moment from 'moment'
import {
    retriveNotif,
    readOneNotif,
    readAllNotif,
    // read,
} from '../redux/slices/notifSlice'

const HeaderBookingDone = () => {
    const [sticky, setSticky] = useState(false)
    const { user } = useSelector((state) => state.auth)
    const { notif, loading } = useSelector((state) => state.notif)
    const [notifData, setNotifData] = useState(notif)

    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            const socket = io('wss://binair-backend-production.up.railway.app')

            socket.emit('create', `${user.id}`)

            socket.on('notify-update', (newdatas) => {
                setNotifData(newdatas)
            })

            socket.on('disconnect', () => {})
        }
    }, [])

    useEffect(() => {
        if (user) {
            dispatch(retriveNotif())
        }
    }, [dispatch])

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <>
            {['md'].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className={`${sticky ? 'sticky' : ''}`}
                >
                    <Container>
                        <Navbar.Brand>
                            <Link to='/'>
                                {' '}
                                <img src={logo} alt='logo' />{' '}
                            </Link>
                        </Navbar.Brand>
                        <Nav className='flex-grow-1 pe-3 '>
                            <ul className='bar-timeline'>
                                <li className='active'>Pesanan</li>
                                <li className='active'>Pembayaran</li>
                                <li className='active'>Selesai</li>
                            </ul>
                        </Nav>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='end'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    <Navbar.Brand>
                                        <NavLink to='/'>
                                            <img src={logo} alt='logo' />
                                        </NavLink>
                                    </Navbar.Brand>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body className='justify-content-end'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    {user && (
                                        <OverlayTrigger
                                            trigger='click'
                                            placement='bottom'
                                            overlay={
                                                <Popover
                                                    id='popover-positioned-bottom mt-3'
                                                    style={{
                                                        maxHeight: '300px',
                                                        minHeight: '100px',
                                                        overflow: 'scroll',
                                                    }}
                                                >
                                                    <Popover.Header
                                                        as='div'
                                                        className='bg-white w-100 d-flex justify-content-between align-items-center'
                                                    >
                                                        <div className='fw-bold text-black'>
                                                            Notifikasi
                                                        </div>
                                                        <OverlayTrigger
                                                            trigger='click'
                                                            placement='bottom'
                                                            overlay={
                                                                <Popover id='popover-positioned-bottom '>
                                                                    <Popover.Body className='p-1 m-0'>
                                                                        <button
                                                                            className='readAll-btn'
                                                                            onClick={() => {
                                                                                dispatch(
                                                                                    readAllNotif()
                                                                                )
                                                                                dispatch(
                                                                                    readAll()
                                                                                )
                                                                                setNotifData(
                                                                                    notif
                                                                                )
                                                                            }}
                                                                            style={{
                                                                                border: 0,
                                                                                color: 'black',
                                                                                width: 'fit-content',
                                                                                height: '100%',
                                                                            }}
                                                                        >
                                                                            <h6
                                                                                className=' m-0 p-0 d-flex align-items-center'
                                                                                style={{
                                                                                    fontSize:
                                                                                        '12px',
                                                                                }}
                                                                            >
                                                                                <Check size='20' />
                                                                                Tandai
                                                                                semua
                                                                                sebagai
                                                                                telah
                                                                                di
                                                                                baca
                                                                            </h6>
                                                                        </button>
                                                                    </Popover.Body>
                                                                </Popover>
                                                            }
                                                        >
                                                            <div className='dots-btn text-black'>
                                                                <ThreeDots
                                                                    style={{
                                                                        cursor: 'pointer',
                                                                    }}
                                                                />
                                                            </div>
                                                        </OverlayTrigger>
                                                    </Popover.Header>
                                                    <Popover.Body className='m-0 p-0'>
                                                        {!notifData?.filter(
                                                            (msg) =>
                                                                msg.isRead ===
                                                                false
                                                        ) ? (
                                                            <div className='d-flex align-items-center notif-msg mb-1'>
                                                                Saat ini tidak
                                                                ada notifikasi
                                                            </div>
                                                        ) : (
                                                            notifData.map(
                                                                (msg) => {
                                                                    const notifTime =
                                                                        function TimeAgo() {
                                                                            // Ambil waktu dari data Anda
                                                                            const timeFromData =
                                                                                msg.createdAt

                                                                            // Buat objek Date dari waktu dari data Anda
                                                                            const date =
                                                                                new Date(
                                                                                    timeFromData
                                                                                )

                                                                            // Atur bahasa default moment menjadi bahasa Indonesia
                                                                            moment.locale(
                                                                                'id'
                                                                            )

                                                                            // Buat objek moment dari objek Date yang telah dibuat sebelumnya
                                                                            const timeFromDataMoment =
                                                                                moment(
                                                                                    date
                                                                                )

                                                                            // Tampilkan jarak waktu dengan hari ini dalam format "x jam yang lalu" atau "x menit yang lalu"
                                                                            return (
                                                                                <p
                                                                                    className='m-0 p-0'
                                                                                    style={{
                                                                                        color: '#13A2D7',
                                                                                    }}
                                                                                >
                                                                                    {timeFromDataMoment.fromNow()}
                                                                                </p>
                                                                            )
                                                                        }
                                                                    return (
                                                                        <div
                                                                            className='d-flex align-items-center notif-msg mb-1'
                                                                            key={
                                                                                msg.id
                                                                            }
                                                                            onClick={() => {
                                                                                dispatch(
                                                                                    readOneNotif(
                                                                                        [
                                                                                            msg.id,
                                                                                        ]
                                                                                    )
                                                                                )
                                                                                dispatch(
                                                                                    read(
                                                                                        [
                                                                                            msg.id,
                                                                                        ]
                                                                                    )
                                                                                )
                                                                                setNotifData(
                                                                                    notif
                                                                                )
                                                                            }}
                                                                        >
                                                                            <div className='w-75'>
                                                                                <h6 className='mb-1'>
                                                                                    {
                                                                                        msg.message
                                                                                    }
                                                                                </h6>
                                                                                {notifTime()}
                                                                            </div>
                                                                            <div className='w-25 d-flex justify-content-center'>
                                                                                {msg.isRead ? (
                                                                                    <CircleFill
                                                                                        size={
                                                                                            20
                                                                                        }
                                                                                        className='ms-3 '
                                                                                        style={{
                                                                                            color: 'grey',
                                                                                            alignText:
                                                                                                'center',
                                                                                        }}
                                                                                    />
                                                                                ) : (
                                                                                    <CircleFill
                                                                                        size={
                                                                                            20
                                                                                        }
                                                                                        className='ms-3'
                                                                                        style={{
                                                                                            color: '#13A2D7',
                                                                                        }}
                                                                                    />
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                }
                                                            )
                                                        )}
                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <div className='icon me-3'>
                                                <Bell size='18' />
                                                {/* {notifData?.filter((msg) => msg.isRead === false)
                          .length < 0 && ( */}
                                                <div className='counter'>
                                                    {
                                                        notifData?.filter(
                                                            (msg) =>
                                                                msg.isRead ===
                                                                false
                                                        ).length
                                                    }
                                                </div>
                                                {/* )} */}
                                            </div>
                                        </OverlayTrigger>
                                    )}
                                    <NavLink to='/auth' className='m-0 p-0'>
                                        <Button
                                            className={
                                                user
                                                    ? 'btn btn-light button-login d-none'
                                                    : 'btn btn-light button-login'
                                            }
                                        >
                                            Login
                                        </Button>
                                    </NavLink>

                                    <NavDropdown
                                        title={
                                            <span className='d-flex justify-content-center align-items-center'>
                                                <i className='ri-user-3-line me-1 ri-1x'></i>
                                                {user?.firstname}
                                            </span>
                                        }
                                        className={
                                            user
                                                ? `nav-dropdown`
                                                : `nav-dropdown d-none`
                                        }
                                        // noCarret
                                    >
                                        <NavDropdown.Item href='/#/account/profile'>
                                            <i className='remix-icon ri-user-3-line'></i>
                                            <span className='ml-2 profile-item'>
                                                Profil
                                            </span>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href='/#/account/password'>
                                            <i className='remix-icon ri-key-2-line'></i>
                                            <span className='ml-2'>
                                                Ubah Password
                                            </span>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href='/#/account/order'>
                                            <i className='remix-icon ri-calendar-check-line'></i>
                                            <span className='ml-2'>
                                                Daftar Pesanan
                                            </span>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href='/#/account/wishlist'>
                                            <i className='remix-icon ri-shopping-basket-2-line'></i>
                                            <span className='ml-2'>
                                                Wishlist
                                            </span>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item
                                            onClick={() => {
                                                // setDataUser({});
                                                dispatch(logout())
                                                toast.success('Logout Success')
                                            }}
                                        >
                                            <i className='remix-icon ri-logout-box-r-line'></i>
                                            <span className='ml-2'>Keluar</span>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default HeaderBookingDone
