import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import BackButton from '../BackButton';
import S3 from "../S3";


const ProfileUpdate = (props) => {
    const [newUser, setNewUser] = useState ({
        aboutMe: "",
        placesTraveled: "",
        profilePic: "",
    });

    // useEffect(() => {
    //     const { match } = props;
    //     const { path = "/" } = match;
    //     if (path === "/profileUpdate") {
    //       document.body.style.backgroundImage =
    //         "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(/images/sign_up.jpg)";
    //       document.body.style.backgroundSize = "cover";
    //       document.body.style.backgroundPosition = "center";
    //       document.body.style.height = "100vh";
    //       document.body.style.backgroundRepeat = "no-repeat";
    //     }
    //   }, []);
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setNewUser((prevState) => {
            return {
                ...prevState,
                [name]: value,
                
            };
        });
    };
    const handleOnSubmit = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        fetch("http://localhost:3001/api/user", {
            method: "POST",
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


// TO DO: need to add the logic to open this form when user clicks on "edit profile" button

    return (
    <div className="profile-update">
        <BackButton />
        <h2>Create Your Profile</h2>
        <S3 />
        <Form onSubmit={handleOnSubmit}>
    <Form.Group className="mb-3" controlId="aboutMe">
    <Form.Label> About Me</Form.Label>
    <Form.Control
        type="text"
        name="about-me"
        placeholder="Please tell us about yourself."
        value={newUser.FormaboutMe}
        onChange={handleInputChange}
        />
   </Form.Group>
   <Form.Group className="mb-3" controlId="placesTraveled">
      <Form.Label>Places I Have Been</Form.Label>
      <Form.Control
            type="text"
            name="placesTraveled"
            placeholder="Where have you traveled?"
            value={newUser.placesTraveled}
            onChange={handleInputChange}
            />
       </Form.Group>
       <Button variant="primary" type="submit">
           Create/Update Profile
           </Button>
</Form>
</div>
);
};
export default ProfileUpdate;
