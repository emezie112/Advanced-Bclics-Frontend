import React from "react";
import "./ViewPage.css";
import { UilSearch } from "@iconscout/react-unicons";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";
import Views from "../../components/Views/Views";

const ViewPage = () => {
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
        <div className="CNlikes">
          <Views />
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

export default ViewPage;
