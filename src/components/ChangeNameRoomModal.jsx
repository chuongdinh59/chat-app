import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";
import Modal from "./Modal";
function ChangeNameRoomModal(props) {
  const { isOpenChangeName, setIsOpenChangeName } = useContext(ModalContext);
  const { roomRef } = useContext(RoomContext);
  const [value, setValue] = useState("");
  const changeName = () => {
    if (value === "") return;
    roomRef.update({
      nameRoom: value,
    });
    setIsOpenChangeName(false);
    setValue("");
  };
  return (
    <Modal
      name={"changename"}
      isOpen={isOpenChangeName}
      handleClose={() => setIsOpenChangeName(false)}
    >
      <div className="modal-changeName">
        <span>Tên mới: </span>
        <input
          type="text"
          placeholder="Tên phòng"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) changeName();
          }}
        />
      </div>
    </Modal>
  );
}

export default ChangeNameRoomModal;
