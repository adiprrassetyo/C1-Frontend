import { Squash as Hamburger } from 'hamburger-react'
import { useEffect, useState } from 'react'
import {
    Button,
    Container,
    Image,
    Spinner,
    Pagination,
    Modal,
} from 'react-bootstrap'
import { PencilFill, PersonFillAdd, TrashFill } from 'react-bootstrap-icons'
import { useOutletContext, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUsers, retriveUsers } from './../../redux/slices/userSlice'
import Loader from 'react-loader-advanced'
import moment from 'moment/moment'
import { ToastContainer, toast } from 'react-toastify'
import Nav from './Nav'

const UsersMenu = () => {
    const {
        loading,
        status,
        userById,
        message,
        users,
        totalPages,
        currentPage,
    } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(retriveUsers(0))
    }, [dispatch])

    const [msg, setMsg] = useState(message)
    const [show, setShow] = useState(false)
    const [id, setId] = useState('')

    const handleDelete = () => {
        dispatch(removeUsers(id))
        toast.success('User Successfully Deleted!')
        setShow((prev) => !prev)
    }

    const handlePageChange = (page) => {
        dispatch(retriveUsers(page))
    }

    const [isToggled, setIsToggled] = useOutletContext()
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
            <Modal show={show} onHide={() => setShow((prev) => !prev)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, are u sure you want to remove this user ?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant='secondary'
                        onClick={() => setShow((prev) => !prev)}
                    >
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
            <div id='page-content-wrapper'>
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
                <Nav
                    isToggled={isToggled}
                    setIsToggled={setIsToggled}
                    title={'User'}
                />
                <div className='container-fluid px-4 m-2'>
                    <div
                        className='row my-2 p-4 bg-white rounded shadow-sm'
                        style={{ minHeight: '80vh' }}
                    >
                        <div className='col'>
                            <Link to='add' style={{ width: 'fit' }}>
                                <Button
                                    variant='success'
                                    className='d-flex align-items-center justify-content-center m-0'
                                >
                                    <div
                                        className='d-flex gap-2 align-items-center m-0 p-0'
                                        style={{ fontSize: 12 }}
                                    >
                                        <PersonFillAdd size='20' />{' '}
                                        <p className='m-0 p-0 d-flex align-items-center justify-content-center'>
                                            ADD NEW
                                        </p>
                                    </div>
                                </Button>
                            </Link>
                            <div style={{ minHeight: '80vh' }}>
                                <table className='table bg-white table-hover text-secondary mt-4'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>Users</th>
                                            <th scope='col'>Sign At</th>
                                            <th scope='col'>Role</th>
                                            <th scope='col'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <div className='d-flex '>
                                                        <div
                                                            className={
                                                                'd-flex users-photo border rounded me-2'
                                                            }
                                                        >
                                                            <Image
                                                                width={60}
                                                                fluid
                                                                src={
                                                                    user.profile_image
                                                                }
                                                                loading='eager'
                                                            />
                                                        </div>
                                                        <div className='users-description d-flex flex-column '>
                                                            <strong className='text-black'>
                                                                {user.firstname}
                                                                &nbsp;
                                                                {user.lastname}
                                                            </strong>
                                                            {user.email}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {moment(
                                                        user.createdAt
                                                    ).format('DD MMM YYYY')}
                                                </td>
                                                <td>{user.role}</td>
                                                <td>
                                                    <Link
                                                        to={`edit/${user.id}`}
                                                    >
                                                        <Button variant='primary'>
                                                            <PencilFill />
                                                        </Button>{' '}
                                                    </Link>
                                                    <Button
                                                        variant='danger'
                                                        onClick={() => {
                                                            setId(user.id)
                                                            setShow(
                                                                (prev) => !prev
                                                            )
                                                        }}
                                                    >
                                                        <TrashFill />
                                                    </Button>{' '}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='d-flex mx-auto align-items-center justify-content-center'>
                                {totalPages > 1 ? (
                                    <Pagination>
                                        <Pagination.First
                                            onClick={() => handlePageChange(0)}
                                        />
                                        <Pagination.Prev
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage < 1
                                                        ? currentPage
                                                        : currentPage - 1
                                                )
                                            }
                                        />
                                        {Array.from(
                                            Array(totalPages).keys()
                                        ).map((page) => (
                                            <Pagination.Item
                                                key={page}
                                                active={page === currentPage}
                                                onClick={() =>
                                                    handlePageChange(page)
                                                }
                                            >
                                                {page + 1}
                                            </Pagination.Item>
                                        ))}
                                        <Pagination.Next
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage > totalPages - 1
                                                        ? currentPage
                                                        : currentPage + 1
                                                )
                                            }
                                        />
                                        <Pagination.Last
                                            onClick={() =>
                                                handlePageChange(totalPages - 1)
                                            }
                                        />
                                    </Pagination>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Loader>
    )
}

export default UsersMenu
