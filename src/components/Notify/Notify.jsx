import React from "react";
import "./Notify.css";
import image5 from "../Images/image5.jpg";

import { Followers } from "../../Data/FollowersData";
const Notify = () => {
  return (
    <div className="Notify">
      <h2>Activities going on</h2>

      {Followers.map((follower, id) => {
        return (
          <div className="likg">
            <div>
              <img src={follower.img} alt="" className="NotifyImage" />
              <div className="Namesy">
                <span>
                  {" "}
                  <b>{follower.username} </b>followed your account{" "}
                  <small>2h ago</small>
                </span>
              </div>
            </div>
            <img src={follower.img} alt="" className="NotifyImage" />
          </div>
        );
      })}

      {/* This is for notifications for commenting or liking a post
          it will have a small box instead of a cricle */}
      {Followers.map((follower, id) => {
        return (
          <div className="likg">
            <div>
              <img src={follower.img} alt="" className="NotifyImage" />
              <div className="Namesy">
                <span>
                  {" "}
                  <b>{follower.username} </b>commented on your post{" "}
                  <small>2h ago</small>
                </span>
              </div>
            </div>
            <img src={`${image5}`} alt="" className="commentImage" />
          </div>
        );
      })}
    </div>
  );
};

export default Notify;
