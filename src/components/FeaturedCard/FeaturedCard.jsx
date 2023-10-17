import React from "react";
import "./FeaturedCard.css";
import locateIcon from "../../assets/icons/Location.png";
import salaryIcon from "../../assets/icons/money.png";
const FeaturedCard = ({ card }) => {
  const { logo, job_title, company_name, remote_or_onsite, location, salary } =
    card;
  return (
    <div>
      <div className="ft-card">
        <img src={logo} alt="" />
        <h4>{job_title}</h4>
        <p>
          <small>{company_name}</small>
        </p>
        <div className="remote_or_onsite">
          <span>{remote_or_onsite}</span>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <img src={locateIcon} alt="" />
            <small className="mt-2">{location}</small>
          </div>
          <div className="d-flex">
            <img src={salaryIcon} alt="" />
            <div className="mt-2">
              {" "}
              <small>Salary: {salary}</small>
            </div>
          </div>
        </div>
        <button className="btn-theme1 rounded">View Details</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
