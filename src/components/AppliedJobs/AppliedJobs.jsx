import React, { useEffect, useState } from "react";
import RouteHeader from "../RouteHeader/RouteHeader";
import { getShoppingCart } from "../../utilites/fakedb";
import AppliedCard from "../AppliedCard/AppliedCard";
import "./AppliedJobs.css";
const AppliedJobs = () => {
  const [cart, setCart] = useState([]);
  const [filteredCarts, setFilteredCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // Default: Show all jobs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("jobs.json");
        const data = await response.json();
        setCart(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      const storedCart = getShoppingCart();
      const ids = Object.keys(storedCart).map((id) => parseInt(id, 10));
      const filteredArray = cart.filter((obj) => ids.includes(obj.id));
      setFilteredCart(filteredArray);
    }
  }, [loading, cart]);

  // Function to filter jobs based on the selected filter option
  const filterJobs = () => {
    if (filter === "all") {
      return filteredCarts; // Show all jobs
    } else if (filter === "remote") {
      return filteredCarts.filter((job) => job.remote_or_onsite === "Remote");
    } else if (filter === "onsite") {
      return filteredCarts.filter((job) => job.remote_or_onsite === "Onsite");
    }
  };

  return (
    <div>
      <RouteHeader>Applied Jobs</RouteHeader>
      <div className="filterjob d-flex justify-content-end ">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
        </select>
      </div>
      {filterJobs().map((filteredCart) => (
        <div className="p-5 m-2">
          <AppliedCard card={filteredCart}></AppliedCard>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
