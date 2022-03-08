<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
// import Navbar from "../Navbar";
import { Button, Form } from 'react-bootstrap';
// import BackButton from '../BackButton';

=======
import React from 'react';
import { useState, useEffect } from "react";
>>>>>>> 3d467097d85f3b27e977510cd0d8331af814e5ba

export default function Profile() {
    const [profileData, setProfileData] = useState([]);

<<<<<<< HEAD
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

    return(
        <div className='profile card card-body'>
            <h2 className='white-text mb-0'> About Me: </h2>
            <p className='white-text'>{profileData.about}</p>
            <p className='white-text'>{profileData.places_traveled}</p>
            </div>
    );
};
  
=======
    useEffect(() => {
        fetch("http://localhost:3001/api/profiles", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

    
            let profileArray = [];

            for (let i = 0; i < data.length; i++) {
                profileArray.push(data[i]);
                setProfileData(profileArray[i]);
            }
 
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);



    return (
      <div className='profile card card-body'> 
        <h2 className="white-text mb-2 mt-2">About Me:</h2>
        <p className="white-text">{profileData.about}</p>
        <p className="white-text">{profileData.places_traveled}</p>
      </div> 
    );
};

>>>>>>> 3d467097d85f3b27e977510cd0d8331af814e5ba
