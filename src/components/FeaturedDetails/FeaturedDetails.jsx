import React from "react";
import { useLoaderData } from "react-router-dom";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
import toast from "react-hot-toast";
import "./FeaturedDetails.css";
import { addToDb } from "../../utilites/fakedb";
import RouteHeader from "../RouteHeader/RouteHeader";
const FeaturedDetails = () => {
  const card = useLoaderData();
  function applyNowHandler() {
    toast.success("Applied For This Job Successfully");
    addToDb(card.id);
  }
  return (
    <div className="">
      <RouteHeader>Job Details</RouteHeader>
      <div className="d-flex">
        <section className="Description-sec">
          <div>
            <p>
              <strong>Job Description:</strong>
              <small>{card.job_description}</small>
            </p>
            <p>
              <strong>Job Responsibility: </strong>
              <small>{card.job_responsibility}</small>
            </p>
            <p>
              <strong>Educational Requirements: </strong>
              <small>{card.educational_requirements}</small>
            </p>
            <p>
              <strong>Experiences: </strong>
              <small>{card.experiences}</small>
            </p>
          </div>
          <div></div>
        </section>

        <div>
          <section className="Details-sec">
            <p>
              <strong>Job Details</strong>
            </p>
            <hr />
            <h6>
              Salary: <small>{card.salary} (per month)</small>
            </h6>
            <h6>
              Job Title : <small>{card.job_title}</small>
            </h6>
            <p className="mt-3">
              <strong>Contact Information</strong>
              <hr />
            </p>
            <h6>
              Phone: <small>{card.contact_information.phone}</small>
            </h6>
            <h6>
              Email: <small>{card.contact_information.email}</small>
            </h6>
            <h6>
              Address: <small>{card.contact_information.address}</small>
            </h6>
          </section>
          <div className="d-flex justify-content-center mt-3 ">
            <button onClick={applyNowHandler} className="btn-theme2 rounded">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDetails;
