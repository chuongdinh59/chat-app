import React from "react";
import ChatRoom from "../components/ChatRoom";
import CreateRoomModal from "../components/CreateRoomModal";
import RoomList from "../components/RoomList";

function ChatHome(props) {
  return (
    <div className="chat">
      <RoomList />
      <ChatRoom />
      <CreateRoomModal />
    </div>
  );
}

export default ChatHome;
