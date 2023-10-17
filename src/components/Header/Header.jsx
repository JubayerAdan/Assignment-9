import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/CareerHub.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="container header d-flex justify-content-between align-items-center">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="d-flex pt-2 link-container justify-content-center">
        <Link to="/statistics" className="me-3 ">
          Statistics
        </Link>
        <Link to="/applied" className="me-3">
          Applied Jobs
        </Link>
        <Link to="/blog" className="me-3">
          Blog
        </Link>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-theme  rounded text-white">
          Star Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
