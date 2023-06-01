import React, { useState } from "react";
import "./PostR.css";
import { UilHeart } from "@iconscout/react-unicons";
import { UilCommentChartLine } from "@iconscout/react-unicons";
import { UilShareAlt } from "@iconscout/react-unicons";
import { UilEye } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import CommentsPage from "../CommentsPage/CommentsPage";

const PostR = ({ data }) => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="PostR">
      <div className="imgclassw">
        <img src={data.img} alt="" />
      </div>

      <div className="postReactw">
        <img src={data.img} alt="" />
        <div>
          <i>
            <UilHeart />
          </i>

          <Link style={{ textDecoration: "none", color: "inherit" }} to="/like">
            <span>{data.likes}</span>
          </Link>
        </div>
        <div>
          <i>
            <UilCommentChartLine
              width="2rem"
              height="1.1rem"
              onClick={() => setModalOpened(true)}
            />
            <CommentsPage
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </i>
          {/* {   Comments  } */}
          <span> 356 </span>
        </div>

        <div>
          <i>
            <UilEye />
          </i>
          {/* {   Shares   } */}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/view"
          >
            <span>3k</span>
          </Link>
        </div>
        <div>
          <i>
            <UilShareAlt />
          </i>
          {/* {   Shares   } */}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/share"
          >
            <span> 52 </span>
          </Link>
        </div>
      </div>

      {/* PostR Details */}
      <div className="detailw">
        <span>
          <b>{data.name}</b> <h5 style={{ color: "#aaa" }}>. 2mins ago</h5>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default PostR;
