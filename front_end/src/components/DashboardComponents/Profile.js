import React from 'react';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

export default function Profile() {
    const [profileData, setProfileData] = useState([]);

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
      <div className='profile card card-body full-width'> 
        <h2 className="white-text mb-2 mt-2">About Me:</h2>
        <p className="white-text">{profileData.about}</p>
        <p className="white-text">{profileData.places_traveled}</p>
          <NavLink to="/profileupdate" className="btn white-text profile-button mx-auto">
            Edit Profile
          </NavLink>
      </div> 
    );
};

