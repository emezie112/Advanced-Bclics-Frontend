import React,{useState} from "react";
import "./Video.css";
import Posts from "../../components/PostsR/PostsR";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Icons from "../../components/Icons/Icons";

const Video = () => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <div className="Video">
      <div className="loggg">
        <ProfileSide />
      </div>

      <div>
        <div onClick={() => setDropdown(!dropdown)} className="dot">
          ...
        </div>
        {dropdown && (
          <ul>
            <li>dropdown 1</li>
            <li>dropdown 2</li>
            <li>dropdown 2</li>
          </ul>
        )}
        <Posts />
        <div className="Icommd">
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
