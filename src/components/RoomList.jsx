import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";
function RoomList(props) {
  const { setIsOpen } = useContext(ModalContext);
  const { rooms, selectedRoomId, setSelectedRoomId } = useContext(RoomContext);

  return (
    <div className="room">
      <h4 className="room-header title mb-2">Chat</h4>
      <div className="room-search mb-2 pointer">
        <div className="room-search_icon">
          <FaSearch />
        </div>
        <input type="text" placeholder="Tìm kiếm trên chat app" />
      </div>
      <div className="room-btn_addRoom pointer" onClick={() => setIsOpen(true)}>
        <IoIosAdd />
        <span className="text">Thêm Phòng</span>
      </div>
      <div className="room-list mt-2">
        {rooms?.map((i) => {
          return (
            <div
              key={i?.id}
              className={`room-item pointer ${
                selectedRoomId === i?.id ? "selected-room" : ""
              }`}
              onClick={() => setSelectedRoomId(i?.id)}
            >
              <img src={i?.photoURL} alt="" className="room-item_avatar" />
              <div className="room-item_content">
                <h5 className="room-name title title-room">{i?.nameRoom}</h5>
                <p className="text">
                  Bạn: Chào mừng bạn đã đến với bình nguyên vô tận{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RoomList;
