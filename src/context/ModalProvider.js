import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ setIsOpen, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
