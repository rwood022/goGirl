import React, { useState } from 'react';
import S3 from "../S3";
import { NavLink } from 'react-router-dom';


const ProfileUpdate = () => {
    const [newProfile, setNewProfile] = useState ({
        about: "",
        places_traveled: "",
    });

    function submit(event) {
        event.preventDefault();
        fetch('http://localhost:3001/api/profiles', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(newProfile)
        })
        .then((res) => res.json())
        .then((newPost) => {
            console.log(newPost);
            window.location.replace('/dashboard');
        })
        .catch(err => {
            console.error(err);
        })    
    }

    function handleNewPost(event) {
        const newProfileData = {...newProfile}
        newProfileData[event.target.id] = event.target.value 
        setNewProfile(newProfileData)
        console.log(newProfileData);
        
    }

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
    

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
        
    //     setNewUser((prevState) => {
    //         return {
    //             ...prevState,
    //             [name]: value,
                
    //         };
    //     });
    // };
    // const handleOnSubmit = (event) => {
    //     event.preventDefault();
    // };
    // useEffect(() => {
    //     fetch("http://localhost:3001/api/user", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(),
    //     })
    //         .then((res) => res.json())
    //         .then((users) => {
    //             console.log(users);
    //         })
    //         .catch((err) => {
    //             console.err(err);
    //         });
    // }, []);


// TO DO: need to add the logic to open this form when user clicks on "edit profile" button

    return (

        <div> 
        <h2>Create Your Profile</h2>
        <S3 />
        <form className="form-group new-post-container mb-4">
            <textarea type="text" className="form-control rounded-0" rows="3" placeholder="Please tell us about yourself." onChange={(event)=>handleNewPost(event)} id="about" value={newProfile.about}></textarea>
        </form>

        <h3 className="white-text">Places I Have Been</h3>
        <form className="form-group new-post-container mb-4">
            <textarea type="text" className="form-control rounded-0" rows="1" placeholder="Japan, Germany, Buenos Aires, etc" onChange={(event)=>handleNewPost(event)} id="places_traveled" value={newProfile.places_traveled}></textarea>
        </form>

        <NavLink to="/dashboard" className="btn btn-sm white-text edit-button" onClick= {(event) => submit(event)}>
         Update Profile
        </NavLink>
       
    </div>






//     <div className="profile-update">
//         <h2>Create Your Profile</h2>
//         {/* <S3 /> */}
//         {/* <form onSubmit= {(e) => submit(e)}> */}
//             <form className="mb-3" controlId="aboutMe">
    
//     <h2> About Me</h2>


//     <textarea
//         type="text" placeholder="Please tell us about yourself." value={newProfile.about} onChange={(e)=>handleNewPost(e)}/>
//    </textarea>

  

//    <form className="mb-3" controlId="placesTraveled">
//       <h3>Places I Have Been</h3>
//       <form
//             type="text"
//             name="placesTraveled"
//             placeholder="Where have you traveled?"
//             value={newProfile.places_traveled}
//             onChange={(e)=>handleNewPost(e)}
//             />
//        </form>
       
//         <NavLink to="/dashboard" className="btn btn-sm white-text edit-button">
//         Update Profile
//         </NavLink>
// {/* </form> */}
// </div>
);
};
export default ProfileUpdate;