// import React, { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
// import ProfileUpdateButton from './DashboardComponents/ProfileUpdateButton';
// import Profile from './DashboardComponents/Profile';
// import ProfileUpdate from './DashboardComponents/ProfileUpdate';
import Timeline from './DashboardComponents/Timeline';
// import FriendTimeline from './DashboardComponents/FriendTimeline';

export default function Dashboard(props) {

    useEffect(() => {
        const { match } = props;
        const { path = "/" } = match;
        if (path === "/dashboard") {
          document.body.style.backgroundImage =
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/images/timeline.jpg)";
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.height = "100vh"; // vh stands for viewport height
          document.body.style.backgroundRepeat = "no-repeat";
        }
      }, []);

    // const [currentComponent, setCurrentComponent] = useState('Profile'); 

    // const renderComponent = () => {
    //     if (currentComponent === 'Profile') {
    //         return <Profile />; 
    //     }
    //     if (currentComponent === 'ProfileUpdate') {
    //         return <ProfileUpdate />
    //     }
    // }

    // const handleComponentChange = (component) => setCurrentComponent(component);

    return (
        <div>
            <p>this is the DASHBOARD</p>
            {/* {renderComponent()} */}
            {/* <ProfileUpdateButton currentComponent={currentComponent} handleComponentChange={handleComponentChange}/> */}
            <Timeline />
            
        </div>
    );
};