import React from "react";
import "./Advertise.css";

const Advertise = () => {
  return (
    <div className="Advertise">
      <div className="ads">
        <h1> Advertise your contents </h1>

        <div className="adsPlan">
          <hr style={{ width: "92%", border: "0.8px solid #ececec" }} />

          <div>
            <p>Advertisments will be paid for using clics</p>
            <p>i.e : 1clic = #788.</p>

            <div className="gappp"></div>

            <p>for images or write ups 0.96clics = 130 views</p>
            <div className="adstype">
              {/* what ever is written in the amount bar will be multiplied by 5.8
              what ever is the answer will automatically appear in the Total views bar
              so therefore the total veiws will be disabled
              
              also the least amount should be 0.96clics which is #756*/}
              <input type="text" placeholder="write any amount" />{" "}
              <span className="equ">=</span>{" "}
              <input type="text" disabled placeholder="  total views" />
            </div>
            <button className="button adsbutton">pay now</button>
          </div>

          <div className="gappp"></div>
          <div>
            <p>for videos 1.2clics = 130 views</p>
            <div className="adstype">
              {/* what ever is written in the amount bar will be multiplied by 5.8
              what ever is the answer will automatically appear in the Total views bar
              so therefore the total veiws will be disabled
              
              also the least amount should be 1.2clics which is #945*/}
              <input type="text" placeholder="write any amount" />{" "}
              <span className="equ">=</span>{" "}
              <input type="text" disabled placeholder="  total views" />
            </div>
            <button className="button adsbutton">pay now</button>
          </div>

          <span>
            <p>
              {" "}
              Disclamer : The advertisment system works like a poster type.
            </p>
            <p>
              When it is viewed by the total number of people paided for, it
              will atomatically delete, thereby awaiting renewnal.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
