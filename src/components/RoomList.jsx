import React from "react";
import { FaSearch } from "react-icons/fa";
function RoomList(props) {
  return (
    <div className="room">
      <h4 className="room-header title mb-2">Chat</h4>
      <div className="room-search mb-2 pointer">
        <div className="room-search_icon">
          <FaSearch />
        </div>
        <input type="text" placeholder="Tìm kiếm trên chat app" />
      </div>
      <div className="room-list mt-2">
        <div className="room-item selected-room ">
          <img
            src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
            alt=""
            className="room-item_avatar"
          />
          <div className="room-item_content">
            <h5 className="room-name title title-room">Phòng Chat 1</h5>
            <p className="text">
              Bạn: Chào mừng bạn đã đến với bình nguyên vô tận{" "}
            </p>
          </div>
        </div>
        <div className="room-item ">
          <img
            src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
            alt=""
            className="room-item_avatar"
          />
          <div className="room-item_content">
            <h5 className="room-name title title-room">Phòng Chat 1</h5>
            <p className="text">
              Bạn: Chào mừng bạn đã đến với bình nguyên vô tận{" "}
            </p>
          </div>
        </div>
        <div className="room-item mb-2">
          <img
            src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
            alt=""
            className="room-item_avatar"
          />
          <div className="room-item_content">
            <h5 className="room-name title title-room">Phòng Chat 1</h5>
            <p className="text">
              Bạn: Chào mừng bạn đã đến với bình nguyên vô tận{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomList;
