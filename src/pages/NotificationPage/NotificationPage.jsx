import React from "react";
import "./NotificationPage.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";
import Notify from "../../components/Notify/Notify";

const NotificationPage = () => {
  return (
    <div className="Video">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div>
        <Notify />

        <div className="IcommdT">
          <Icons />
        </div>
      </div>

      <div className="loggg">
        <RightSide />
      </div>
    </div>
  );
};

export default NotificationPage;
