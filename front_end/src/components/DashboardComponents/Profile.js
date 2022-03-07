import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";

export default function Profile(props) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        console.log("pp", props);
        const { match } = props;
        const { path = "/" } = match;
        if (path === "/timeline") {
          document.body.style.backgroundImage =
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/timeline.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.height = "100vh"; // vh stands for viewport height
          document.body.style.backgroundRepeat = "no-repeat";
        }
      }, []);
    
    useEffect(() => {
        fetch("http://localhost:3001/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((users) => {
            console.log(users);

    return (
    <div>
         <BackButton />
          <p className="white-text">hello this is where the profile will go</p>
{/* TO DO: add the divs for where the data will go (about section and places traveled), then add a button for editing one's profile */}
            <div
            <button href="#ProfileUpdate"
                onClick={() => handleComponentChange('ProfileUpdate')}
                className={currentComponent === 'Profile' ? 'btn active' : 'btn'}>
                Update Profile
            </button>
    </div>
    );
};