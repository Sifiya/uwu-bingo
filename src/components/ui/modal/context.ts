import { createContext, useContext } from 'solid-js';
import type { Accessor } from 'solid-js';

type ModalContextType = {
  isOpen: Accessor<boolean>;
  open: () => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: () => false,
  open: () => {},
  close: () => {},
});

export const useModalContext = () => useContext(ModalContext);
