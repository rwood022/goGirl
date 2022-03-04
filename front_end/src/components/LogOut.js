import { GoogleLogout } from 'react-google-login';


const clientId = "181782094880-j468gjdl5lnthk3g0657ac450o4qrmb6.apps.googleusercontent.com";

function Logout() {

    const onSuccess = (res) => {
        console.log("Log out successful!");
    }

    return(
       <div id="signOnButton">
           <GoogleLogout
           client={clientId}
           button="Logout"
           onLogoutSuccess={onSuccess}
        
           />
       </div>
    )

}

export default Logout;