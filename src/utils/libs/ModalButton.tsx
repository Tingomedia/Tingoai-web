import { FC, ReactNode } from "react";
import Modal from "../modals/Modal";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface AddButtonProps {
  modalName: string;
  label: string;
  icon?: ReactNode;
  children: (props: { onClose: () => void }) => ReactNode;
}

const ModalButton: FC<AddButtonProps> = ({ modalName, label, icon, children }) => {
  return (
    <Modal>
      <Modal.Open opens={modalName}>
        <button className="flex items-center gap-2 bg-[#002b41] text-slate-300 px-4 py-4 rounded-md hover:bg-[#003b5c] transition-colors">
          {icon || <AiOutlinePlusCircle size={20} />}
          <span>{label}</span>
        </button>
      </Modal.Open>
      <Modal.Window name={modalName}>
        {(props) => children({ onClose: props.onClose || (() => {}) })}
      </Modal.Window>
    </Modal>
  );
};

export default ModalButton;
