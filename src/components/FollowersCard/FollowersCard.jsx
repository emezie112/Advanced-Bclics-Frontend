import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";
import { Link } from "react-router-dom";
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <Link
        style={{ textDecoration: "none", color: "var(--orange)" }}
        to="/suggested"
      >
        <h2>People you may know</h2>
      </Link>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImage" />
              <div className="name">
                <span>{follower.name}</span>
                <span>{follower.username}</span>
              </div>
            </div>
            <button className="button pc-button">Follow</button>
          </div>
        );
      })}

      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to="/suggested"
      >
        <span className="more"> more...</span>
      </Link>
    </div>
  );
};

export default FollowersCard;
