import React from "react";
import "./Views.css";

import { Followers } from "../../Data/FollowersData";
const Views = () => {
  return (
    <div className="Likes">
      <h2>Who Viewed your post</h2>

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

export default Views;
