import React, { useContext, useState } from "react";
import { RiEmotionHappyFill } from "react-icons/ri";
import { AuthContext } from "../context/AuthProvider";
import { RoomContext } from "../context/RoomProvider";
import addDocument from "../utils/addDocument";
function HelperText(props) {
  const [value, setValue] = useState("");
  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);
  const { selectedRoomId } = useContext(RoomContext);
  return (
    <div className="room-chat_send mt-2">
      <input
        type="text"
        placeholder="Nhập tin nhắn cần gửi"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyUp={(e) => {
          if (e.keyCode === 13 && value !== "") {
            addDocument("message", {
              text: value,
              uid,
              photoURL,
              displayName,
              selectedRoomId,
            });
            setValue("");
          }
        }}
      />
      <RiEmotionHappyFill className="pointer emotion" />
    </div>
  );
}

export default HelperText;
