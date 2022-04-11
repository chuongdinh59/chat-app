import React, { useContext } from "react";
import { BsCircle } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { MdInsertPhoto } from "react-icons/md";
import { RoomContext } from "../context/RoomProvider";
import Accordion from "./Accordion";
function SideBarSetting(props) {
  const { members } = useContext(RoomContext);
  const {
    selectedRoom: { nameRoom, photoURL },
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
        <img src={photoURL} alt="" />
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
