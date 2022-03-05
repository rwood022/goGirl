import { useEffect, useState } from "react";
import React from "react";
import Profile from "./DashboardComponents/Profile";
import Timeline from "./DashboardComponents/Timeline";
import Navbar from "./Navbar";

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

  const [toggle, setToggle] = useState(false);
  const handleButtonClick = () => setToggle(toggle => !toggle);

  return (
    <div>
      <Navbar handleButtonClick={handleButtonClick}/>
      { toggle && <Profile />}
    </div>
  );
}
