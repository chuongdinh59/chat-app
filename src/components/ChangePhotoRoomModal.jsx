import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";
import Modal from "./Modal";
function ChangePhotoRoomModal(props) {
  const { isOpenChangePhoto, setIsOpenChangePhoto } = useContext(ModalContext);
  const { roomRef } = useContext(RoomContext);
  const [value, setValue] = useState("");
  const changePhoto = () => {
    if (value === "") return;
    roomRef.update({
      photoURL: value,
    });
    setIsOpenChangePhoto(false);
    setValue("");
  };
  return (
    <Modal
      name={"changename"}
      isOpen={isOpenChangePhoto}
      handleClose={() => setIsOpenChangePhoto(false)}
    >
      <div className="modal-changeName">
        <span>Ảnh mới: </span>
        <input
          type="text"
          placeholder="URL Ảnh "
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) changePhoto();
          }}
        />
      </div>
    </Modal>
  );
}

export default ChangePhotoRoomModal;
