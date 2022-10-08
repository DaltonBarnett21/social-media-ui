import React from "react";
import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="leftbarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
