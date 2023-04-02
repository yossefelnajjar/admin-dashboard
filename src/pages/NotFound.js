import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full bg-black h-full absolute z-50">
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Dashboard</Link>
      <Link to="/setting">Settings</Link>
      <Link to="/Profile">Profile</Link>
    </div>
  );
};

export default NotFound;
