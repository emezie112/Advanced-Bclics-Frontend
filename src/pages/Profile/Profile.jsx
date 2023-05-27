import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";
import ProfileCard from "../../components/ProfileCard.jsx/ProfileCard";
import "./Profile.css";
import FollowersCard from "../../components/FollowersCard/FollowersCard";
import ProfileSide from "../../components/profileSide/ProfileSide";
import Icons from "../../components/Icons/Icons";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="loggg">
        <ProfileCard />
        <FollowersCard />
      </div>

      <div className="Pos">
        <div className="logg">
          <ProfileCard />
        </div>
        <PostSide />
        <div className="Icomm">
          <Icons />
        </div>
      </div>

      <div className="loggg">
        <RightSide />
      </div>
    </div>
  );
};

export default Profile;
