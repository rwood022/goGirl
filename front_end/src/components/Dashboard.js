import { useEffect, useState } from "react";
import React from "react";
import Profile from "./DashboardComponents/Profile";
import ProfileButton from "./DashboardComponents/ProfileButton";
import Timeline from "./DashboardComponents/Timeline";

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

  const [currentComponent, setCurrentComponent] = useState("!Profile");
  const handleComponentChange = (component) => setCurrentComponent(component);

  const renderComponent = () => {
    if (currentComponent === "Profile") {
      return <Profile />;
    }
  };

  return (
    <div>
      <ProfileButton
        currentComponent={currentComponent}
        handleComponentChange={handleComponentChange}
      />
      {renderComponent()}
    </div>
  );
}
