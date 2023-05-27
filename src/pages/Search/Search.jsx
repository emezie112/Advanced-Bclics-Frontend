import React from "react";
import "./Search.css";
import { UilSearch } from "@iconscout/react-unicons";
import Posts from "../../components/Posts/Posts";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";

const Search = () => {
  return (
    <div className="Search_page">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div className="Pos">
        <div className="Search">
          <input
            style={{ fontSize: "1.2rem" }}
            type="text"
            placeholder="Search"
          />
          <div className="s-icon">
            <UilSearch />
          </div>
        </div>
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

export default Search;
