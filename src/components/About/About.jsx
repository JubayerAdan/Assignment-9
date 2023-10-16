import React from "react";
import "./About.css";
import User from "../../assets/images/user.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const About = () => {
  return (
    <div className="about container">
      <div className="row mt-4">
        <div className="col-md-7">
          <h1 className="extra-bold">One Step</h1>
          <h1 className="extra-bold">Closer To Your</h1>
          <h1 className="extra-bold theme-text">Dream Job</h1>
          <p>
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. It's your future. Come find it. Manage all{" "}
            <br /> your job applications from start to finish.
          </p>
          <button className="btn btn-theme text-white rounded">
            Get Started
          </button>
        </div>
        <div className="col-md-5">
          <img className="img-fluid user-img" src={User} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
