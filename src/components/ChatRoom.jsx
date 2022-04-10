import React, { useContext } from "react";
import HeaderChat from "./HeaderChat";
import { RiEmotionHappyFill } from "react-icons/ri";
import { RoomContext } from "../context/RoomProvider";
function ChatRoom(props) {
  // const { users } = useContext(RoomContext);
  // console.log(users);
  return (
    <div className="room-chat">
      <HeaderChat />
      <div className="room-chat_main">
        <div className="room-chat_message">
          <div className="message-item active-message mt-2">
            <img
              src="https://symbols.vn/wp-content/uploads/2021/12/Cap-nhat-cho-ban-doc-hinh-Anime-cute-moi.jpg"
              alt=""
            />
            <span className="text">
              Chào mừng bạn đến với bình nguyên vô tận
            </span>
          </div>
          <div className="message-item mt-2">
            <img
              src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-anime-12.jpg?fit=640%2C20000&quality=95&ssl=1"
              alt=""
            />
            <span className="text">
              Chào mừng bạn đến với bình nguyên vô tận Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Repellat, illo, nihil
              voluptatem eaque eligendi placeat, ratione nulla minus maxime esse
              laboriosam officia voluptates! Fugit expedita minima accusantium
              eum nobis mollitia?
            </span>
          </div>
        </div>

        <div className="room-chat_send mt-2">
          <input type="text" placeholder="Nhập tin nhắn cần gửi" />
          <RiEmotionHappyFill className="pointer emotion" />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
