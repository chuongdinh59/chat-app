import React, { useContext } from "react";
import ChatRoom from "../components/ChatRoom";
import CreateRoomModal from "../components/CreateRoomModal";
import InviteMemberModal from "../components/InviteMemberModal";
import RoomList from "../components/RoomList";
import SideBarSetting from "../components/SideBarSetting";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";

function ChatHome(props) {
  const { isOpenSetting } = useContext(ModalContext);
  const { selectedRoomId } = useContext(RoomContext);

  return (
    <div className={`chat ${isOpenSetting === true ? "layout-3" : ""}`}>
      <RoomList />
      {selectedRoomId && <ChatRoom />}
      {isOpenSetting && <SideBarSetting />}
      <CreateRoomModal />
      <InviteMemberModal />
    </div>
  );
}

export default ChatHome;
