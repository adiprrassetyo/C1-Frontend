import { GoogleLogin } from 'react-google-login';

const clientId = "214017739948-b18qptodbi5i0sth8fgukauks2raoi61.apps.googleusercontent.com";

const GLogin = () => {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };
    
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
    
    return (
        <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
        />
        </div>
    );
};

export default GLogin;