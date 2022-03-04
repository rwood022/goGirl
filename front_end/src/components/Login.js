import { GoogleLogin } from 'react-google-login';


const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }

    return(
       <div id="signInButton">
           <GoogleLogin
           client={clientId}
           button="Login"
           onSuccess={onSuccess}
           onFailure={onFailure}
           cookiePolicy={'single_host_origin'}
           isSignIn={true}
           />
       </div>
    )

}

export default Login;