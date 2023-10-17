import React from "react";
import bg1 from "../../assets/images/bg1.png";
import bg2 from "../../assets/images/bg2.png";
const RouteHeader = ({ children }) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <img src={bg1} alt="" />
        <h3 className="mt-5">{children}</h3>
        <img src={bg2} alt="" />
      </div>
    </div>
  );
};

export default RouteHeader;
