import React from "react";
import "./HashtagPage.css";
import { UilSearch } from "@iconscout/react-unicons";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";
import Post from "../../components/Post/Post";

const HashtagPage = () => {
  return (
    <div className="LikePage">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div className="Pos">
        <div className="LikeSearch">
          <input
            style={{ fontSize: "1.2rem" }}
            type="text"
            placeholder="search"
          />
          <div className="s-icon">
            <UilSearch />
          </div>
        </div>
        <div className="CNNlikes">
          <span># food </span>
          <div className="hashh">
            <Post />
          </div>
        </div>

        <div className="Icommst">
          <Icons />
        </div>
      </div>

      <div className="loggg">
        <RightSide />
      </div>
    </div>
  );
};

export default HashtagPage;
