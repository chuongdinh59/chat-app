import React from "react";
import ChatRoom from "../components/ChatRoom";
import RoomList from "../components/RoomList";

function ChatHome(props) {
  return (
    <div className="chat">
      <RoomList />
      <ChatRoom />
    </div>
  );
}

export default ChatHome;
