import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
function Modal({ isOpen, handleClose, children }) {
  if (typeof document === undefined) {
    return <div className="modal"></div>;
  }
  return ReactDOM.createPortal(
    <div className={`modal ${isOpen ? "is-visible" : ""}`}>
      <div className="modal-overplay" onClick={handleClose}></div>
      <div className="modal-main">
        <div className="modal-close" onClick={handleClose}>
          <FaTimes />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.querySelector("body")
  );
}
export default Modal;
