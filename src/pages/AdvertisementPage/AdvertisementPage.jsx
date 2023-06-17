import React from "react";
import "./AdvertisementPage.css";
import { UilSearch } from "@iconscout/react-unicons";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";
import Advertise from "../../components/Advertise/Advertise";

const AdvertisementPage = () => {
  return (
    <div className="LikePage">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div className="Pos">
        <div className="CNlikes">
          <Advertise />
        </div>

        <div className="Icommstll">
          <Icons />
        </div>
      </div>

      <div className="loggg">
        <RightSide />
      </div>
    </div>
  );
};

export default AdvertisementPage;
