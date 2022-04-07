import React from "react";
import HeaderChat from "./HeaderChat";
import { RiEmotionHappyFill } from "react-icons/ri";
function ChatRoom(props) {
  return (
    <div className="room-chat">
      <HeaderChat />
      <div className="room-chat_main">
        <div className="room-chat_message">
          <div className="message-item active-message mt-2">
            <img
              src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-anime-12.jpg?fit=640%2C20000&quality=95&ssl=1"
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
              Chào mừng bạn đến với bình nguyên vô tận
            </span>
          </div>
          <div className="message-item mt-2">
            <img
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/275240297_2742431866058452_803486451300006233_n.jpg?stp=c0.7.100.100a_dst-jpg_p100x100&_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nw863DJiRagAX-DBtTP&_nc_oc=AQm6Zl-4t11EJ05ufCKr-RmZs9_ZfaA33va33ty_kuYp6cNz2XETtjbsU5zVed_in2U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT-ekwNLxaRfuLN1li2ZronTwapNHD8lWXCIILWmFGSI2w&oe=62535B41"
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
              Chào mừng bạn đến với bình nguyên vô tận
            </span>
          </div>
          <div className="message-item mt-2">
            <img
              src="https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/09/avatar-anime-12.jpg?fit=640%2C20000&quality=95&ssl=1"
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
              Chào mừng bạn đến với bình nguyên vô tận
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
