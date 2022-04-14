import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { RoomContext } from "../context/RoomProvider";
import HeaderChat from "./HeaderChat";
import HelperText from "./HelperText";
function ChatRoom(props) {
  const { messages } = useContext(RoomContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  return (
    <div className="room-chat">
      <HeaderChat />
      <div className="room-chat_main">
        <div className="room-chat_message">
          {messages?.map((i, id) => {
            return (
              <div
                key={id}
                className={`message-item  mt-2 ${
                  uid === i.uid ? "active-message" : ""
                }`}
              >
                <div className="a">
                  <img src={i.photoURL} alt="" />
                  <div className="tool-tip">
                    {i?.createAt?.toDate().getHours() +
                      ":" +
                      i?.createAt?.toDate().getMinutes()}
                  </div>
                </div>
                <span className="text">{i.text}</span>
                {/* <div className="tool-tip">
                  {i?.createAt.toDate().getHours() +
                    ":" +
                    i?.createAt.toDate().getMinutes()}
                </div> */}
              </div>
            );
          })}
          {/* <div className="message-item active-message mt-2">
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
          </div> */}
        </div>

        <HelperText />
      </div>
    </div>
  );
}

export default ChatRoom;
