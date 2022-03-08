import React, { useState, useEffect } from 'react';
// import Navbar from "../Navbar";
import { Button, Form } from 'react-bootstrap';
// import BackButton from '../BackButton';


export default function Profile () {
    const [profileData, setProfileData] = useState([]);

    // useEffect(() => {
    //     console.log("pp", props);
    //     const { match } = props;
    //     const { path = "/" } = match;
    //     if (path === "/timeline") {
    //         document.body.style.backgroundImage =
    //             "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/timeline.jpg)";
    //         document.body.style.backgroundSize = "cover";
    //         document.body.style.backgroundPosition = "center";
    //         document.body.style.height = "100vh"; // vh stands for viewport height
    //         document.body.style.backgroundRepeat = "no-repeat";
    //     }
    // }, []);

    // const handleComponentChange = (event) => {
    //     event.preventDefault();
    // };

    useEffect(() => {
        fetch("http://localhost:3001/api/profiles", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        })

            .then((res) => res.json())
            .then((users) => {
                console.log(users);
            let profileArray = [];
            for (let i = 0; i < users.length; i++) {
                profileArray.push(users[i]);
                setProfileData(profileArray[i]);
            }
            })
            .catch((err) => {
                console.err(err);
            });
    }, []);



    return (
        <div> 

            <div className="profile profile-container card mx-auto">
            </div>
            {/* <div className="post full-width mt-4" key={profileData.about}></div> */}
            <div className="container card-body mb-2">
                {/* <h5 className="mb-0">{profileData.username}</h5> */}
            </div>
            <hr></hr>
            {/* <div className="card-body">{profileData.about}</div> */}
            <br></br>
            <div className="card-body">
                <h2> About Me: {profileData.about}
                </h2>
            <div className="card-body">
            <h2>Places I have been: {profileData.places_traveled}
                    </h2>
                </div>
            </div>

            {/* <button href="#ProfileUpdate"
                onClick={() => handleInputChange('ProfileUpdate')}
                className={currentComponent === 'Profile' ? 'btn active' : 'btn'}>
                Update Profile
            </button> */}
        </div>
    );
};