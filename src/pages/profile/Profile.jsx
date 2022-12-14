import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/coverImg.jpg" alt="" />
              <img className="profileUserImg" src="/me.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dalton Barnett</h4>
              <span className="profileInfoDesc">Hello welcome!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
