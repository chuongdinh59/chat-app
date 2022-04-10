import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { BiUser } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiPhotograph } from "react-icons/hi";
import { ModalContext } from "../context/ModalProvider";
import addDocument from "../utils/addDocument";
import { AuthContext } from "../context/AuthProvider";
function CreateRoomModal(props) {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const createNewRoom = () => {
    value &&
      addDocument("rooms", {
        nameRoom: value,
        members: [user?.uid],
      });
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      handleClose={() => {
        setIsOpen(false);
      }}
    >
      <div className="modal-createRoom">
        <div className="modal-createRoom_field mt-2">
          <span>
            <BiUser />
            Tên phòng:
          </span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
          />
        </div>
        <div className="modal-createRoom_field mt-2">
          <span>
            <AiOutlinePlusCircle />
            Thêm thành viên:
          </span>
          <input type="text" />
        </div>
        <div className="modal-createRoom_field mt-2">
          <span>
            <HiPhotograph />
            Ảnh đại diện :
          </span>
          <input type="text" />
        </div>
        <div className="modal-createRoom_btn mt-2 text">
          <div
            className="btn-cancel btn pointer"
            onClick={() => setIsOpen(false)}
          >
            Trở lại
          </div>
          <div className="btn-apply btn pointer" onClick={createNewRoom}>
            Tạo Phòng
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CreateRoomModal;
