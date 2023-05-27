import React from "react";
import "./ProfileSide.css";
import Notification from "../Notification/Notification";
import FollowersCard from "../FollowersCard/FollowersCard";
const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <Notification />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
