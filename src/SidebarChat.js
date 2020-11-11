import React from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from '@material-ui/core';


function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Type Message</p>
            </div>
        </div>
    )
}

export default SidebarChat;
  