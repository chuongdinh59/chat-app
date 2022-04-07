import React from "react";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
function HeaderChat(props) {
  return (
    <header className="header">
      <div className="header-profile">
        <img
          src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
          alt=""
        />
        <div className="header-profile_desc">
          <h4 className="title title-room">Phòng Chat 1</h4>
          <p className="text status">Đang hoạt động</p>
        </div>
      </div>
      <div className="header-control">
        <div className="header-control_call pointer">
          <FaPhoneAlt />
        </div>
        <div className="header-control_video pointer">
          <FaVideo />
        </div>
        <div className="header-control_setting pointer">
          <IoMdSettings />
        </div>
      </div>
    </header>
  );
}

export default HeaderChat;
