import React from "react";
import "./Comments.css";

import { Followers } from "../../Data/FollowersData";
const Comments = () => {
  return (
    <div className="Comments">
      <h2> Comment</h2>

      <div>
        <div className="commte">
          <input
            style={{ fontSize: "1.2rem" }}
            type="text"
            placeholder="   comment..."
          />
          <div className="button Bbutton">Post</div>
        </div>
      </div>
      {Followers.map((follower, id) => {
        return (
          <>
            <div className="liker">
              <div>
                <img src={follower.img} className="LikerImage" alt="" />
                <div className="Likername">
                  <span>{follower.username}</span>
                  <p>
                    {" "}
                    ya the picture is very fine{" "}
                    <h5 style={{ color: "#aaa" }}>. 5h ago</h5>
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
