import React, { createContext, useContext, useMemo, useState } from "react";
import { db } from "../firebase/config";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const RoomContext = createContext();

export default function RoomProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [selectedRoomId, setSelectedRoomId] = useState();
  const roomRef = db.collection("rooms").doc(selectedRoomId);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: user?.uid,
    };
  }, [user?.uid]);
  const rooms = useFirestore("rooms", roomsCondition);
  const selectedRoom = useMemo(
    () => rooms?.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );
  const usersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom.members]);
  const members = useFirestore("users", usersCondition);
  const allUsersCondition = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "not-in",
      compareValue: selectedRoom?.members,
    };
  }, [selectedRoom?.members]);
  const allMembers = useFirestore("users", allUsersCondition);
  const messageCondition = useMemo(() => {
    return {
      fieldName: "selectedRoomId",
      operator: "==",
      compareValue: selectedRoomId,
    };
  }, [selectedRoomId]);

  const messages = useFirestore("message", messageCondition);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        selectedRoomId,
        setSelectedRoomId,
        members,
        selectedRoom,
        allMembers,
        messages,
        roomRef,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
