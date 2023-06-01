import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../Data/FollowersData";
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h2>People you may know</h2>

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

      <span className="more"> more...</span>
    </div>
  );
};

export default FollowersCard;
