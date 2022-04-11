import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalProvider";
import Modal from "./Modal";
import { RoomContext } from "../context/RoomProvider";
import { FaTimes } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
function InviteMemberModal(props) {
  const { setIsOpenInvite, isOpenInvite } = useContext(ModalContext);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const { allMembers } = useContext(RoomContext);

  const addUserToBar = (data) => {
    const findIndex = selectedMembers.findIndex((i) => i?.uid === data?.uid);
    console.log("here");
    if (findIndex < 0) {
      setSelectedMembers([...selectedMembers, data]);
      return;
    }
    selectedMembers.splice(findIndex, 1);
    setSelectedMembers([...selectedMembers]);
  };
  console.log(selectedMembers);
  return (
    <Modal
      isOpen={isOpenInvite}
      handleClose={() => {
        setIsOpenInvite(false);
      }}
      name="invite"
    >
      <div className="modal-invite mt-2">
        <div className="modal-invite_input">
          <input type="text" placeholder="Tìm kiếm" className="search" />
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
          {/* <div className="item">
            <div className="item-profile">
              <img
                src="https://i.pinimg.com/736x/e8/23/19/e823197b012159b5d3  2cae16b2d7a4a9.jpg"
                alt=""
              />
              <span>Orayaku</span>
            </div>
            <input type="checkbox" />
          </div> */}

          {allMembers?.map((i) => (
            <div className="item">
              <div className="item-profile">
                <img src={i?.photoURL} alt="" />
                <span>{i?.displayName}</span>
              </div>
              <div className="container-check">
                <input type="checkbox" onChange={() => addUserToBar(i)} />
                {selectedMembers.find((data) => data.uid === i.uid) && (
                  <span className="check-mark" onClick={() => addUserToBar(i)}>
                    <AiOutlineCheck />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`invite-member ${
            selectedMembers?.length > 0 ? "active" : ""
          }`}
        >
          Thêm thành viên
        </div>
      </div>
    </Modal>
  );
}

export default InviteMemberModal;
