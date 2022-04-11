import React, { createContext, useContext, useMemo, useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const RoomContext = createContext();

export default function RoomProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [selectedRoomId, setSelectedRoomId] = useState();
  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: user?.uid,
    };
  }, [user?.uid]);
  const rooms = useFirestore("rooms", roomsCondition);
  const selectedRoom = React.useMemo(
    () => rooms?.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );
  const usersCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom.members]);
  const members = useFirestore("users", usersCondition);
  const allUsersCondition = React.useMemo(() => {
    return {
      fieldName: "uid",
      operator: "not-in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom?.members]);
  const allMembers = useFirestore("users", allUsersCondition);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        selectedRoomId,
        setSelectedRoomId,
        members,
        selectedRoom,
        allMembers,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
