import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";
import { auth } from "../firebase/config";
function RoomList(props) {
  const { setIsOpen } = useContext(ModalContext);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { rooms, selectedRoomId, setSelectedRoomId, newMessage } =
    useContext(RoomContext);
  const [dataSearch, setDataSearch] = useState([]);

  const typeRender = !!value ? dataSearch : rooms;

  useEffect(() => {
    const newSearchData = rooms?.filter((i) => i.key.includes(value));
    setDataSearch(newSearchData);
  }, [value]);
  return (
    <div className="room">
      <h4 className="room-header title mb-2">Chat</h4>
      <div className="room-search mb-2 pointer">
        <div className="room-search_icon">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm trên chat app"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </div>
      <div className="room-btn_addRoom pointer" onClick={() => setIsOpen(true)}>
        <IoIosAdd />
        <span className="text">Thêm Phòng</span>
      </div>
      <div className="room-list mt-2">
        {typeRender?.map((i) => {
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
                <p className="text">Bạn: Hãy bắt đầu cuộc trò chuyện</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="btn-logout pointer"
        onClick={() => {
          auth.signOut();
          localStorage.clear();
          navigate("/login");
        }}
      >
        Đăng xuất
      </button>{" "}
    </div>
  );
}

export default RoomList;
