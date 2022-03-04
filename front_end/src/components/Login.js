import { GoogleLogin } from 'react-google-login';


const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com";

function Login() {

    return(
       <div id="signInButton">
           <GoogleLogin
           client={clientId}
           button="Login"
           onSuccess={onFailure}
           cookiePolicy={'single_host_origin'}
           isSignIn={true}
           />
       </div>
    )

}