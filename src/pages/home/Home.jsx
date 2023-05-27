//This is the page that shows everybody and all the posts the user is following



import React from "react";
import PostSideR from "../../components/PostSideR/PostSideR";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import Icons from "../../components/Icons/Icons";

const Home = () => {
  return (
    <div className="Home">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div className="Pos">
        <PostSideR />
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

export default Home;
