import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { googleLoginUser } from '../redux/slices/authSlice'
import { Button, Spinner } from 'react-bootstrap'
import GoogleLogo from '../assets/images/google-logo.svg'

const GLogin = ({ isSignIn, loading }) => {
    const firebaseConfig = {
        apiKey: 'AIzaSyAlc-gX9OVTbpz-9X3JdaB1SdVz1i7UbOM',
        authDomain: 'binair-c2552.firebaseapp.com',
        projectId: 'binair-c2552',
        storageBucket: 'binair-c2552.appspot.com',
        messagingSenderId: '312500654326',
        appId: '1:312500654326:web:bb8de34016d0fb1dda1cd7',
    }

    const dispatch = useDispatch()
    const redirect = useNavigate()

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    provider.addScope('profile')
    provider.addScope('email')

    const signInWithGoogle = () =>
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.idToken
                const firstName = result._tokenResponse.firstName
                const lastName = result._tokenResponse.lastName
                const photoUrl = result._tokenResponse.photoUrl
                dispatch(
                    googleLoginUser({
                        formData: {
                            token: token,
                            first_name: firstName,
                            last_name: lastName,
                            profile_picture: photoUrl,
                        },
                        redirect,
                    })
                )
            })
            .catch((error) => {})

    return isSignIn ? (
        <Button
            variant='primary'
            className='btn-google-login mb-3'
            onClick={signInWithGoogle}
        >
            {loading ? (
                <Spinner animation='border' variant='info' />
            ) : (
                <>
                    <img
                        className='me-1'
                        src={GoogleLogo}
                        alt=''
                        loading='eager'
                    />
                    Sign in With Google
                </>
            )}
        </Button>
    ) : (
        <Button className='btn' onClick={() => auth.signOut}>
            <img src={GoogleLogo} alt='' loading='eager' />
            Sign out google
        </Button>
    )
}

export default GLogin
