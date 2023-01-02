import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { googleLoginUser } from "../redux/slices/authSlice";
import {
    Button,
    Spinner
  } from "react-bootstrap";
import GoogleLogo from "../assets/images/google-logo.svg";

const GLogin = ({isSignIn, loading}) => {  

    const firebaseConfig = { 
        apiKey: "AIzaSyAWp_X-Vy6zhj8umNQFWSFkl-MEdecrl4Y", 
        authDomain: "binairbuyer.firebaseapp.com", 
        projectId: "binairbuyer", 
        storageBucket: "binairbuyer.appspot.com", 
        messagingSenderId: "214017739948", 
        appId: "1:214017739948:web:b343985f68be56ce676309", 
        measurementId: "G-E7C8CVJHYM" 
    }; 

    const dispatch  = useDispatch();
    const redirect = useNavigate();
    
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    provider.addScope('profile');
    provider.addScope('email');

    const signInWithGoogle = () => signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.idToken;
        const firstName = result._tokenResponse.firstName;
        const lastName = result._tokenResponse.lastName;
        const photoUrl = result._tokenResponse.photoUrl;
        dispatch(googleLoginUser( { formData: {token: token, first_name: firstName, last_name: lastName, profile_picture: photoUrl}, redirect } ));
    }).catch((error) => {
    });

    return (
        isSignIn ? 
        (<Button
            variant="primary"
            className="btn-google-login mb-3"
            onClick={signInWithGoogle}
            >
            {loading ? (
                <Spinner animation="border" variant="info" />
            ) : (
                <><img className="me-1" src={GoogleLogo} alt="" />Sign in With Google</>
            )}
            </Button>) 
        : (<Button className="btn" onClick={()=>auth.signOut}><img src={GoogleLogo} alt="" />Sign out google</Button>)
        
    );
};

export default GLogin;