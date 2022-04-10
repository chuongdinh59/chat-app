import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalProvider";
import Modal from "./Modal";
function InviteMemberModal(props) {
  const { setIsOpenInvite, isOpenInvite } = useContext(ModalContext);

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
            <span>Chưa có người dùng nào</span>
          </div>
          <span className="title title-room">Gợi ý</span>
          <div className="item">
            <div className="item-profile">
              <img
                src="https://i.pinimg.com/736x/e8/23/19/e823197b012159b5d32cae16b2d7a4a9.jpg"
                alt=""
              />
              <span>Orayaku</span>
            </div>
            <input type="checkbox" />
          </div>
        </div>
        <div className="invite-member">Thêm thành viên</div>
      </div>
    </Modal>
  );
}

export default InviteMemberModal;
