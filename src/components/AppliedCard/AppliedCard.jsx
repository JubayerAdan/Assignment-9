import React from "react";
import "./AppliedCard.css";
import locateIcon from "../../assets/icons/Location.png";
import salaryIcon from "../../assets/icons/money.png";
import { useNavigate } from "react-router-dom";
const AppliedCard = ({ card, className }) => {
  const {
    logo,
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
  } = card;
  const navigate = useNavigate();
  return (
    <div>
      <div className="ft-card d-flex p-3 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img style={{ height: "50px" }} src={logo} alt="" />
          <div className="ms-5">
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
          </div>
        </div>
        <button
          onClick={() => navigate(`/${id}`)}
          className="btn-theme1 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AppliedCard;
