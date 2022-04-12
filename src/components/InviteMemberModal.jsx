import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { ModalContext } from "../context/ModalProvider";
import { RoomContext } from "../context/RoomProvider";
import { db } from "../firebase/config";
import Modal from "./Modal";
function InviteMemberModal(props) {
  const { setIsOpenInvite, isOpenInvite } = useContext(ModalContext);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const { allMembers, selectedRoomId, selectedRoom } = useContext(RoomContext);
  const [dataSearch, setDataSearch] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const typeRender = !!value ? dataSearch : allMembers;

  const addUserToRoom = () => {
    if (selectedMembers.length === 0) return;
    const roomRef = db.collection("rooms").doc(selectedRoomId);
    roomRef.update({
      members: [
        ...selectedRoom?.members,
        ...selectedMembers?.map((i) => i.uid),
      ],
    });
    setIsOpenInvite(false);
  };
  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    if (value !== "") {
      ref.current = setTimeout(() => {
        const users = allMembers
          ?.map((i) => {
            if (i?.key?.includes(value)) {
              return {
                ...i,
              };
            }
          })
          .filter((i) => i !== undefined);
        setDataSearch(users);
      }, 400);
    } else {
    }
  }, [value]);
  const addUserToBar = (data) => {
    const findIndex = selectedMembers.findIndex((i) => i?.uid === data?.uid);
    if (findIndex < 0) {
      setSelectedMembers([...selectedMembers, data]);
      return;
    }
    selectedMembers.splice(findIndex, 1);
    setSelectedMembers([...selectedMembers]);
  };
  return (
    <Modal
      isOpen={isOpenInvite}
      handleClose={() => {
        setIsOpenInvite(false);
        setValue("");
        setSelectedMembers([]);
      }}
      name="invite"
    >
      <div className="modal-invite mt-2">
        <div className="modal-invite_input">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="search"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            ref={ref}
            value={value}
          />
        </div>
        <div className="modal-invite_output ">
          <div className="output-se">
            {selectedMembers.length <= 0 ? (
              <span>Chưa có người dùng nào</span>
            ) : (
              selectedMembers.map((i) => (
                <div className="output-se_item">
                  <img src={i.photoURL} alt="" />
                  <p>{i.displayName}</p>
                  <div
                    className="close-icon pointer"
                    onClick={() => addUserToBar(i)}
                  >
                    <FaTimes />
                  </div>
                </div>
              ))
            )}
          </div>
          <span className="title title-room">Gợi ý</span>

          <div className="list">
            {typeRender?.length > 0 ? (
              typeRender?.map((i) => (
                <div className="item">
                  <div className="item-profile">
                    <img src={i?.photoURL} alt="" />
                    <span>{i?.displayName}</span>
                  </div>
                  <div className="container-check">
                    <input type="checkbox" onChange={() => addUserToBar(i)} />
                    {selectedMembers.find((data) => data.uid === i.uid) && (
                      <span
                        className="check-mark"
                        onClick={() => addUserToBar(i)}
                      >
                        <AiOutlineCheck />
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <span className="unknow">Không tìm thấy người dùng</span>
            )}
          </div>
          <div
            className={`invite-member pointer ${
              selectedMembers?.length > 0 ? "active" : ""
            }`}
            onClick={addUserToRoom}
          >
            Thêm thành viên
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default InviteMemberModal;
