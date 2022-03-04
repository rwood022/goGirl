import { GoogleLogout } from 'react-google-login';


const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com";




function Logout() {

    const onSuccess = () => {
        console.log("Success! Current User Logged out ");
    }


    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )

}

export default Logout;