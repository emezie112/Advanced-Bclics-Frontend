import React from "react";
import "./FollowersP.css";
import { Followers } from "../../Data/FollowersData";

const FollowersP = () => {
  return (
    <div className="Likes">
      {/* This will change to     "people you are following"
          and you will renmove the blue background and leave the blue boarder when someone begins 
          to follow somebody */}
      <h2>people following you</h2>

      {Followers.map((follower, id) => {
        return (
          <div className="likttt">
            <div>
              <img src={follower.img} alt="" className="likeImage" />
              <div className="Names">
                <span>{follower.username}</span>
                <span>{follower.name}</span>
              </div>
            </div>
            <button className="button PP-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersP;
