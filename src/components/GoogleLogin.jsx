// import { signInWithGoogle } from "../services/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { googleLoginUser } from "../redux/slices/authSlice";

const GLogin = ({isSignIn}) => {  

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
        console.log( error);
    });

    return (
        isSignIn ? 
        (<button className="btn" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>) 
        : (<button className="btn" onClick={()=>auth.signOut}><i className="fab fa-google"></i>Sign out google</button>)
        
    );
};

export default GLogin;