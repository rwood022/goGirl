import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar";
import { Button, Form } from 'react-bootstrap';
import BackButton from '../BackButton';


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

    const handleComponentChange = (event) => {
        event.preventDefault();
    };

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
            })
            .catch((err) => {
                console.err(err);
            });
    }, []);

    return (
        <div>
            <BackButton />
            <div className="profile profile-container mx-auto">
            </div>
            <div className="post full-width mt-4" key={userData._id}></div>
            <div className="container card-body mb-2">
                <h5 className="mb-0">{userData.username}</h5>
            </div>
            <div>
                <img className="image-users mx-auto" src={userData.imageLink} />
            </div>
            <hr></hr>
            <div className="card-body">{userData.aboutMe}</div>
            <br></br>
            <div className="card-body">
                <h3>About Me: {userData.aboutMe}
                </h3>
                <div className="card-body">
                    <h3>Places I have been: {userData.placesTraveled}
                    </h3>
                </div>
            </div>

            {/* <button href="#ProfileUpdate"
                onClick={() => handleComponentChange('ProfileUpdate')}
                className={currentComponent === 'Profile' ? 'btn active' : 'btn'}>
                Update Profile
            </button> */}
        </div>
    );
};