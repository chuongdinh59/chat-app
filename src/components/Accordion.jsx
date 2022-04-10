import React, { useContext, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import { ModalContext } from "../context/ModalProvider";
function Accordion({ title, content }) {
  const [active, setActive] = useState(false);
  const { setIsOpenInvite } = useContext(ModalContext);

  return (
    <div className="bar-main_item mb-2">
      <div className="control title pointer" onClick={() => setActive(!active)}>
        <span>{title}</span>
        <MdOutlineKeyboardArrowDown />
      </div>
      {active && (
        <div className="content mt-2">
          {content.map((i, id) => (
            <div className="item title pointer mb-2" key={id}>
              <div className="item-title">
                {typeof i.icon === "string" ? (
                  <img src={i.icon} alt="" />
                ) : (
                  i.icon
                )}
                <span>{i.cate}</span>
              </div>
            </div>
          ))}
          {title === "Thành viên trong đoạn chat" && (
            <div
              className="add-member pointer"
              onClick={() => setIsOpenInvite(true)}
            >
              <GrAddCircle />
              <span>Thêm người</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Accordion;
