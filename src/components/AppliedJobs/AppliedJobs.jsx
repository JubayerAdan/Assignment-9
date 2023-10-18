import React, { useEffect, useState } from "react";
import RouteHeader from "../RouteHeader/RouteHeader";
import { getShoppingCart } from "../../utilites/fakedb";
import AppliedCard from "../AppliedCard/AppliedCard";

const AppliedJobs = () => {
  const [cart, setCart] = useState([]);
  const [filteredCarts, setFilteredCart] = useState([]);
  const [loading, setLoading] = useState(true);

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
      console.log(storedCart);

      const ids = Object.keys(storedCart).map((id) => parseInt(id, 10)); // Convert keys to integers
      const filteredArray = cart.filter((obj) => ids.includes(obj.id));
      setFilteredCart(filteredArray);
    }
  }, [loading, cart]);

  return (
    <div>
      <RouteHeader>Applied Jobs</RouteHeader>
      {filteredCarts.map((filteredCart) => (
        <div className="p-5 m-5">
          <AppliedCard card={filteredCart}></AppliedCard>
        </div>
      ))}
      {/* Render the filteredCart data */}
    </div>
  );
};

export default AppliedJobs;
