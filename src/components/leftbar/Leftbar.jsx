import React from "react";
import "./leftbar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Users } from "../../fakeData";
import CloseFriend from "../closeFriend/CloseFriend";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="leftbarListItem">
            <ChatBubbleOutlineIcon className="leftbarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PeopleOutlineIcon className="leftbarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
