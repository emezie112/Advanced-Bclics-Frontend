import React from 'react'
import "./Explore.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";

const Explore = () => {
  return (
    <div className="NotificationCont">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p style={{ marginLeft: "-14px" }}>Explore</p>
        <p style={{ color: "#aaa", marginLeft: "40px" }}> See all</p>
      </div>
      <div className='imagedivv'>
        <img src={`${image}`} className="exploreimage" alt="" />
        <img src={`${image1}`} className="exploreimage" alt="" />
        <img src={`${image2}`} className="exploreimage" alt="" />
        <img src={`${image3}`} className="exploreimage" alt="" />
        <img src={`${image4}`} className="exploreimage" alt="" />
        <img src={`${image5}`} className="exploreimage" alt="" />
        <img src={`${image6}`} className="exploreimage" alt="" />
        <img src={`${image3}`} className="exploreimage" alt="" />
      </div>
    </div>
  );
}

export default Explore