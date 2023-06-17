import React, { useState } from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const ProfileCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Zendaya MJ</span>
        <div className="doted">...</div>
        <div className="Edit">
          <p
            style={{ fontSize: "1.1rem", cursor: "poiter" }}
            onClick={() => setModalOpened(true)}
          >
            Edit
          </p>
          <UilPen
            width="2rem"
            height="1.1rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>

        {/* only 3 lines after display more */}

        <span>
          Senior UI/UX Designer very very good at it Senior UI/UX Designer very
          very good at it Senior UI/UX Designer very very good at it more...
        </span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          {/* This will change to "people you are following"
          and you will renmove the blue background and leave the blue boarder when someone begins 
          to follow somebody */}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/followers"
          >
            <div className="follow">
              <span>6,890</span>
              <span>Followings</span>
            </div>
          </Link>

          <div className="vl"></div>

          {/* This will change to "people following you" */}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/followers"
          >
            <div className="follow">
              <span>3,565</span>
              <span>Followers</span>
            </div>
          </Link>

          <div className="vl"></div>
          <div className="follow">
            <span>3</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}

      <div className="infoHead">
        <div className="foll">
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/suggested"
          >
            <button className="button logout-button">Follow Users</button>
          </Link>
        </div>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <button className="button logout-button">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
