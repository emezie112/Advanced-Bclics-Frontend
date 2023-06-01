import React from "react";
import "./Likes.css";

import { Followers } from "../../Data/FollowersData";
const Likes = () => {
  return (
    <div className="Likes">
      <h2>Who liked your post</h2>

      {Followers.map((follower, id) => {
        return (
          <div className="like">
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

export default Likes;
