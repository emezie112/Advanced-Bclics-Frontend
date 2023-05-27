import React from "react";
import "./Video.css";
import Posts from "../../components/PostsR/PostsR";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";

const Video = () => {
  return (
    <div className="Video">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div>
        <Posts />
        
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

export default Video;
