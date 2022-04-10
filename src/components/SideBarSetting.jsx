import React, { useContext } from "react";
import { BsCircle } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { MdInsertPhoto } from "react-icons/md";
import { RoomContext } from "../context/RoomProvider";
import Accordion from "./Accordion";
function SideBarSetting(props) {
  const { members } = useContext(RoomContext);
  const {
    selectedRoom: { nameRoom },
  } = useContext(RoomContext);
  const AccordionData = [
    {
      title: "Tùy chỉnh đoạn chat",
      content: [
        {
          icon: <HiOutlinePencil />,
          cate: "Đổi tên đoạn chat ",
        },
        {
          icon: <MdInsertPhoto />,
          cate: "Thay đổi ảnh ",
        },
        {
          icon: <BsCircle />,
          cate: "Đổi chủ đề ",
        },
        {
          icon: <BsCircle />,
          cate: "Chỉnh sửa biệt danh ",
        },
      ],
    },
    {
      title: "Thành viên trong đoạn chat",
      content: members?.map((i) => {
        return {
          icon: i?.photoURL,
          cate: i.displayName,
        };
      }),
    },
  ];
  return (
    <div className="bar">
      <div className="bar-header mb-2">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p className="title title-room">{nameRoom}</p>
      </div>
      <div className="bar-main">
        {AccordionData.map((i, id) => (
          <Accordion key={id} title={i.title} content={i.content} />
        ))}
      </div>
    </div>
  );
}

export default SideBarSetting;
