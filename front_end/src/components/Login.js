import { GoogleLogin } from 'react-google-login';




const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com";




function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }


    // const handleLogin = async googleData => {
    //     const res = await fetch("/api/v1/auth/google", {
    //         method: "POST",
    //         body: JSON.stringify({
    //         token: googleData.tokenId
    //       }),
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
    //     const data = await res.json()
    //     // store returned user 
    //   }

    return(
   
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
         </div>

    )


}

export default Login;
