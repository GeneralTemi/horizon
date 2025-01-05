import { create } from "zustand";

interface ModalData {
  amount: string;
  beneficiary: string;
  name: string;
  senderBank: string;
}

interface ModalState {
  isOpen: boolean;
  modalData: ModalData | null;
  openModal: (data: ModalData) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalData: null,
  openModal: (data: ModalData) => set({ isOpen: true, modalData: data }),
  closeModal: () => set({ isOpen: false, modalData: null }),
}));

export default useModalStore;
