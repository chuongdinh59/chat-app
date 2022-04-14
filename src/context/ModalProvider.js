import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const [isOpenInvite, setIsOpenInvite] = useState(false);
  const [isOpenChangeName, setIsOpenChangeName] = useState(false);
  const [isOpenChangePhoto, setIsOpenChangePhoto] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        setIsOpen,
        isOpen,
        isOpenSetting,
        setIsOpenSetting,
        isOpenInvite,
        setIsOpenInvite,
        isOpenChangeName,
        setIsOpenChangeName,
        isOpenChangePhoto,
        setIsOpenChangePhoto,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
