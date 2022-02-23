import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/" className="back-btn">
      HomePage
    </Link>
  );
};

export default BackButton;
