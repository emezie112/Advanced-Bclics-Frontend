import React from "react";
import "./Notification.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <div className="Notification">
      <div className="NotificationContainer">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p style={{ marginLeft: "-14px", fontSize: "bold" }}>Notifications</p>

          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/notification"
          >
            <p style={{ color: "#aaa", marginLeft: "40px" }}> See all</p>
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image1}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Emezie liked your post 2h ago
          </p>
          <img src={`${image4}`} className="likedimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image2}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Favour started following you 2w ago
          </p>
          <img src={`${image6}`} className="followinguserimg" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image3}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Emezie liked your post 5m ago
          </p>
          <img src={`${image1}`} className="likedimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image4}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Emezie liked your post 3y ago
          </p>
          <img src={`${image5}`} className="likedimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image2}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Cynthia is following you 3y ago
          </p>
          <img src={`${image}`} className="followinguserimg" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image5}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Mark Davis is folloewing you 3y ago
          </p>
          <img src={`${image}`} className="followinguserimg" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image4}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Emezie liked your post
          </p>
          <img src={`${image}`} className="likedimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            James is following 4y ago
          </p>
          <img src={`${image3}`} className="followinguserimg" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image2}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Emezie liked your post 4y ago
          </p>
          <img src={`${image1}`} className="likedimage" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image3}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            David is following you
          </p>
          <img src={`${image4}`} className="followinguserimg" alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={`${image5}`} className="notificationimg" alt="" />
          <p
            style={{
              marginLeft: "5px",
              color: "black",
              fontSize: 13,
              textAlign: "start",
              width: "120px",
              marginTop: -1,
            }}
          >
            {" "}
            Emezie liked your post
          </p>
          <img src={`${image}`} className="likedimage" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
