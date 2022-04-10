import React, { useContext } from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";
function HeaderChat(props) {
  const { isOpenSetting, setIsOpenSetting } = useContext(ModalContext);
  const {
    selectedRoom: { nameRoom },
  } = useContext(RoomContext);
  return (
    <header className="header">
      <div className="header-profile">
        <img
          src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
          alt=""
          className="mr-1"
        />
        <div className="header-profile_desc">
          <h4 className="title title-room">{nameRoom}</h4>
          <p className="text status">Đang hoạt động</p>
        </div>
      </div>
      <div className="header-control">
        <div className="header-control_call header-control_btn pointer mr-1">
          <FaPhoneAlt />
        </div>
        <div className="header-control_video header-control_btn pointer mr-1">
          <FaVideo />
        </div>
        <div
          className="header-control_setting header-control_btn pointer"
          onClick={() => {
            setIsOpenSetting(!isOpenSetting);
          }}
        >
          <IoMdSettings />
        </div>
      </div>
    </header>
  );
}

export default HeaderChat;
