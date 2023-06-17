import React from "react";
import "./TrendCard.css";
import { Link } from "react-router-dom";

import { TrendData } from "../../Data/TrendData.js";
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to="/advertisement"
      >
        <h3>Trends for you</h3>
      </Link>

      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.views}k views</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
