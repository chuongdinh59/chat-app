import React, { createContext, useContext, useMemo } from "react";
import useFirestore from "../hooks/useFirestore";
import { AuthContext } from "./AuthProvider";

export const RoomContext = createContext();

export default function RoomProvider({ children }) {
  const { user } = useContext(AuthContext);
  const roomsCondition = useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: user?.uid,
    };
  }, [user?.uid]);
  const rooms = useFirestore("rooms", roomsCondition);
  // console.log(roomsCondition);
  // console.log(rooms);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
}
