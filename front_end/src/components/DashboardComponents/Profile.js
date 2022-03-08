import React from 'react';
import { useState, useEffect } from "react";

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
      <div className='profile card card-body'> 
        <h2 className="white-text mb-2 mt-2">About Me:</h2>
        <p className="white-text">{profileData.about}</p>
        <p className="white-text">{profileData.places_traveled}</p>
      </div> 
    );
};

