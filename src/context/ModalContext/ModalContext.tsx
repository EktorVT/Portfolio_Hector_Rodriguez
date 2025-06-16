import { createContext, useState, useContext, ReactNode } from "react";
import Modal from "../../components/Modal/Modal";

interface ModalStateType {
  isOpen: boolean;
  content: ReactNode | null;
}

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState<ModalStateType>({
    isOpen: false,
    content: null
  });

  const openModal = (content: ReactNode) => {
    setModalState({ isOpen: true, content });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, content: null });
  };

  const contextValue: ModalContextType = {
    openModal,
    closeModal
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modalState.isOpen && modalState.content && (
        <Modal onClose={closeModal}>{modalState.content}</Modal>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal debe ser usado dentro de un ModalProvider");
  }
  return context;
};
