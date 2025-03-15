import { FC, ReactNode } from "react";
import Modal4 from "../modals/Modal4";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface AddButtonProps {
  modalName: string;
  label: string;
  icon?: ReactNode;
  children: (props: { onClose: () => void }) => ReactNode;
}

const TingoModalButton: FC<AddButtonProps> = ({ modalName, label, icon, children }) => {
  return (
    <Modal4>
      <Modal4.Open opens={modalName}>
        <button className="flex items-center gap-2 bg-[#002b41] text-slate-300 px-4 py-4 rounded-md hover:bg-[#003b5c] transition-colors">
          {icon || <AiOutlinePlusCircle size={20} />}
          <span>{label}</span>
        </button>
      </Modal4.Open>
      <Modal4.Window name={modalName}>
        {(props) => children({ onClose: props.onClose || (() => {}) })}
      </Modal4.Window>
    </Modal4>
  );
};

export default TingoModalButton;
